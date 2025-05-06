// js/data.js

// Demo data for conversations
const demoConversations = [
    // Conversation 1: Intro
    { title: "1. Intro to Prompt Engineering", messages: [
      { role:"user",      content:"What is prompt engineering?", type:"text" },
      { role:"assistant", content:"Prompt engineering is the process of structuring text that can be interpreted and understood by a generative AI model.", type:"text" },
      { role:"assistant", content:"Think of it like crafting the perfect question or instruction to get the best possible answer from the AI.", type:"text" },
      { role:"user",      content:"Why is it important?", type:"text" },
      { role:"assistant", content:"It's crucial because the quality of the AI's output heavily depends on the quality of the input prompt. Good prompts lead to more accurate, relevant, and creative responses.", type:"text" },
      { role:"assistant", content:"Poorly structured prompts can lead to generic, incorrect, or nonsensical outputs.", type:"text" },
      { role:"assistant", content:"Let's explore this further with a fun example: we'll create a simple game of Hangman together, step-by-step. Imagine you're teaching someone how to play...", type:"text"},
      { role:"assistant", content:"First, we need to explain the basic rules. Hangman is a word-guessing game where one player thinks of a word and the other tries to guess it by suggesting letters. For every incorrect guess, a part of a 'hangman' is drawn. The game ends when the word is guessed or the hangman is complete.", type:"text"},
      { role:"assistant", content:"Next, let's clarify how guesses work. The guesser suggests one letter at a time. If the letter is in the word, it's revealed in all its correct positions. If it's not in the word, it counts as a wrong guess, and a part of the hangman is drawn.", type:"text"},    
      { role:"assistant", content:"To make this more engaging, let's visualize the hangman stages as text:<br><br>", type:"text"},
      { role:"assistant", content:"Here are the text stages that represent each incorrect guess", type:"text"},
      { role:"assistant", content:"<br>\n--------<br>\n|      |<br>\n|<br>\n|<br>\n|<br>\n|<br>\n-<br>", type:"text" },
      { role:"assistant", content:"Now let's look at some code.", type:"text" },
      { role:"assistant", content:"Can you guess what this code does?", type:"text" },
      { role:"assistant", content:"", type:"text"},
    ]},
    // Conversation 2: Basic Techniques
    { title:"2. Basic Prompting Techniques", messages:[
      { role:"user",      content:"What are some basic techniques?", type:"text" },
      { role:"assistant", content:"Sure! Some basic techniques include:\n\n* **Being Specific:** Clearly define what you want.\n* **Providing Context:** Give the AI background information.\n* **Setting Constraints:** Define the desired format, length, or tone.", type:"text" },
      { role:"user",      content:"Can you give an example?", type:"text" },
      { role:"assistant", content:"Okay, compare these two prompts:\n\n**Weak Prompt:** `Tell me about dogs.`\n\n**Strong Prompt:** `Write a paragraph explaining the typical lifespan and common health issues of Golden Retrievers for a potential first-time owner.`", type:"text" },
      { role:"assistant", content:"The second prompt is much more likely to yield a useful response because it's specific, provides context (first-time owner), and implies constraints (paragraph length).", type:"text" },
    ]},
    // Conversation 3: Code in Prompts
    { title:"3. Using Code in Prompts", messages:[
      { role:"user",      content:"How can I ask an AI to write code?", type:"text" },
      { role:"assistant", content:"You can directly ask it to generate code by specifying the language and the task. It's helpful to provide examples or constraints.", type:"text" },
      { role:"assistant", content:"For example:", type:"text" },
      { role:"assistant", content:"```javascript\n// Write a JS function 'greet' that takes a name and returns 'Hello, [name]!'\n```", type:"code" }, // Note: type:"code" helps rendering
      { role:"user",      content:"What would the AI output?", type:"text" },
      { role:"assistant", content:"A well-trained coding AI might output:\n```javascript\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\n```", type:"code" },
      { role:"assistant", content:"It's often good practice to ask for explanations or example usage too.", type:"text" },
    ]},
     // Conversation 4: Few-Shot Prompting
    { title:"4. Few-Shot Prompting", messages:[
      { role:"user",      content:"What is 'few-shot' prompting?", type:"text" },
      { role:"assistant", content:"Few-shot prompting involves giving the AI a few examples (shots) of the task you want it to perform within the prompt itself. This helps the AI understand the desired format or pattern.", type:"text" },
      { role:"user",      content:"Example?", type:"text" },
      { role:"assistant", content:"```text\nText: 'I love this movie!'\nSentiment: Positive\n\nText: 'The service was terrible.'\nSentiment: Negative\n\nText: 'What an amazing experience!'\nSentiment:```", type:"code" }, // Example shown as code block
    ]},
    // Conversation 5: Role Playing
    { title:"5. Role Playing", messages:[
      { role:"user",      content:"Can I make the AI act like someone?", type:"text" },
      { role:"assistant", content:"Yes, that's called 'role playing' or 'setting a persona'.", type:"text" },
      { role:"assistant", content:"```text\nAct as a travel blogger and write a short paragraph about Kyoto.\n```", type:"code" }, // Example shown as code block
      { role:"assistant", content:"It helps control the tone, style, and expertise level of the response.", type:"text" },
    ]},
  ];
  
  // Export the data so it can be imported in script.js
  export { demoConversations };
  