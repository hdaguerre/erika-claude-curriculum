# Day 4: Claude's Models and Temperature (~1.5 hrs)

## Session Brief
Erika learns that not all Claude is the same — Haiku, Sonnet, and Opus have different strengths and cost/speed tradeoffs — and she gets her first introduction to temperature, the dial that controls how predictable or creative Claude's responses are.

---

## Lesson Artifact

Render a clean HTML artifact at the start of this session:

- **Header:** "Day 4: Modelos y Temperature" with subtitle: "Las herramientas correctas para cada tipo de trabajo"
- **Section 1 — The Three Models:** A three-column comparison card:
  - **Haiku** — Fast, lightweight, great for simple and repetitive tasks. Like a quick lookup.
  - **Sonnet** — Smart, capable, the reliable workhorse. Great for most work.
  - **Opus** — Most powerful. Best for complex reasoning, nuanced analysis, writing that needs depth. Use when quality matters more than speed.
- **Section 2 — Temperature:** A simple slider visualization from 0 to 1 (or 0 to 2). Left end = "Predictable / Focused / Factual." Right end = "Creative / Varied / Surprising." Explain that most interfaces don't expose this directly but it shapes outputs behind the scenes.
- **Section 3 — The SQL Connection:** Callout box: "Models = database engines. Haiku is like SQLite — fast and lightweight. Sonnet is like PostgreSQL — reliable workhorse. Opus is like Oracle Enterprise — full power for complex jobs. Temperature = query optimizer settings. It affects how the engine approaches the problem."
- **Section 4 — When to Use What:** Short practical guide. Use Haiku for drafts, summaries, quick replies. Use Sonnet for most real work. Use Opus for deep analysis, strategy, complex writing.
- **Footer:** "Tiempo estimado: 1.5 horas · Ejercicio incluido · Quiz al final"

---

## Concepts

### Concept 1: The Three Claude Models

Anthropic offers three versions of Claude — each tuned for a different balance of speed, power, and cost. On Claude's Max subscription, she has access to all three. She can select which one to use at the start of any conversation.

**Claude Haiku**
Haiku is the smallest and fastest model. It's designed for tasks that don't require deep reasoning — quick summaries, drafting a first pass, simple questions, light editing. It responds almost instantly and is much cheaper to run than Opus. The tradeoff: it won't give her the same depth or nuance on complex tasks.

Good for: summarizing, quick drafts, simple Q&A, repetitive tasks where you need volume not depth.

**Claude Sonnet**
Sonnet is the middle ground — and in practice, it's what she'll use for the vast majority of real work. It's smart, capable, fast enough for normal use, and handles complex tasks well. Anthropic has consistently made Sonnet the flagship model for everyday professional work.

Good for: most writing tasks, analysis, coding, research, client work, anything that needs quality but doesn't require Opus-level horsepower.

**Claude Opus**
Opus is the most powerful model in the family. Use it when the task is genuinely complex — multi-step reasoning, deep analysis, writing that needs real nuance and depth, technical problems that stump Sonnet. It's slower and uses more compute, but when quality matters more than speed, Opus is worth it.

Good for: complex strategy documents, deep analysis, nuanced creative writing, technical problems that need careful step-by-step reasoning, high-stakes deliverables.

**A practical note:** For this curriculum, she'll mostly use Sonnet. Save Opus for exercises that specifically call for depth — like Day 10's LinkedIn workshop.

**SQL connection:** Think of models like different database engines. SQLite is fast and lightweight — perfect for small apps and quick queries, but you wouldn't run your enterprise reporting pipeline on it. PostgreSQL is the reliable workhorse — handles almost everything, scales well, trusted by professionals. Oracle Enterprise is full power — expensive, complex, and worth every bit of that when you're running mission-critical systems. She spent 12 years on Oracle. She knows what it means to have the right engine for the job. Same principle applies to Claude models.

**Key insight:** Match the model to the task. Using Opus for everything is like running every query through a stored procedure that spins up a dedicated server — overkill for most things, exactly right for the big ones.

---

### Concept 2: Temperature

Temperature is a setting that controls how "creative" or "predictable" Claude's responses are. It runs on a scale from 0 to 1 (sometimes up to 2).

- **Low temperature (close to 0):** Claude gives more consistent, focused, predictable responses. If you ask the same question twice at low temperature, you'll get very similar answers. Good for: factual questions, structured tasks, anything where consistency matters.

- **High temperature (close to 1 or 2):** Claude gives more varied, creative, sometimes surprising responses. Ask the same question twice and you might get two genuinely different takes. Good for: brainstorming, creative writing, generating options, exploring ideas.

