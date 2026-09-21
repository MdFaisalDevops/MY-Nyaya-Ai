# NyayaAI

**Legal help shouldn't be complicated.**

NyayaAI provides AI-powered legal information and assistance, bridging the gap between confusion and clarity. *Note: NyayaAI provides AI-generated information and assistance, not formal legal advice.*

---

## 🛑 The Problem
Legal systems are inherently complex, filled with jargon, and often intimidating. When individuals face issues (e.g., unpaid salary, unreturned security deposits, or confusing legal notices), they frequently don't know where to start, what documents they need, or what specific type of professional help to seek. 

## 💡 The Solution
NyayaAI is an AI-powered legal triage and information platform designed for everyday people. It uses a conversational interface to understand a user's situation in plain language, triages the issue, and provides a structured action plan. 

Our core philosophy is built on four pillars:
1. **Understand**: AI helps users explain their situation without jargon.
2. **Verify**: Important information should always be checked against trusted sources.
3. **Act**: Users receive structured next steps and a document checklist.
4. **Connect**: Users can prepare a structured summary ("Lawyer Brief") to save time before speaking with a professional.

---

## ✨ Features
- **AI Legal Assistant**: Conversational triage that breaks down user problems into broad legal categories.
- **Action Plan Engine**: Generates a step-by-step checklist of what to do and what documents to gather.
- **Document Analyzer**: Upload (PDF, DOCX, TXT, Image) and simplify complex legal notices into plain language.
- **Legal Timeline**: An interactive chronological event tracker.
- **Lawyer Brief Generator**: Compiles all analysis, timelines, and desired outcomes into a printable, professional brief to hand to an attorney.
- **"Explain Simply" Mode**: Instantly translates complex legal phrases into actionable insights.
- **Trust Center & Source Verification**: Highlights the importance of official sources and verifies claims.

---

## 🏗️ Architecture & Tech Stack
NyayaAI is built as a modern, serverless web application optimized for edge delivery.

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS & Framer Motion (for microinteractions)
- **UI Components**: shadcn/ui & Lucide React
- **Validation**: Zod (for strictly typed AI responses and API payloads)
- **Deployment**: Vercel

---

## 🔒 Security, Privacy & AI Safety
We treat user data and AI generation with the highest level of caution.
- **Prompt Injection Defense**: API routes are hardened against system overrides and malicious prompt injections.
- **Untrusted Data Protocol**: The AI is instructed to treat all user input and uploaded documents as strictly untrusted factual data.
- **No API Keys in Client**: All AI generation occurs securely server-side.
- **File Validation**: Strict MIME-type checking and 5MB size limits on document uploads.
- **Privacy Controls**: Users can instantly clear their session and delete their data from local storage. No sensitive data is stored in URLs.
- **Rate Limiting**: Server-side endpoints are rate-limited to prevent abuse.

---

## 🚀 Local Setup & Demo Mode

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation
1. Clone the repository: `git clone <repo-url>`
2. Install dependencies: `npm install`
3. Configure environment variables (see below).
4. Run the development server: `npm run dev`

### Demo Mode (Fallback)
If no `AI_API_KEY` is provided, the application will automatically run in **Demo Mode**. This uses pre-configured mock scenarios (Employment Dispute, Housing, Document Analysis) to showcase the UI, animations, and user flow without requiring an LLM backend.

---

## 🔑 Environment Variables
Create a `.env.local` file in the root directory. Use `.env.example` as a template.

```env
# AI Provider Key (e.g. OpenAI, Anthropic, Google)
# If omitted, the app runs in Demo Mode.
AI_API_KEY="your_api_key_here"

# Application URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```
*Never commit your actual `.env.local` file.*

---

## 🧪 Testing & Validation
- **Linting**: Run `npm run lint` to catch code quality issues.
- **Type Checking**: Run `npm run build` to ensure complete TypeScript strict compliance.

---

## ☁️ Vercel Deployment
NyayaAI is fully optimized for Vercel deployment out-of-the-box.
1. Push your code to a Git repository (GitHub/GitLab/BitBucket).
2. Import the project in Vercel.
3. Configure your Environment Variables in the Vercel Dashboard (Project Settings > Environment Variables).
4. Click **Deploy**. Vercel will automatically detect the Next.js framework and execute `npm run build`.

---

## 🗺️ Future Roadmap
- Integration with live Government / Legal Aid APIs for real-time source retrieval.
- Server-side translation processing for the localized UI (Hindi, Marathi).
- Full database integration (PostgreSQL via Prisma/Drizzle) for persistent, cross-device user accounts.
- Expansion of the Document Analyzer to handle multi-page dense contract reviews.
