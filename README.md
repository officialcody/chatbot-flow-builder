## BitSpeed Chatbot Flow Builder

**The Task**
Build a simple and extensible Chatbot Flow Builder using React. A chatbot flow is built by connecting multiple messages together to decide the order of execution.

## Features

- Add Nodes with a text message.
- Edit the text message within a Node.
- Delete a Node
- Drag and Drop Functionality to add a new node.
- Connect Nodes
  - **Sorce Nodes:** Can connect to a single target node.
  - **Target Nodes:** Can be connected with multiple source nodes.
- Save the flow (to local storage)
- Validate and show error messages nodes for saving and failure to save flow.

## System Requirements

**Node.js and NPM should be installed**

## Steps to setup on Local Machine

1. Clone the repository using the following command:

```bash
    git clone git@github.com:officialcody/chatbot-flow-builder.git
```

2. Then, run the following command from the root of project directory:

```bash
    npm install
```

3. Finally, run the following command to start the server:

```bash
    npm start
```

You will be able to open the local URL using the following: [http://localhost:3000](http://localhost:3000)

### Directory Structure

```bash
src
├── components
│   ├── ChatFlowBuilder.jsx
│   ├── CustomEdge.jsx
│   ├── CustomHandle.jsx
│   ├── CustomTextMessageNode.jsx
│   ├── Header.jsx
│   ├── NodeSelector.jsx
│   ├── NodesPanelSidebar.jsx
|   └── TextNodeEditor.jsx
└── App.js
└── index.js
└── App.css
└── index.css
└── logo.svg
```

## Extensible Features

For future updates of this project, we can add a lot more features and functionalities such as

- Adding New Node types
- Adding Editor features
- Customizing the Nodes to add Animations to the flow
