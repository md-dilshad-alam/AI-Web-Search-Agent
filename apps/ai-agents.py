from dotenv import load_dotenv
load_dotenv()

from langchain_community.utilities import GoogleSerperAPIWrapper
from langchain_groq import ChatGroq
from langchain.agents import create_agent

llm = ChatGroq(model="openai/gpt-oss-20b")
search = GoogleSerperAPIWrapper()


agent = create_agent(
  model = llm,
  tools = [search.run],
  system_prompt = "You are a helpful assistant that can answer questions using Google Search.",
)



while True:
  query = input("user: ")
  if query.lower() in ["exit", "quit"]:
    print("Good bye!")
    break
  res = agent.invoke({"messages":[{"role": "user",  "content": query}]})
  print("assistant:", res["messages"][-1].content)
 














