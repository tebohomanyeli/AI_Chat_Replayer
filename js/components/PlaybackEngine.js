/**
 * Manages the core playback logic (state, timing, message indexing).
 * Emits events for state changes and message advancements.
 */
export class PlaybackEngine extends EventTarget {
    #messages = [];
    #currentMessageIndex = -1;
    #isPlaying = false;
    #autoplayTimer = null;
    #autoplayInterval;

    /**
     * @param {number} [autoplayInterval=1800] - Delay between messages in ms.
     */
    constructor(autoplayInterval = 1800) {
        super(); // Necessary for EventTarget
        this.#autoplayInterval = autoplayInterval;
    }

    /**
     * Loads messages for playback.
     * @param {Array} messages - The array of message objects for the current conversation.
     */
    loadMessages(messages) {
        this.pause(); // Stop any current playback
        this.#messages = Array.isArray(messages) ? messages : [];
        this.#currentMessageIndex = -1;
        this.#emitStateChange(); // Notify listeners of the reset state
    }

    /**
     * Starts or resumes autoplay.
     */
    play() {
        if (this.#isPlaying || this.isAtEnd()) return;

        this.#isPlaying = true;
        this.#emitStateChange(); // Notify about playing state

        // Show the next message immediately
        this.#advance();

        // If not at the end after advancing, start the timer
        if (!this.isAtEnd()) {
            this.#autoplayTimer = setInterval(() => {
                this.#advance();
            }, this.#autoplayInterval);
        } else {
            // If advancing put us at the end, pause immediately
             this.pause();
        }
    }

    /**
     * Pauses autoplay.
     */
    pause() {
        if (!this.#isPlaying) return;

        this.#isPlaying = false;
        clearInterval(this.#autoplayTimer);
        this.#autoplayTimer = null;
        this.#emitStateChange(); // Notify about paused state
    }

    /**
     * Advances to the next message. Called by play() or directly (manual next).
     */
    next() {
       if (this.isAtEnd()) return;
       this.pause(); // Ensure manual next pauses playback
       this.#advance();
    }

     /**
     * Internal method to advance the message index and emit event.
     */
    #advance() {
         if (this.isAtEnd()) {
            this.pause(); // Stop if we try to advance past the end
            return;
         }
         this.#currentMessageIndex++;
         const message = this.#messages[this.#currentMessageIndex];
         if (message) {
            // Emit event with the message to be displayed
             this.dispatchEvent(new CustomEvent('message', { detail: { message, index: this.#currentMessageIndex } }));
         }
         this.#emitStateChange(); // Update state (potentially isAtEnd)

         // If autoplay should stop because we reached the end
         if (this.#isPlaying && this.isAtEnd()) {
            this.pause();
         }
    }


    /**
     * Moves to the previous message state.
     * Note: This requires the UI to re-render previous messages.
     * The engine only manages the index.
     */
    previous() {
        if (this.isAtStart()) return;
        this.pause(); // Ensure manual prev pauses playback
        this.#currentMessageIndex--;
        // Emit event indicating the index change (UI needs to handle redraw)
        this.dispatchEvent(new CustomEvent('rewind', { detail: { index: this.#currentMessageIndex } }));
        this.#emitStateChange();
    }

    /**
     * Resets playback to the beginning of the current messages.
     */
    reset() {
        this.pause();
        const previousIndex = this.#currentMessageIndex;
        this.#currentMessageIndex = -1;
         // Only emit state change if index actually changed
        if (previousIndex !== -1) {
            this.dispatchEvent(new CustomEvent('reset'));
            this.#emitStateChange();
        }
    }

    /**
     * Checks if playback is at the first message (or before).
     * @returns {boolean}
     */
    isAtStart() {
        return this.#currentMessageIndex < 0;
    }

    /**
     * Checks if playback is at the last message.
     * @returns {boolean}
     */
    isAtEnd() {
        return this.#currentMessageIndex >= this.#messages.length - 1;
    }

    /**
     * Gets the current playback state.
     * @returns {{isPlaying: boolean, isAtStart: boolean, isAtEnd: boolean, currentIndex: number, totalMessages: number}}
     */
    getState() {
        return {
            isPlaying: this.#isPlaying,
            isAtStart: this.isAtStart(),
            isAtEnd: this.isAtEnd(),
            currentIndex: this.#currentMessageIndex,
            totalMessages: this.#messages.length
        };
    }

     /**
     * Emits a 'statechange' event with the current playback state.
     */
    #emitStateChange() {
       this.dispatchEvent(new CustomEvent('statechange', { detail: this.getState() }));
    }

    /**
     * Gets the messages up to the current index. Useful for re-rendering on rewind.
     * @returns {Array}
     */
    getMessagesUpToCurrent() {
        if (this.#currentMessageIndex < 0) return [];
        return this.#messages.slice(0, this.#currentMessageIndex + 1);
    }
}