# 📜 Project Constitution & Governing Principles (SpecKit SDD)

> **Version:** 1.0.0  
> **Status:** ACTIVE  
> **Framework:** Spec-Driven Development (SDD) via SpecKit  

---

## 🏛️ Article I: Core Principles & Governance
1. **Specification as Single Source of Truth (SSOT)**: No implementation code or architectural change shall be introduced without an explicit, approved specification (`spec.md`) and technical plan (`plan.md`).
2. **Zero Assumptions Policy**: AI agents and developers must strictly verify technical assumptions against official project documentation (Open SaaS `docs.opensaas.sh/llms.txt`, Wasp `wasp.sh/llms.txt`, Prisma, React).
3. **Code Quality & Non-Negotiable Standards**: All code must compile cleanly without TypeScript errors, lint warnings (ESLint), or formatting violations (Prettier).
4. **Automated Verification Gate**: Every feature or fix must be verified using empirical test suites (unit tests, Playwright E2E tests, type checking) before being declared complete.

---

## 🏗️ Article II: Architecture & Technology Stack
1. **Framework & Engine**: Built on **Wasp** (React + Node.js + Prisma) using **Open SaaS** template standards.
2. **Frontend Architecture**:
   - React with TypeScript (Strict mode enabled).
   - Component UI: **ShadCN UI** + Vanilla CSS / Tailwind CSS.
   - Design System: Rich aesthetics, dark mode support, smooth micro-interactions, responsive design.
3. **Backend Architecture**:
   - Node.js operations and queries managed via Wasp RPC.
   - Database layer: **Prisma ORM** with PostgreSQL schema definitions (`schema.prisma`).
   - Authentication: Wasp managed auth (Email/Password, OAuth, Social Auth).
4. **Third-Party Integrations**:
   - Payments: Stripe / Polar.sh / Lemon Squeezy integration abstractions.
   - Storage: AWS S3 / Compatible Object Storage.
   - Communications: SendGrid / MailGun / SMTP email services.
   - Analytics: Plausible / Google Analytics.

---

## 🛡️ Article III: Security, Privacy & Data Protection
1. **Environment & Secrets Safeguard**: No credentials, API tokens, secret keys, or private environment variables shall ever be hardcoded into version control. Use `.env.server` and `.env.client`.
2. **Database Migrations Safety**: Data-destructive Prisma migrations (`prisma migrate reset`, table drops) are prohibited without explicit human approval and data backup verification.
3. **Input Validation & Sanitization**: All incoming data from client requests must be validated at the boundary using schema validation (e.g., Zod) and Wasp type guards.
4. **Auth Scoping**: Backend operations must enforce authentication and user isolation checks to prevent unauthorized access across tenants/users.

---

## 🧪 Article IV: Development & Quality Gates
1. **Type Safety Rules**:
   - `any` type usage is strictly forbidden unless explicitly justified with a comment and wrapped in type guards.
   - End-to-end type safety must be preserved across Wasp operations, Prisma models, and React components.
2. **Linting & Formatting Discipline**:
   - Code must pass `npm run lint` and `npm run prettier:check` cleanly.
3. **Testing Standards**:
   - Business logic and operations must have corresponding automated tests (Playwright E2E or unit tests).
   - Tests must never be disabled, deleted, or commented out to bypass execution failures.

---

## 🤖 Article V: AI Agent Operating Guidelines
1. **Documentation Verification Protocol**: Before implementing features or making structural edits, AI agents must query official docs via `docs.opensaas.sh/llms.txt` and `wasp.sh/llms.txt`.
2. **Preservation of Existing Code**: Do not refactor unrelated code or remove comments/docstrings unless instructed.
3. **Empirical Verification**: Never declare success without running build, lint, or test commands to empirically verify stability.
4. **Clear Execution Trail**: Document all architectural changes, schema additions, and API alterations in the feature specification and plan.

---

## 📝 Article VI: Revision & Amendment Process
- Amendments to this Constitution require updating this document (`.specify/constitution.md`), bumping the version number, and alignment across team members and AI coding assistants.
