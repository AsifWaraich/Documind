# 🤖 DocuMind — Agentic & Corrective RAG for Document Interaction

**DocuMind** is an AI-powered document interaction platform that allows users to **upload PDF documents, ask questions conversationally, and receive accurate, context-grounded answers with page-level citations**.

Unlike basic RAG systems, DocuMind combines **agentic reasoning, hybrid retrieval, cross-encoder reranking, and corrective grading** to improve retrieval quality and reduce AI hallucinations.

---

## ✨ Key Features

- 📄 **Intelligent PDF Processing** — Layout-aware document ingestion with support for structured tables.
- 💬 **Conversational Document Q&A** — Ask natural-language questions and interact with uploaded documents.
- 🧠 **Agentic RAG Pipeline** — Query classification, multi-query expansion, retrieval, reranking, and corrective verification.
- 🔎 **Hybrid Search** — Combines semantic vector search with **BM25 keyword search** using Reciprocal Rank Fusion (RRF).
- 🛡️ **Hallucination Reduction** — A Grader Agent evaluates retrieved context and filters low-confidence information.
- 🌐 **Web Search Fallback** — Uses Tavily when the uploaded documents do not contain sufficient information.
- 📌 **Source Citations** — Answers include page-level references for verification.
- 📝 **Interactive PDF Workspace** — Read documents, highlight text, and add annotations/comments.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | Next.js 16, React 19, Tailwind CSS v4, shadcn/ui |
| **LLM / Inference** | GPT-OSS 120B & GPT-OSS 20B via Groq |
| **RAG Orchestration** | LangChain.js |
| **Embeddings** | BAAI/bge-base-en-v1.5 via Hugging Face |
| **Hybrid Search** | MongoDB Atlas Vector Search, BM25, Reciprocal Rank Fusion (RRF) |
| **Reranking** | Jina AI |
| **Web Search** | Tavily API |
| **Authentication** | Clerk |
| **ORM** | Prisma |
| **Deployment** | Vercel |
| **Evaluation** | LangSmith |

---

## 🔄 How It Works

```text
PDF Upload
    ↓
Layout-Aware Document Processing
    ↓
Text & Table Extraction
    ↓
Semantic Embeddings + Metadata
    ↓
MongoDB Atlas
    ↓
User Query
    ↓
Query Classification & Multi-Query Expansion
    ↓
Hybrid Vector + BM25 Retrieval
    ↓
Jina AI Reranking
    ↓
Corrective Grader Agent
    ↓
Verified Context
    ↓
LLM Response + Page Citation
```

If relevant document context cannot be found, DocuMind can automatically use **Tavily web search as a fallback**.

---

## 👨‍💻 My Contribution

- **Database Design & MongoDB** — Worked with MongoDB Atlas data modeling for users, projects, documents, document chunks, conversations, messages, and annotations, including database queries and indexing.
- **Document Data & RAG Integration** — Worked with the document ingestion flow to store processed document chunks, metadata, and embeddings in MongoDB Atlas for downstream retrieval.
- **Hybrid Search Integration** — Worked with MongoDB Atlas Vector Search, BM25 full-text search, and Reciprocal Rank Fusion (RRF) for semantic and keyword-based document retrieval.
- **Git & Collaboration** — Used Git/GitHub for version control and collaborative development.
- **Agile Development & SDLC** — Contributed to the iterative development lifecycle through development, testing, feedback, and refinement of project components.

---

## 📈 Evaluation

DocuMind was evaluated using a **60-example benchmark** derived from the Kaggle Single-Topic RAG Evaluation Dataset.

| Evaluation | Success Rate |
|---|---:|
| Single-Passage Retrieval | **90.0%** |
| Multi-Passage Synthesis | **90.0%** |
| No-Answer / Hallucination Guardrails | **95.0%** |
| **Overall** | **91.67%** |

The evaluation was conducted using **LangSmith** with an automated LLM-based judging approach.

---

## 🎯 Why DocuMind?

Traditional keyword search struggles with semantic meaning, while basic LLM-based document assistants can produce unsupported or hallucinated answers.

DocuMind addresses these challenges by combining **semantic retrieval, keyword search, reranking, and corrective grading** to produce answers that are more **relevant, grounded, and verifiable**.

---

### 🎓 Final Year Project

**Bachelor of Science in Information Technology**  
**Quaid-e-Awam University of Engineering, Science & Technology, Nawabshah — 2026**

**Supervisor:** Dr. Waqas Ali Sahito
