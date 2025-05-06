// js/ControlsView.js

/**
 * Manages the UI and interactions for playback control buttons.
 * Emits events when buttons are clicked.
 */
export class ControlsView extends EventTarget {
    #buttons = {}; // References to button DOM elements
    #container;

    /**
     * @param {string} containerId - The ID of the controls container element.
     */
    constructor(containerId) {
        super();
        this.#container = document.getElementById(containerId);
        if (!this.#container) {
            throw new Error(`Controls container element not found: #${containerId}`);
        }

        // Find buttons and store references
        this.#buttons.prev = this.#container.querySelector('#prev-btn');
        this.#buttons.next = this.#container.querySelector('#next-btn');
        this.#buttons.play = this.#container.querySelector('#play-btn');
        this.#buttons.pause = this.#container.querySelector('#pause-btn');
        this.#buttons.repeat = this.#container.querySelector('#repeat-btn');

        if (Object.values(this.#buttons).some(btn => !btn)) {
             throw new Error("One or more control buttons not found inside #controls");
        }

        this.#attachListeners();
    }

    #attachListeners() {
        this.#buttons.prev.addEventListener('click', () => this.dispatchEvent(new CustomEvent('prev')));
        this.#buttons.next.addEventListener('click', () => this.dispatchEvent(new CustomEvent('next')));
        this.#buttons.play.addEventListener('click', () => this.dispatchEvent(new CustomEvent('play')));
        this.#buttons.pause.addEventListener('click', () => this.dispatchEvent(new CustomEvent('pause')));
        this.#buttons.repeat.addEventListener('click', () => this.dispatchEvent(new CustomEvent('repeat')));
    }

    /**
     * Updates the enabled/disabled state and visibility of control buttons
     * based on the playback state provided by the PlaybackEngine.
     * @param {object} state - The playback state { isPlaying, isAtStart, isAtEnd, ... }.
     */
    updateButtonStates(state) {
        if (!state) return;

        this.#buttons.prev.disabled = state.isAtStart;
        this.#buttons.next.disabled = state.isAtEnd;
        this.#buttons.play.disabled = state.isPlaying || state.isAtEnd;
        this.#buttons.pause.disabled = !state.isPlaying;
        this.#buttons.repeat.disabled = false; // Always enabled

        // Toggle visibility of Play/Pause buttons
        this.#buttons.play.style.display = state.isPlaying ? 'none' : 'inline-block';
        this.#buttons.pause.style.display = state.isPlaying ? 'inline-block' : 'none';
    }
}