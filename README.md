# AI Web Search Agent using LangChain & Groq

An AI-powered web search agent that uses Large Language Models (LLMs) and Google Search to answer user questions with relevant information from the web.

## 🚀 Features

- AI-powered conversational interface
- Uses LangChain Agents
- Uses Groq LLM
- Uses GPT-OSS-20B model
- Google Search integration using Serper API
- Agent can use external search tools
- Natural language question answering
- Interactive terminal-based interface
- Environment variables managed using `.env`

## 🛠️ Tech Stack

- Python
- LangChain
- LangChain Agents
- Groq
- GPT-OSS-20B
- Google Serper API
- python-dotenv

## 📂 Project Structure

```text
AI-Web-Search-Agent/

├── apps/
│   └── ai-agents.py
│
├── notebook/
│
├── .env
├── .gitignore
├── README.md
└── requirement.txt
🧠 How It Works

The application uses an AI Agent that can interact with a Google Search tool.

User Question
      ↓
LangChain AI Agent
      ↓
Groq LLM
      ↓
Google Search Tool
      ↓
Search Results
      ↓
AI Generated Response
      ↓
User

The agent receives a natural language question and can use Google Search when external information is required.

⚙️ Environment Variables

Create a .env file in the project root:

GROQ_API_KEY=your_groq_api_key
SERPER_API_KEY=your_serper_api_key

Do not commit your .env file or API keys to GitHub.

▶️ Installation

Clone the repository:

git clone https://github.com/md-dilshad-alam/SQL-AI-Agent.git

Navigate to the project:

cd SQL-AI-Agent

Install dependencies:

pip install -r requirement.txt
▶️ Run the Agent

Run the application using:

python .\apps\ai-agents.py

The application will start in the terminal:

user:

Enter your question and press Enter.

💡 Example
User
What is the capital of France?
AI
The capital of France is Paris.

Another example:

User
What is the current weather in Delhi?
AI
The agent can use Google Search to retrieve relevant information
and generate a natural language response.
🔎 Search Tool

The project uses Google Serper as the external search tool.

The LangChain agent is configured with:

search = GoogleSerperAPIWrapper()

The search tool is then provided to the agent:

agent = create_agent(
    model=llm,
    tools=[search.run],
    system_prompt="You are a helpful assistant that can answer questions using Google Search.",
)
🤖 Agent Workflow
User
  │
  ▼
Natural Language Query
  │
  ▼
LangChain Agent
  │
  ├──────────────► Groq LLM
  │
  └──────────────► Google Serper Search
                         │
                         ▼
                    Search Results
                         │
                         ▼
                    Final Answer
🛑 Exit the Application

To stop the application, type:

exit

or:

quit

The application will display:

Good bye!
📌 Current Project Scope

This version of the project is an AI-powered web search agent.

It does not currently implement SQL database querying, SQLite, SQLAlchemy, or natural-language-to-SQL generation.

👨‍💻 Author

Md Dilshad Alam

LinkedIn: https://linkedin.com/in/md-dilshad-alam01
GitHub: https://github.com/md-dilshad-alam
```
