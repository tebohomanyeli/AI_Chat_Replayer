// js/ConversationManager.js

/**
 * Manages the loading and accessing of conversation data.
 */
export class ConversationManager {
    #conversations = [];
    #currentIndex = -1;

    /**
     * @param {Array} conversationsData - Array of conversation objects.
     */
    constructor(conversationsData) {
        if (!Array.isArray(conversationsData)) {
            throw new Error("Invalid conversations data provided.");
        }
        this.#conversations = conversationsData;
        this.#currentIndex = conversationsData.length > 0 ? 0 : -1;
    }

    /**
     * Loads a conversation by its index.
     * @param {number} index - The index of the conversation to load.
     * @returns {boolean} - True if loading was successful, false otherwise.
     */
    loadConversation(index) {
        if (index >= 0 && index < this.#conversations.length) {
            this.#currentIndex = index;
            console.log(`Loaded Conversation ${index}: ${this.getCurrentConversation()?.title}`);
            return true;
        }
        console.warn(`Invalid conversation index: ${index}`);
        return false;
    }

    /**
     * Gets the currently loaded conversation object.
     * @returns {object|null} The current conversation or null.
     */
    getCurrentConversation() {
        return this.#conversations[this.#currentIndex] || null;
    }

    /**
     * Gets the index of the currently loaded conversation.
     * @returns {number}
     */
    getCurrentIndex() {
        return this.#currentIndex;
    }

    /**
     * Gets all conversation titles with their indices.
     * @returns {Array<{index: number, title: string}>}
     */
    getConversationTitles() {
        return this.#conversations.map((conv, index) => ({
            index: index,
            title: conv.title || `Conversation ${index + 1}`
        }));
    }

    /**
     * Gets the total number of conversations.
     * @returns {number}
     */
    getConversationCount() {
        return this.#conversations.length;
    }
}