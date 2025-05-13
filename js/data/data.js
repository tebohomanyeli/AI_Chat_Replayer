// js/data.js

// Demo data for conversations
const demoConversations = [
  {title: "Khanyi - Prompt 1: Comprehensive Function Documentation",
      messages: [
        {
          role: "user",
          content: "**Claude**, please create comprehensive code comments for this function following `[JSDoc/Python docstring/etc.]` conventions:",
          type: "text",
          style: {
            color: "#1E90FF",
            fontWeight: "bold",
            label: "Facilitator"
          }
        },
        {
          role: "assistant",
          content: "[language]",
          type: "text",
          style: {
            color: "#32CD32",
            fontStyle: "italic",
            label: "Claude"
          }
        },
        {
          role: "user",
          content: "Java",
          type: "text",
          style: {
            color: "#1E90FF",
            fontWeight: "bold",
            label: "Facilitator"
          }
        },
        {
          role: "assistant",
          content: "Paste function code here",
          type: "text",
          style: {
            color: "#32CD32",
            fontStyle: "italic",
            label: "Claude"
          }
        },
        {
          role: "user",
          content:
    `~~~java
    public Calculator() {
        setTitle("Calculator");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(420, 550);
        setLayout(null);

        display = new JTextField();
        display.setBounds(50, 25, 300, 50);
        display.setFont(new Font("Arial", Font.PLAIN, 24));
        display.setEditable(false);
        add(display);

        functionButtons = new JButton[8];
        addButton = new JButton("+");
        subButton = new JButton("-");
        mulButton = new JButton("*");
        divButton = new JButton("/");
        decButton = new JButton(".");
        equButton = new JButton("=");
        delButton = new JButton("Del");
        clrButton = new JButton("C");

        functionButtons[0] = addButton;
        functionButtons[1] = subButton;
        functionButtons[2] = mulButton;
        functionButtons[3] = divButton;
        functionButtons[4] = decButton;
        functionButtons[5] = equButton;
        functionButtons[6] = delButton;
        functionButtons[7] = clrButton;

        for (int i = 0; i < 8; i++) {
            functionButtons[i].addActionListener(this);
            functionButtons[i].setFont(new Font("Arial", Font.PLAIN, 24));
            functionButtons[i].setFocusable(false);
        }

        numberButtons = new JButton[10];
        for (int i = 0; i < 10; i++) {
            numberButtons[i] = new JButton(String.valueOf(i));
            numberButtons[i].addActionListener(this);
            numberButtons[i].setFont(new Font("Arial", Font.PLAIN, 24));
            numberButtons[i].setFocusable(false);
        }

        panel = new JPanel();
        panel.setBounds(50, 100, 300, 300);
        panel.setLayout(new GridLayout(4, 4, 10, 10));

        panel.add(numberButtons[1]);
        panel.add(numberButtons[2]);
        panel.add(numberButtons[3]);
        panel.add(addButton);
        panel.add(numberButtons[4]);
        panel.add(numberButtons[5]);
        panel.add(numberButtons[6]);
        panel.add(subButton);
        panel.add(numberButtons[7]);
        panel.add(numberButtons[8]);
        panel.add(numberButtons[9]);
        panel.add(mulButton);
        panel.add(decButton);
        panel.add(numberButtons[0]);
        panel.add(equButton);
        panel.add(divButton);

        add(panel);

        delButton.setBounds(150, 430, 100, 50);
        clrButton.setBounds(250, 430, 100, 50);
        add(delButton);
        add(clrButton);

        setVisible(true);
    }
    ~~~`,
          type: "code",
          style: {
            backgroundColor: "#f5f5f5",
            fontFamily: "monospace",
            whiteSpace: "pre-wrap",
            label: "Facilitator"
          }
        },
        {
          role: "user",
          content:
    `The documentation should include:

    1. A clear description of what the function does  
    2. All parameters with types and descriptions  
    3. Return value with type and description  
    4. Any exceptions or errors that might be thrown  
    5. Example usage  
    6. Any important notes or edge cases developers should be aware of`,
          type: "text",
          style: {
            color: "#1E90FF",
            fontWeight: "bold",
            label: "Facilitator"
          }
        },
        {
          role: "assistant",
          content: "I'll create comprehensive **JSDoc-style comments** for this constructor function. The code appears to be a Java constructor for a calculator application built using Swing components.",
          type: "text",
          style: {
            color: "#32CD32",
            fontStyle: "italic",
            label: "Claude"
          }
        },
        {
          role: "assistant",
          content:
    `~~~java
    /**
     * Constructor for the Calculator class that initializes and configures the calculator UI.
     * 
     * This constructor sets up a basic calculator with a display field and buttons for:
     * - Numeric inputs (0–9)
     * - Basic arithmetic operations (+, –, *, /)
     * - Decimal point, equals, delete, and clear functionality
     * 
     * The calculator uses a simple grid layout for the main button panel and absolute positioning
     * for other elements. The UI is designed with a fixed size and non-resizable components.
     * 
     * Note: This constructor only initializes the UI components. The actual calculation logic
     * should be implemented in the actionPerformed method (not shown here), since this class 
     * likely implements ActionListener.
     * 
     * The calculator UI includes:
     * - A non-editable display field at the top
     * - Number buttons (0–9) arranged in a grid
     * - Operation buttons (+, –, *, /)
     * - Utility buttons (., =, Del, C)
     * 
     * @throws HeadlessException if GraphicsEnvironment.isHeadless() returns true,
     *         which is inherited from the JFrame constructor
     * 
     * @see javax.swing.JFrame
     * @see java.awt.event.ActionListener
     * 
     * @example
     * // Create a new calculator instance
     * Calculator calc = new Calculator();
     * // The calculator window will appear with all buttons and display ready for use
     */
    ~~~`,
          type: "code",
          style: {
            backgroundColor: "#f0fff0",
            fontFamily: "monospace",
            whiteSpace: "pre-wrap",
            label: "Claude"
          }
        },
        {
          role: "user",
          content:
    `I've documented the **Calculator** constructor with comprehensive JSDoc comments. The documentation includes:

    1. **General description** – Explains that this constructor initializes a calculator UI with display and button components  
    2. **Component details** – Lists all UI elements being created (display, number buttons, operation buttons, etc.)  
    3. **Layout information** – Notes about the positioning strategy (grid layout for most buttons, absolute positioning for others)  
    4. **Exception information** – Documents the HeadlessException that could be thrown (inherited from JFrame)  
    5. **Example usage** – Shows how to instantiate the Calculator class  
    6. **Related classes** – References to JFrame and ActionListener  

    Additionally, I've added inline comments to explain different sections of the code, making it easier to understand the purpose of each block.`,
          type: "text",
          style: {
            color: "#1E90FF",
            fontWeight: "bold",
            label: "Facilitator"
          }
        }
      ]
  },

  {title: "Fanezi - Prompt 2: Create a Comprehensive README.md",
    messages: [
      {
        role: "user",
        content: `Please create a comprehensive \`README.md\` file for my project based on the following information:

**Project name:** Calculator  
**Description:** Just a simple UI Calculator program in java

**Key features:**
- addition  
- subtration  
- multiplicatio  

**Technologies used:** java  
**Installation requirements:** [List prerequisites]`,
        type: "text"
      },
      {
        role: "user",
        content: `**The README should include:**
1. Clear project title and description  
2. Installation instructions  
3. Basic usage examples  
4. Features overview  
5. Configuration options  
6. Troubleshooting section  
7. Contributing guidelines  
8. License information

**Code structure overview:**  
[Briefly describe main directories/files or paste project structure]`,
        type: "text"
      },
      {
        role: "assistant",
        content: `Here's a comprehensive README.md file for your Java Calculator project, based on the image and details you'venshared:

## Calculator

A simple UI Calculator program in Java that supports basic arithmetic operations. Designed for ease of use and educational purposes.

## 🛠️ Features

* ✅ Addition
* ✅ Subtraction
* ✅ Multiplication

## 📁 Project Structure

~~~
├── src
│   ├── main/java/com/lilita/calculator/Calculator.java
│   └── test/java/com/lilita/calculator/
├── pom.xml
├── README.md
└── target/
~~~

## ⚙️ Technologies Used

* Java
* Maven (build tool)

## 🛆 Installation Instructions

### Prerequisites

* Java Development Kit (JDK) 8 or later
* Maven installed and configured in your system path
* Git (optional, for cloning)

### Steps

Clone the repository:

~~~bash
git clone https://github.com/Lilita-Xelelo/Calculator-.git
cd Calculator-
~~~

Build the project using Maven:

~~~bash
mvn clean install
~~~

Run the application (if main method is present):

~~~bash
mvn exec:java -Dexec.mainClass="com.lilita.calculator.Calculator"
~~~

## 🧪 Basic Usage Example

Use the calculator's UI to input two numbers and choose the desired operation:

~~~
Input: 5 + 3  
Output: 8
~~~

(Details depend on UI; update if there's a command-line interface or JavaFX/Swing GUI.)

## ⚙️ Configuration Options

No additional configuration is needed for basic usage. However, you can modify the following:

* \`Calculator.java\` — To add more operations or enhance logic.
* \`pom.xml\` — To add dependencies or plugins.

## 🛠️ Troubleshooting

**Build fails?**
Ensure JDK and Maven are properly installed:

~~~bash
java -version
mvn -version
~~~

**Main class not found?**
Verify the package and class name in the \`Calculator.java\` file match the Maven execution command.

## 🤝 Contributing

1. Fork the repository.
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`).
3. Commit your changes (\`git commit -m 'Add amazing feature'\`).
4. Push to the branch (\`git push origin feature/AmazingFeature\`).
5. Open a pull request.

## 📜 License

This project is licensed under the MIT License.
Feel free to use, modify, and distribute it.

Let me know if you want this README.md file saved or modified further (e.g. adding screenshots or test examples).`,
        type: "text"
      }
    ]
  },

  {title: "Sandile - Understanding Legacy Code",
    messages: [
      {
        role: "user",
        content: "I need help understanding the intent behind this poorly documented/named code:\n\n(imports and functions...)",
        type: "text"
      },
      {
        role: "user",
        content: "Here's what I've figured out so far:\n- This code appears in a module responsible for managing text files, probably part of a note-taking or file generation feature in the application.\n- It seems to be called when the program needs to generate multiple files based on a naming pattern, or read/write them from a specific directory defined in a config file.\n- I can see it's manipulating the filesystem by creating files, checking for their existence, writing content, and reading content back.\n- The variable names suggest it might be related to managing content templates or autogenerated notes, though the naming is vague and there's no consistent documentation to confirm.\n\nPlease help me by:\n1. Suggesting better names for functions/variables that reflect their likely purpose\n2. Identifying the programming patterns or techniques being used\n3. Creating pseudocode that reveals the underlying intent\n4. Drafting documentation comments that would make this code understandable\n\nThen, please share 3-4 questions I should ask myself to validate whether my new understanding is correct. These questions should help me check my understanding against the rest of the codebase and application behavior.\n\nFinally, what are some small, safe experiments I could run to verify how this code actually behaves without disrupting the system?",
        type: "text"
      },
      {
        role: "assistant",
        content: "Great job identifying that this code is manipulating the filesystem and working with a directory of notes! Let's break this down and improve its clarity and maintainability step by step.",
        type: "text"
      },
      {
        role: "assistant",
        content: "✅ 1. Better Function and Variable Names\n| Original Name | Suggested Name       | Reason                                         |\n|---------------|----------------------|------------------------------------------------|\n| create_files  | generate_note_files  | Reflects that it creates multiple note files   |\n| pattern       | filename_pattern     | More descriptive of the format being used      |\n| start, end    | start_index, end_index | Clarifies use in iteration                    |\n| file_name     | note_filename        | Indicates it's a note filename                 |\n| notes_dir     | notes_directory      | More readable                                  |\n| exists        | note_file_exists     | Indicates it checks file existence in dir      |\n| load          | load_note_content    | Clarifies it reads content from a note file    |\n| save          | save_note_content    | Indicates it writes content to a note file     |",
        type: "text"
      },
      {
        role: "assistant",
        content: "✅ 2. Programming Patterns / Techniques\n- **Configuration Loading**: Uses a shared configuration file to define the base directory.\n- **Template-Based File Naming**: Uses patterns like `note_*.txt` and replaces `*` with numbers.\n- **Filesystem Abstraction**: Centralizes file interactions.\n- **Fail-Fast Pattern**: Raises an error if config is invalid.\n- **Guard Clauses**: Skips file creation if it already exists.",
        type: "text"
      },
      {
        role: "assistant",
        content: "✅ 3. Pseudocode to Reveal Intent\n```text\nFunction: generate_note_files(pattern, start_index, end_index)\n    Load notes_directory from config\n    Split pattern into base and extension using '*'\n    For each number from start_index to end_index:\n        Construct filename using base + number + extension\n        If file already exists in notes_directory:\n            Skip to next\n        Create file with default content\n        Add filename to list of created files\n    Return list of created files\n\nFunction: load_note_content(filename)\n    Load notes_directory from config\n    Read and return content of the file at notes_directory/filename\n\nFunction: save_note_content(filename, content)\n    Load notes_directory from config\n    Write content to the file at notes_directory/filename\n\nFunction: note_file_exists(filename)\n    Load notes_directory from config\n    Return True if file exists at notes_directory/filename",
        type: "text"
      },
      {
        role: "assistant",
        content: "✅ 4. Documentation Comments\n```python\ndef generate_note_files(filename_pattern: str, start_index: int = 0, end_index: int = 10) -> list[str]:\n    \"\"\"\n    Creates multiple note files based on a filename pattern and index range.\n\n    Parameters:\n    - filename_pattern: A string pattern like 'note_*.txt' where '*' is replaced by numbers.\n    - start_index: The starting index (inclusive).\n    - end_index: The ending index (inclusive).\n\n    Returns:\n    - A list of newly created filenames.\n    \"\"\"\n\ndef load_note_content(filename: str) -> str:\n    \"\"\"\n    Loads and returns the content of a note file from the configured notes directory.\n\n    Parameters:\n    - filename: Name of the file to read.\n\n    Returns:\n    - Content of the file as a string.\n    \"\"\"\n\ndef save_note_content(filename: str, content: str):\n    \"\"\"\n    Saves content to a specified note file in the notes directory.\n\n    Parameters:\n    - filename: Name of the file to write to.\n    - content: Text to be written into the file.\n    \"\"\"\n\ndef note_file_exists(filename: str) -> bool:\n    \"\"\"\n    Checks if a note file exists in the configured notes directory.\n\n    Parameters:\n    - filename: Name of the file to check.\n\n    Returns:\n    - True if file exists, False otherwise.\n    \"\"\"",
        type: "text"
      },
      {
        role: "assistant",
        content: "✅ 5. Questions to Validate Understanding\n1. What kind of file patterns (e.g., `note_*.txt`) does the rest of the app use when calling `create_files`?\n2. What happens to the files after they're created—are they populated with real content later?\n3. Is the `notes_dir` from the config static or ever changed dynamically during runtime?\n4. Are there any constraints or naming conventions enforced elsewhere in the app for note files?",
        type: "text"
      },
      {
        role: "assistant",
        content: "✅ 6. Safe Experiments to Verify Behavior\n- **Use a Temp Directory**: Set `notes_dir` in your config to `/tmp/test_notes`, then run `create_files('note_*.txt', 0, 2)` and check the output files.\n- **Pre-create a File**: Manually create `note_1.txt` before running—confirm it's skipped.\n- **Add Logging**: Insert `print()` statements inside each function temporarily to trace execution.\n- **Test Error Handling**: Remove `notes_dir` from your config and make sure the script raises the expected `ValueError`.\n- **Change Default Content**: Update the text written to new files to confirm the change appears correctly in generated files.",
        type: "text"
      }
    ]
  },

  {title: "Sihle - Understanding Bulk Create in a CLI",
    messages: [
      {
        role: "user",
        content: "I'm trying to understand how the bulk create feature works in our Python Click-based CLI codebase.",
        type: "text"
      },
      {
        role: "user",
        content: "This feature seems to handle creating multiple note files at once using a naming pattern and saving them with content, tags, and timestamps.",
        type: "text"
      },
      {
        role: "user",
        content: "Here are the key files that appear to be involved:\n- bulk_crud.py – Seems to define the create command logic\n- file.py – Might be handling the generation of file names and creation\n- cli.py – Contains references to bulk_crud.create and wires it into the CLI",
        type: "text"
      },
      {
        role: "user",
        content: "Here is the code snippet I'm struggling to understand (from bulk_crud.py):",
        type: "text"
      },
      {
        role: "user",
        content: "@bulk.command()\n@click.argument(\"pattern\")\n@click.option(\"--start\", default=1, type=int, help=\"Start index\")\n@click.option(\"--end\", default=10, type=int, help=\"End index\")\n@click.option(\"--content\", default=\"This is a note\", help=\"Note content\")\n@click.option(\"--tags\", default=\"\", help=\"Comma-separated tags\")\n@click.pass_context\ndef create(ctx, pattern, start, end, content, tags):\n    notes_directory = ctx.obj[\"notes_directory\"]\n    files = create_files(pattern=pattern, start=start, end=end)\n\n    for file_path in files:\n        file_name = Path(file_path).stem\n        note_data = {\n            \"content\": content,\n            \"tags\": tags.split(\",\") if tags else [],\n            \"created_at\": datetime.now().isoformat(),\n        }\n        with open(notes_directory / f\"{file_name}.txt\", \"w\") as file:\n            json.dump(note_data, file)\n\n    click.echo(f\"{len(files)} notes created.\")",
        type: "text"
      },
      {
        role: "user",
        content: "Could you explain in simple terms what this function does?",
        type: "text"
      },
      {
        role: "user",
        content: "Could you walk me through the flow when I run bulk create \"note-*.txt\"?",
        type: "text"
      },
      {
        role: "user",
        content: "Could you clarify how create_files() contributes to this?",
        type: "text"
      },
      {
        role: "user",
        content: "Mention any external libraries or helpers used?",
        type: "text"
      },
      {
        role: "user",
        content: "Point out anything tricky about the tags or file_name handling?",
        type: "text"
      },
      {
        role: "user",
        content: "Give a quick mental model to reason about what this command is doing.",
        type: "text"
      },
      {
        role: "user",
        content: "I'm particularly confused about how the pattern works with the file creation, so extra detail there would help.",
        type: "text"
      },
      {
        role: "user",
        content: "Finally, suggest 3 small code changes I could make to validate my understanding. Do not give me the change, and instead give me the requirement.",
        type: "text"
      },
      {
        role: "assistant",
        content: "Absolutely, let’s break this down clearly.",
        type: "text"
      },
      {
        role: "assistant",
        content: "🧠 What This Function Does (Simply)\nThe `create` function allows users to bulk create note files using a naming pattern, customizable content, tags, and index range. Each note becomes a JSON object saved in a `.txt` file.",
        type: "text"
      },
      {
        role: "assistant",
        content: "🧭 Step-by-Step Flow (`bulk create \"note-*.txt\"`):\n1. The pattern \"note-*.txt\" acts like a template: `note-1.txt`, `note-2.txt`, ..., `note-10.txt`.\n2. `create_files()` replaces the `*` in that pattern with numbers from `start` to `end`.\n3. For each file:\n   - `file_name` is extracted using `Path(file_path).stem`\n   - `note_data` is assembled with content, tag list, and timestamp\n   - That data is dumped into a file\n4. Finally, a summary message is printed.",
        type: "text"
      },
      {
        role: "assistant",
        content: "🧩 Role of `create_files()`\nIt generates filenames by replacing the `*` in the pattern with numbers in the given range.\nSo `note-*.txt` with `start=1` and `end=3` → `note-1.txt`, `note-2.txt`, `note-3.txt`.",
        type: "text"
      },
      {
        role: "assistant",
        content: "🧰 External Libraries:\n- `Click`: For CLI commands and options\n- `pathlib.Path`: For file name and extension handling\n- `json`: For writing the note data\n- `datetime`: To generate timestamps",
        type: "text"
      },
      {
        role: "assistant",
        content: "⚠️ Tricky Bits:\n- `tags.split(\",\")` doesn't strip whitespace. `\"work, urgent\"` → `[\"work\", \" urgent\"]`\n- `Path(...).stem` assumes filenames end in `.txt`. If you use `.md`, this might fail or cause mismatches.",
        type: "text"
      },
      {
        role: "assistant",
        content: "🧠 Mental Model:\nThink of it like this:\n> “Take a file naming template and generate N notes with the same content and some metadata inside.”",
        type: "text"
      },
      {
        role: "assistant",
        content: "✅ 3 Small Code Change Requirements:\n1. Add support for zero-padded numbers in the file name (e.g., `note-01.txt`, `note-02.txt`)\n2. Allow custom file extensions like `.md` instead of always using `.txt`\n3. Strip whitespace around each tag before saving",
        type: "text"
      },
    
    ]
  },

  

];
  
  // Export the data so it can be imported in script.js
  export { demoConversations };
  