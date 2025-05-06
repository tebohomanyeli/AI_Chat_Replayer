// js/SidebarView.js

/**
 * Manages the sidebar UI, including list population, selection, and toggling.
 * Emits events for conversation selection and toggle actions.
 */
export class SidebarView extends EventTarget {
    #sidebarElement;
    #toggleButton;
    #listElement;
    #isOpen = false; // Track state internally

    /**
     * @param {string} sidebarId - ID of the main sidebar container.
     * @param {string} listId - ID of the UL element for the conversation list.
     * @param {string} toggleId - ID of the button to toggle the sidebar.
     */
    constructor(sidebarId, listId, toggleId) {
        super();
        this.#sidebarElement = document.getElementById(sidebarId);
        this.#listElement = document.getElementById(listId);
        // Toggle button is assumed to be *inside* the sidebar element
        this.#toggleButton = this.#sidebarElement?.querySelector(`#${toggleId}`);

        if (!this.#sidebarElement || !this.#listElement || !this.#toggleButton) {
            throw new Error("Sidebar elements not found (#chat-sidebar, #conversation-list, or #sidebar-toggle)");
        }

        // Set initial state based on current classes
        this.#isOpen = this.#sidebarElement.classList.contains('open');
        this.#updateBodyClass(); // Sync body class initially

        this.#attachListeners();
    }

    #attachListeners() {
        // Toggle button listener
        this.#toggleButton.addEventListener('click', () => {
            this.#isOpen = !this.#isOpen;
            this.#updateSidebarClass();
            this.#updateBodyClass();
             this.dispatchEvent(new CustomEvent('toggle', { detail: { isOpen: this.#isOpen } }));
        });

        // List item click listener (event delegation)
        this.#listElement.addEventListener('click', (event) => {
            const listItem = event.target.closest('li');
            if (listItem && listItem.dataset.index) {
                const index = parseInt(listItem.dataset.index, 10);
                if (!isNaN(index)) {
                    this.dispatchEvent(new CustomEvent('select', { detail: { index } }));
                    // Optionally close sidebar on selection
                     this.#isOpen = false;
                     this.#updateSidebarClass();
                     this.#updateBodyClass();
                }
            }
        });
    }

    /**
     * Populates the sidebar list with conversation titles.
     * @param {Array<{index: number, title: string}>} titles - Array of title objects.
     */
    populateList(titles) {
        this.#listElement.innerHTML = ''; // Clear existing items
        titles.forEach(({ index, title }) => {
            const li = document.createElement('li');
            li.textContent = title;
            li.dataset.index = index;
            this.#listElement.appendChild(li);
        });
    }

    /**
     * Highlights the active conversation in the list.
     * @param {number} activeIndex - The index of the conversation to mark as active.
     */
    highlightActive(activeIndex) {
        this.#listElement.querySelectorAll('li').forEach(li => {
            const index = parseInt(li.dataset.index, 10);
            li.classList.toggle('active', index === activeIndex);
        });
    }

    // --- Private helpers for UI state ---
    #updateSidebarClass() {
        this.#sidebarElement.classList.toggle('open', this.#isOpen);
        this.#sidebarElement.classList.toggle('closed', !this.#isOpen);
    }

    #updateBodyClass() {
         document.body.classList.toggle('sidebar-open', this.#isOpen);
    }
}
