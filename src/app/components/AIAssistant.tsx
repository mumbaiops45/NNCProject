"use client";
import { useState } from "react";
import { getAICompletion, streamAICompletion } from "@/lib/vly";

export default function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);

  const handleAskQuestion = async () => {
    if (!question.trim()) return;
    
    setIsLoading(true);
    setAnswer("");
    
    try {
      const result = await getAICompletion({
        model: "gpt-4", // Or any model supported by Vercel AI Gateway
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant for a software development company. Help users with questions about CRM, ERP, web development, and digital transformation."
          },
          {
            role: "user",
            content: question
          }
        ],
        temperature: 0.7,
        maxTokens: 500
      });
      
      if (result.success && result.data) {
        setAnswer(result.data.content || "No response generated.");
      } else {
        setAnswer("Sorry, I couldn't process your question. Please try again.");
      }
    } catch (error) {
      console.error("Error getting AI response:", error);
      setAnswer("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStreamQuestion = async () => {
    if (!question.trim()) return;
    
    setIsStreaming(true);
    setAnswer("");
    
    try {
      await streamAICompletion(
        {
          model: "claude-opus-4-1",
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant for a software development company."
            },
            {
              role: "user",
              content: question
            }
          ],
          temperature: 0.7,
          maxTokens: 500
        },
        (chunk) => {
          // Append each chunk to the answer
          setAnswer(prev => prev + chunk);
        }
      );
    } catch (error) {
      console.error("Error streaming AI response:", error);
      setAnswer("An error occurred. Please try again later.");
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <div style={{ padding: "20px", background: "#061425", borderRadius: "12px" }}>
      <h3 style={{ color: "#00C9A7", marginBottom: "16px" }}>AI Assistant</h3>
      
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask me anything about our services..."
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          background: "rgba(255,255,255,.05)",
          border: "1px solid rgba(255,255,255,.12)",
          color: "#fff",
          marginBottom: "12px",
          minHeight: "80px"
        }}
      />
      
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <button
          onClick={handleAskQuestion}
          disabled={isLoading || isStreaming}
          style={{
            padding: "10px 20px",
            background: "linear-gradient(135deg, #00C9A7, #00a07a)",
            border: "none",
            borderRadius: "8px",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          {isLoading ? "Thinking..." : "Ask AI"}
        </button>
        
        <button
          onClick={handleStreamQuestion}
          disabled={isLoading || isStreaming}
          style={{
            padding: "10px 20px",
            background: "transparent",
            border: "1px solid #00C9A7",
            borderRadius: "8px",
            color: "#00C9A7",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          {isStreaming ? "Streaming..." : "Stream Response"}
        </button>
      </div>
      
      {answer && (
        <div
          style={{
            background: "rgba(0,201,167,.05)",
            border: "1px solid rgba(0,201,167,.2)",
            borderRadius: "8px",
            padding: "16px",
            marginTop: "16px"
          }}
        >
          <h4 style={{ color: "#00C9A7", marginBottom: "8px" }}>AI Response:</h4>
          <p style={{ color: "rgba(255,255,255,.8)", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}