// js/ChatView.js
import { escapeHtml, configureMarked } from '../helpers/utils.js';

/**
 * Manages rendering messages to the chat container DOM.
 */
export class ChatView {
    #container;
    #markdownParser;

    /**
     * @param {string} containerId - The ID of the chat message container element.
     */
    constructor(containerId) {
        this.#container = document.getElementById(containerId);
        if (!this.#container) {
            throw new Error(`Chat container element not found: #${containerId}`);
        }
        this.#markdownParser = configureMarked(); // Configure Marked.js
    }

    /**
     * Renders a single message object into the chat container.
     * @param {object} msg - The message object { role, content, type }.
     * @param {boolean} [animate=true] - Whether to apply the fade-in animation.
     */
    renderMessage(msg, animate = true) {
        if (!msg) return;

        const messageElement = document.createElement('div');
        messageElement.classList.add('message', msg.role);
        if (!animate) {
            messageElement.style.opacity = 1;
            messageElement.style.animation = 'none';
        }

        let htmlContent = '';
        try {
            const contentString = String(msg.content || '');
            // Use the configured parser (Marked or fallback)
             // Note: The complex 'code' type handling from original might be simplified
             // if Marked's standard ```lang handling is sufficient.
             // Adjust here if specific pre-processing is needed.
             htmlContent = this.#markdownParser.parse(contentString);
        } catch (e) {
            console.error("Markdown parsing error:", e, "for message:", msg);
            const rawContent = String(msg.content || '');
            htmlContent = `<p style="color: red;">[Error rendering content]</p><pre><code>${escapeHtml(rawContent)}</code></pre>`;
        }

        messageElement.innerHTML = htmlContent;
        this.#container.appendChild(messageElement);
        this.scrollToBottom(animate); // Scroll after adding
    }

    /**
     * Renders multiple messages, typically used after a rewind or reset.
     * @param {Array<object>} messages - Array of message objects to render.
     */
    renderMessages(messages) {
        this.clear();
        messages.forEach(msg => this.renderMessage(msg, false)); // Render without animation
        // Ensure scroll is at bottom after bulk render
        this.scrollToBottom(false);
    }


    /**
     * Clears all messages from the chat container.
     */
    clear() {
        this.#container.innerHTML = '';
    }

    /**
     * Scrolls the chat container to the bottom.
     * @param {boolean} [smooth=true] - Use smooth scrolling.
     */
    scrollToBottom(smooth = true) {
         requestAnimationFrame(() => {
            this.#container.scrollTo({
                top: this.#container.scrollHeight,
                behavior: smooth ? 'smooth' : 'auto'
            });
        });
    }
}