In Claude Desktop, temperature isn't always directly visible — Anthropic sets reasonable defaults for each model and use case. But Erika will encounter temperature as an explicit setting when she starts working with the Claude API in Week 4. It's important to have the mental model now.

A practical heuristic to remember: **factual tasks want low temperature, creative tasks want higher temperature.** If she asks Claude to verify a date or format data precisely, she wants consistent, predictable output. If she asks Claude to brainstorm five Instagram caption ideas for a cookie photo, she wants creative variation.

**SQL connection:** Temperature is like query optimizer hints or session-level configuration settings. In Oracle, she could set parameters that influenced how the query planner approached a problem — more aggressive optimization, different join strategies. Temperature does something similar at the language generation level: it tells Claude how "freely" to explore the space of possible responses. Low temperature means "give me the most direct, predictable path." High temperature means "explore."

**Key insight:** Temperature controls the creativity-consistency dial. In practice, she'll mostly work with defaults, but understanding this concept explains why Claude sometimes gives surprising answers — and how to pull it back toward consistency when she needs it.

---

## Exercise

This exercise is a direct comparison between models on the same task. She's going to use something she knows well — baking — to make the comparison feel personal and grounded.

**Step 1 — Ask Opus.** Open a new Claude chat and select Claude Opus (in the model selector at the top of the chat). Ask:

> "Explain the science of why chocolate chip cookies spread when they bake. I want to understand what's actually happening chemically and physically."

Read the response carefully. Notice: How deep does it go? Does it explain butter melting behavior, protein structures, sugar caramelization? Does it feel thorough?

**Step 2 — Ask Haiku.** Open another new Claude chat and select Claude Haiku. Ask the exact same question.

Read that response. Notice: How long is it? How much depth does it go into? Does it cover the same ground?

**Step 3 — Compare and reflect.** Bring your observations back here. We'll talk through:
- Which response felt more useful for this specific question?
- Which one would be good enough for a quick check, vs. which one would you want if you were writing a baking class handout?
- Did Haiku miss anything important that Opus covered?

**Debrief with her:** The goal is to help her develop intuition for model selection. There's no "Opus is always better" — there's "Opus is better for tasks that require depth." Help her see that Haiku at its best is fast and good enough for many real tasks. Then ask: "If you were building a tool that answered customer questions about your bakery's hours and menu, which model would you use?" (Haiku — fast, cheap, consistent, no depth required.) "If you were asking Claude to help you write your business mission statement?" (Opus or Sonnet — needs nuance and depth.)

---

## Reading for Tonight

1. **Anthropic 101, Module 1, Lesson 4: "Claude desktop app: Chat, Cowork, Code"** — https://anthropic.skilljar.com/claude-101
   This lesson covers the Claude Desktop interface, including where to find the model selector. Practical and quick.

2. **Ruben Hassid: "Claude 101"** — https://lnkd.in/g75wfW-A
   A practitioner's overview of Claude's capabilities and how to get started using it effectively. Good context-setting before she gets into the advanced prompting techniques of Day 5.

---

## Quiz

**Q1:** What is the main practical difference between Claude Haiku and Claude Opus?

*Answer to look for:* Haiku is fast and lightweight — good for simple, quick, or repetitive tasks. Opus is the most powerful — best for complex reasoning, nuanced writing, and deep analysis. It's not just "Opus is better" — the right answer includes the tradeoff (speed vs. depth/power). If she says "Opus is smarter," push her to complete the thought: "smarter for what kind of tasks? and what does Haiku give you that Opus doesn't?"

**Q2:** What does high temperature do to Claude's output?

*Answer to look for:* High temperature makes Claude's responses more creative, varied, and sometimes surprising. Lower temperature makes responses more consistent and predictable. Accept: "more creative," "more random," "more varied," "less predictable." If she says "better" or "worse" — help her understand that neither is better; it depends on the task.

**Q3:** You need to write a detailed, nuanced business strategy document that requires careful reasoning about your bakery's market position. Which Claude model would you choose and why?

*Answer to look for:* Opus, because the task requires depth, nuanced reasoning, and high-quality output where getting it right matters more than getting it fast. She should be able to articulate the "why" — not just name the model. Accept any answer that connects Opus to complex, high-stakes, depth-requiring tasks.

---

## Session Close

"You've completed Day 4. ✓ You now have a model-selection instinct that most people take months to develop — right tool for the right job. Your Oracle background made the engine analogy click fast. Tomorrow is Day 5, and it's a big one — you'll be using everything from this week to build something real. Come back ready. Next session, tell me you're on Day 5."
