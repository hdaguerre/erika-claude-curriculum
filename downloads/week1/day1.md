# Day 1: What is Claude? The Request-Response Model (~1 hr)

## Session Brief
Erika gets her first clear mental model of what Claude actually is — not a search engine, not a database, but a reasoning machine — and understands how every conversation works at its most basic level.

---

## Lesson Artifact

Render a clean HTML artifact at the start of this session. It should look like a polished lesson card with:

- **Header:** "Day 1: What is Claude?" with a subtitle: "La base de todo lo que viene después"
- **Section 1 — The Big Idea:** Claude is a large language model (LLM). It doesn't look things up. It reasons about language. Short paragraph, plain language.
- **Section 2 — How a Conversation Works:** A simple visual flow showing: [She types a message] → [Prompt] → [Claude reasons] → [Response]. Label the input side "prompt" and the output side "response."
- **Section 3 — The SQL Connection:** A small callout box (styled differently, maybe a light background) with the SQL analogy: "A prompt is like a SELECT query. What you put in shapes what you get out."
- **Section 4 — What Claude Is NOT:** Three short bullet points clarifying common misconceptions (not a search engine, not a database, not a chatbot that remembers everything).
- **Footer:** "Tiempo estimado: 1 hora · Ejercicio incluido · Quiz al final"

Make it visually clean — good typography, some spacing, readable at a glance. This sets the tone for all future lesson cards.

---

## Concepts

### What Claude Is

Claude is a large language model — an LLM. That term sounds technical, but the core idea is simple: Claude was trained on an enormous amount of text, and from that training it learned to understand and generate language at a very high level.

Here's the key distinction that trips most people up: **Claude does not look things up.** When you ask Claude a question, it doesn't search the internet or query a database. It generates a response based on patterns it learned during training. It reasons with language, not with stored facts.

This is why Claude can sometimes be wrong about things (it can reason confidently but incorrectly — what people call a "hallucination"), and it's also why it can be remarkably good at tasks that require thinking, writing, analyzing, and explaining.

**SQL connection:** Think about how Oracle works. When you run a SELECT query, the database retrieves data that was stored there. The data is real — it was inserted, it's persisted, you can verify it. Claude doesn't work that way. Claude doesn't have a table of facts to SELECT from. Instead, it's more like a very sophisticated stored procedure that takes your input and generates output by applying learned patterns — no lookup, just reasoning.

**Key insight:** Claude is a reasoning engine, not a search engine or a database. What you get out depends heavily on what you put in.

---

### How a Conversation Works: The Request-Response Model

Every interaction with Claude follows the same pattern. You send a message — called a **prompt** — and Claude generates a response. That's it. That's the loop.

A few important things about this loop:

1. **Each prompt is a new request.** Claude processes what you sent and generates a reply. The conversation history you see on screen gives Claude context, but only because the entire conversation is bundled and sent with each new message. Nothing is truly "stored" the way a database stores records.

2. **What you put in shapes what you get out.** A vague prompt produces a vague response. A clear, specific, well-structured prompt produces a much better response. This is the fundamental skill you'll be building over the next 20 days.

3. **Claude doesn't have ongoing state between separate conversations.** If you close a chat and open a new one, Claude doesn't remember the previous conversation. It's like opening a new database connection with no session variables set.

**SQL connection:** A prompt is like a SELECT query. You craft the query (prompt), you run it (send it), and you get a result set (response). The quality of your result depends on how well you wrote the query. A poorly written SELECT with no WHERE clause returns everything — overwhelming and often useless. A well-crafted query returns exactly what you need. Prompting works the same way.

**Key insight:** The request-response loop is the foundation of everything. Every tool, skill, workflow, and system she'll build in weeks 3 and 4 is just a more sophisticated way of managing this loop.

---

## Exercise

This exercise is about observation, not production. She's going to have three short conversations with Claude and notice how it responds to different types of requests. Keep each conversation to 2–3 exchanges.

**Before she starts:** Tell her to open a fresh Claude chat (not this project — a regular chat in Claude.ai). She'll do three experiments.

**Step 1 — Factual question.** Ask Claude: "What is the capital of Argentina?" or any simple factual question she knows the answer to. Observe: Does Claude answer correctly? How does it phrase the response? Does it add extra context she didn't ask for?

**Step 2 — Writing task.** Ask Claude: "Help me write a short text message to a friend telling them I'll be 10 minutes late." Observe: How does Claude interpret "help me write"? Does it produce one version or multiple? Does it ask for more information?

**Step 3 — Explain something simply.** Ask Claude: "Explain how a refrigerator works to a 10-year-old." Observe: How does Claude adjust its language? Compare this to asking the same question without specifying the audience.

After each exchange, she should notice — not judge, just observe — what Claude did and why it might have made those choices.

**Debrief with her:** After she runs all three, ask her: "What surprised you? What was different from what you expected?" Let her share her observations. Validate what she noticed. Help her articulate the pattern she's seeing.

---

## Reading for Tonight

1. **Anthropic 101, Module 1, Lesson 1: "What is Claude?"** — https://anthropic.skilljar.com/claude-101
   This is the official onboarding lesson from Anthropic. It covers the same ground as today's session but in a slightly different way — seeing the same concept twice from different angles helps it stick.

2. **Ruben Hassid: "Why I quit ChatGPT"** — https://lnkd.in/dV2FJYpf
   A practitioner's take on what makes Claude different from ChatGPT in real-world use. Short read, worth her time, and it'll spark questions for tomorrow.

---

## Quiz

Do not advance to Day 2 until Erika answers all three questions correctly. If she gets one wrong, re-explain that concept from a different angle and try again.

**Q1:** What type of technology is Claude? (Don't accept "an AI" — push for something more specific.)

*Answer to look for:* A large language model (LLM). She should understand that it generates responses by reasoning about language patterns, not by looking things up. Accept: "a language model," "an LLM," "a model trained on text to generate language." She doesn't need to say it perfectly — she needs to understand the concept.

**Q2:** What happens to the context when you start a brand new chat with Claude?

*Answer to look for:* It's gone. Each new conversation starts completely fresh. Claude has no memory of previous conversations unless you explicitly provide that history. Accept any phrasing that conveys "it resets," "it forgets," "it starts over," "it's like a new session."

**Q3:** Name one way Claude is different from a search engine like Google.

*Answer to look for:* Claude generates responses by reasoning, it doesn't look things up or retrieve stored facts. Google indexes and retrieves existing web pages. Claude produces new text based on patterns learned during training. Accept any answer that captures the "generates vs retrieves" distinction. If she says "Claude can be wrong about facts" that's also a valid and insightful answer — validate it and explain why (hallucinations stem from generation without retrieval).

---

## Session Close

"You've completed Day 1. ✓ Great work today — you built the foundation that everything else will sit on. You now understand what Claude actually is and how the request-response loop works. That distinction between 'generating' and 'retrieving' is one most people never consciously make — you've got it now. Next session, tell me you're on Day 2."
