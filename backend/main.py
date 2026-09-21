from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from dotenv import load_dotenv
from langchain_community.utilities import GoogleSerperAPIWrapper
from langchain_groq import ChatGroq
from langchain.agents import create_agent

load_dotenv()

app = FastAPI(title="AI Web Search Agent")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


llm = ChatGroq(
    model="openai/gpt-oss-20b"
)

search = GoogleSerperAPIWrapper()

agent = create_agent(
    model=llm,
    tools=[search.run],
    system_prompt=(
        "You are a helpful assistant that can answer "
        "questions using Google Search."
    ),
)


class ChatRequest(BaseModel):
    message: str


@app.get("/")
def home():
    return {
        "message": "AI Web Search Agent API is running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.post("/chat")
def chat(request: ChatRequest):
    response = agent.invoke(
        {
            "messages": [
                {
                    "role": "user",
                    "content": request.message
                }
            ]
        }
    )

    answer = response["messages"][-1].content

    return {
        "answer": answer
    }