# 🤖 SQL AI Agent using LangChain & Gemini API

An AI-powered SQL Agent that converts natural language questions into SQL queries and retrieves accurate answers from a database using Large Language Models (LLMs).

## 🚀 Features

- Convert natural language into SQL queries
- Query SQL databases using AI
- Built with LangChain and Gemini API
- Fast and accurate responses
- Easy to extend for other databases

## 🛠️ Tech Stack

- Python
- LangChain
- Google Gemini API
- SQLite
- SQLAlchemy
- FastAPI
- dotenv

## 📂 Project Structure

```text
SQL-AI-Agent/
├── apps/
├── notebook/
├── requirements.txt
├── .gitignore
└── README.md
```

## ▶️ Installation

```bash
git clone https://github.com/md-dilshad-alam/SQL-AI-Agent.git
cd SQL-AI-Agent
pip install -r requirements.txt
```

## ⚙️ Environment Variables

Create a `.env` file:

```env
GOOGLE_API_KEY=your_api_key
```

## ▶️ Run

```bash
python app.py
```

## 💡 Example

**User:**

```
Show all students with marks above 80
```

**AI:**

```
SELECT * FROM students WHERE marks > 80;
```

Returns the database results in natural language.

## 👨‍💻 Author

**Md Dilshad Alam**

- LinkedIn: https://linkedin.com/in/md-dilshad-alam01
- GitHub: https://github.com/md-dilshad-alam
