import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async () => {
    const question = input.trim();

    if (!question || loading) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: question,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Something went wrong");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `**Error:** ${error.message}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const newChat = () => {
    setMessages([]);
    setInput("");
  };

  return (
    <div className="chat-app">
      {/* Sidebar */}
      <aside className="sidebar">
        <button className="new-chat" onClick={newChat}>
          <span>＋</span>
          New chat
        </button>

        <div className="sidebar-title">AI Web Search Agent</div>

        <div className="sidebar-info">
          <p>Powered by</p>
          <strong>LangChain + Groq</strong>
          <span>Google Search</span>
        </div>
      </aside>

      {/* Main Chat */}
      <main className="chat-main">
        {/* Header */}
        <header className="chat-header">
          <div>
            <h1>AI Web Search Agent</h1>
            <p>Search the web with AI</p>
          </div>
        </header>

        {/* Messages */}
        <section className="messages">
          {messages.length === 0 && (
            <div className="welcome">
              <div className="welcome-icon">AI</div>

              <h2>How can I help you?</h2>

              <p>
                Ask anything and get a clear answer using AI-powered web search.
              </p>

              <div className="suggestions">
                <button onClick={() => setInput("What is the latest AI news?")}>
                  Latest AI news
                </button>

                <button onClick={() => setInput("Explain RAG in simple words")}>
                  Explain RAG
                </button>

                <button onClick={() => setInput("What is FastAPI?")}>
                  What is FastAPI?
                </button>
              </div>
            </div>
          )}

          {messages.map((message, index) => (
            <div key={index} className={`message-row ${message.role}`}>
              {/* Avatar */}
              <div className="avatar">
                {message.role === "user" ? "You" : "AI"}
              </div>

              {/* Message */}
              <div className="message-content">
                <div className="message-role">
                  {message.role === "user" ? "You" : "AI Web Search Agent"}
                </div>

                <div className="message-text">
                  {message.role === "assistant" ? (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        table: ({ children }) => (
                          <div className="table-container">
                            <table>{children}</table>
                          </div>
                        ),

                        pre: ({ children }) => (
                          <div className="code-container">
                            <pre>{children}</pre>
                          </div>
                        ),

                        a: ({ children, href }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {children}
                          </a>
                        ),
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  ) : (
                    message.content
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Loading */}
          {loading && (
            <div className="message-row assistant">
              <div className="avatar">AI</div>

              <div className="message-content">
                <div className="message-role">AI Web Search Agent</div>

                <div className="typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef}></div>
        </section>

        {/* Input */}
        <footer className="input-area">
          <div className="input-wrapper">
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Message AI Web Search Agent..."
              rows="1"
            />

            <button
              className="send-button"
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              aria-label="Send message"
            >
              ↑
            </button>
          </div>

          <p className="input-note">
            Enter to send • Shift + Enter for a new line
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
