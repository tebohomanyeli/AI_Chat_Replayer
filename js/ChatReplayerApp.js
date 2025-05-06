// js/ChatReplayerApp.js
import { ConversationManager } from './components/ConversationManager.js';
import { PlaybackEngine } from './components/PlaybackEngine.js';
import { ChatView } from './components/ChatView.js';
import { ControlsView } from './components/ControlsView.js';
import { SidebarView } from './components/SidebarView.js';
// Import the data
import { demoConversations } from './data/data.js';


/**
 * Main application class that orchestrates the chat replayer components.
 */
class ChatReplayerApp {
    #conversationManager;
    #playbackEngine;
    #chatView;
    #controlsView;
    #sidebarView;

    constructor() {
        try {
             // Check essential elements exist before creating instances
             if (!document.getElementById('chat-container') ||
                 !document.getElementById('controls') ||
                 !document.getElementById('chat-sidebar') ||
                 !document.getElementById('conversation-list') ||
                 !document.getElementById('sidebar-toggle')) // Check toggle explicitly too
            {
                 throw new Error("Missing one or more essential HTML elements (#chat-container, #controls, #chat-sidebar, #conversation-list, #sidebar-toggle).");
             }

            // 1. Initialize Data Management
            this.#conversationManager = new ConversationManager(demoConversations);

            // 2. Initialize Core Logic Engine
            this.#playbackEngine = new PlaybackEngine(1800); // Pass interval

            // 3. Initialize UI Views
            this.#chatView = new ChatView('chat-container');
            this.#controlsView = new ControlsView('controls');
            // Pass IDs needed by SidebarView constructor
            this.#sidebarView = new SidebarView('chat-sidebar', 'conversation-list', 'sidebar-toggle');


            // 4. Wire up the components (Event Listeners / Callbacks)
            this.#setupEventListeners();

            // 5. Initial Population and Load
            this.#sidebarView.populateList(this.#conversationManager.getConversationTitles());
            this.loadConversation(this.#conversationManager.getCurrentIndex()); // Load initial convo

            console.log("Chat Replayer Initialized (Refactored).");

        } catch (error) {
            this.#handleInitializationError(error);
        }
    }

    #setupEventListeners() {
        // --- Sidebar Interactions ---
        this.#sidebarView.addEventListener('select', (e) => {
            this.loadConversation(e.detail.index);
        });
        // Optional: Handle sidebar toggle if needed (e.g., logging)
        // this.#sidebarView.addEventListener('toggle', (e) => {
        //     console.log(`Sidebar toggled: ${e.detail.isOpen ? 'Open' : 'Closed'}`);
        // });

        // --- Control Interactions ---
        this.#controlsView.addEventListener('play', () => this.#playbackEngine.play());
        this.#controlsView.addEventListener('pause', () => this.#playbackEngine.pause());
        this.#controlsView.addEventListener('next', () => this.#playbackEngine.next());
        this.#controlsView.addEventListener('prev', () => this.#playbackEngine.previous());
        this.#controlsView.addEventListener('repeat', () => this.#playbackEngine.reset());

        // --- Playback Engine Events ---
        this.#playbackEngine.addEventListener('message', (e) => {
            // Render the message received from the engine
            this.#chatView.renderMessage(e.detail.message, true); // Animate new messages
        });

        this.#playbackEngine.addEventListener('statechange', (e) => {
            // Update control button states based on engine state
            this.#controlsView.updateButtonStates(e.detail);
        });

        this.#playbackEngine.addEventListener('reset', () => {
             // Clear the chat view when the engine resets
             this.#chatView.clear();
             // Button states are updated via the 'statechange' event triggered by reset()
        });

         this.#playbackEngine.addEventListener('rewind', (e) => {
             // Re-render messages up to the new index when rewinding
             const messagesToRender = this.#playbackEngine.getMessagesUpToCurrent();
             this.#chatView.renderMessages(messagesToRender); // Render without animation
             // Button states updated via 'statechange' event
         });
    }

    /**
     * Loads a specific conversation, updating all relevant components.
     * @param {number} index - The index of the conversation to load.
     */
    loadConversation(index) {
        if (this.#conversationManager.loadConversation(index)) {
            const conversation = this.#conversationManager.getCurrentConversation();
            if (conversation) {
                // 1. Stop current playback & load new messages into engine
                this.#playbackEngine.loadMessages(conversation.messages); // This also pauses and resets index

                // 2. Clear the chat display
                this.#chatView.clear();

                // 3. Update sidebar highlighting
                this.#sidebarView.highlightActive(index);

                 // Update the header with the conversation title
                const header = document.getElementById('conversation-title');
                if (header) header.innerText = conversation.title;

                // 4. Button states are implicitly updated via the 'statechange'
                //    event fired by playbackEngine.loadMessages()
            }
        } else {
             console.warn(`Failed to load conversation index ${index}`);
        }
    }

     #handleInitializationError(error) {
        console.error("Initialization failed:", error);
        const body = document.querySelector('body');
        if (body) {
             body.innerHTML = `<div style="color: #ff6b6b; background-color: #2b2b2b; border: 1px solid #ff6b6b; padding: 20px; margin: 20px; border-radius: 5px; font-family: sans-serif;"><strong>Error initializing application:</strong><br>${error.message}<br><br>Please check the browser console (F12) for more details. Ensure all required HTML elements exist.</div>`;
         }
     }
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Create the main application instance
    window.chatReplayerAppInstance = new ChatReplayerApp(); // Make instance accessible for debugging
});
