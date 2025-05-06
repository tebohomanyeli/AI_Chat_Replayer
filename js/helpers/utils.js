// js/utils.js

/**
 * Basic HTML escaping to prevent XSS.
 * @param {string} str - The string to escape.
 * @returns {string} - The HTML-escaped string.
 */
export function escapeHtml(str) {
    const stringToEscape = String(str || '');
    const div = document.createElement('div');
    div.textContent = stringToEscape;
    return div.innerHTML;
}

/**
 * Configures the Marked library if available.
 * @returns {object} The configured Marked instance or a fallback parser.
 */
export function configureMarked() {
    if (typeof marked !== 'undefined') {
        marked.setOptions({
            gfm: true,
            breaks: true,
            sanitize: false, // IMPORTANT: Set true for untrusted user content
            highlight: (code, lang) => {
                const language = lang || 'plaintext';
                return `<pre><code class="language-${language}">${escapeHtml(code)}</code></pre>`;
            }
        });
        return marked;
    } else {
        console.warn("Marked library not loaded. Markdown rendering will be basic.");
        // Simple fallback parser
        return {
            parse: (text) => `<p>${escapeHtml(text)}</p>`
        };
    }
}