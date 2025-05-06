# 🧠 AI Chat Replayer

**AI Chat Replayer** is a web-based application that visually replays AI-generated conversations like a tutorial or walkthrough. It enables users to explore curated educational dialogues—such as lessons in prompt engineering—one message at a time, with playback controls and a sidebar for easy navigation.

## 🚀 Features

* 🎮 **Playback Controls** — Play, pause, skip, rewind, or restart conversations.
* 🗂 **Conversation Sidebar** — Browse and jump to multiple preloaded tutorials.
* 💬 **Animated Message Display** — Messages appear with smooth transitions and markdown support.
* 📜 **Markdown Rendering** — Supports rich text, including code blocks, via [Marked.js](https://marked.js.org/).
* 🧹 **Modular Codebase** — Built with reusable, ES6 class-based components.

## 🏗️ Tech Stack

* **Frontend:** Vanilla JavaScript (ES Modules), HTML5, CSS3
* **Markdown Rendering:** [Marked.js](https://github.com/markedjs/marked)
* **Structure:** Modular component pattern with `ChatView`, `ControlsView`, `SidebarView`, etc.

## 📁 Project Structure

```
/js
  ├── ChatReplayerApp.js           # Main app controller
  ├── data/data.js                 # Preloaded conversation data
  └── components/
        ├── ChatView.js             # UI rendering for chat messages
        ├── ControlsView.js         # Playback button logic
        ├── SidebarView.js          # Sidebar and conversation list
        ├── PlaybackEngine.js       # Controls message sequencing & state
        └── ConversationManager.js  # Manages current conversation
/helpers
  └── utils.js                     # Markdown config and HTML escaping
/index.html                        # Main entry point
/style.css                         # Custom styling
```

## 🥚 Example Conversations

Preloaded lessons include:

1. **Intro to Prompt Engineering**
2. **Basic Prompting Techniques**
3. **Using Code in Prompts**
4. **Few-Shot Prompting**
5. **Role Playing with AI**

Each conversation is structured as a sequence of `user` and `assistant` messages rendered in real-time.

## 🛠️ How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chat-replayer.git
   cd chat-replayer
   ```

2. Open `index.html` in your browser (no build steps required).

> ✅ No external server needed — it's a 100% frontend-only project.

## 📦 To-Do / Future Enhancements

* 🔍 Add search or filter for conversations
* 📂 Support user-created conversation uploads
* 🧠 Integrate with a live LLM API for dynamic replays

## 📄 License

MIT License — feel free to use, modify, and share.

---

Made with ❤️ to teach others about effective AI usage and prompting.