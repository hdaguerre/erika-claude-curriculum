# Day 3: Prompt Structure — System, User, and Assistant Turns (~1.5 hrs)

## Session Brief
Erika learns that every Claude conversation has three distinct roles — system, user, and assistant — and discovers that the system prompt is her most powerful tool, the one that shapes every response before she types a single word.

---

## Lesson Artifact

Render a clean HTML artifact at the start of this session:

- **Header:** "Day 3: Estructura de un Prompt" with subtitle: "Los tres roles que definen cada conversación"
- **Section 1 — The Three Roles:** A clean visual layout showing three stacked "layers" or blocks:
  - SYSTEM PROMPT (top, darker background) — "Sets the scene before the conversation starts. Claude's identity, rules, and focus."
  - USER PROMPT (middle) — "What Erika types. Her question, request, or instruction."
  - ASSISTANT TURN (bottom, lighter) — "Claude's response. Shaped by everything above it."
- **Section 2 — The SQL Connection:** Callout box: "System prompt = a stored procedure that runs before every query, setting the session context. User prompt = the SELECT query itself. Assistant turn = the result set returned."
- **Section 3 — Why the System Prompt Matters:** Short paragraph explaining that the system prompt is the most powerful lever she has — it shapes every single response without her having to repeat herself.
- **Section 4 — Where You See This in the Real World:** Two brief examples — a customer service bot (system prompt gives it a persona and rules), and a personal tutor (system prompt defines the subject, level, and tone). Keep it practical.
- **Footer:** "Tiempo estimado: 1.5 horas · Ejercicio incluido · Quiz al final"

---

## Concepts

### Concept: The Three Roles in Every Conversation

Every Claude conversation — even when you can't see all three parts — is built on three distinct roles. Understanding these roles is the single most important structural insight in all of prompt engineering.

**Role 1: The System Prompt**

The system prompt runs before the conversation starts. Erika doesn't see it appear in the chat window as a message — it's invisible to her in normal use, but Claude reads it first and it shapes everything that follows.

The system prompt is where you:
- Give Claude a persona or role ("You are a warm, home-style recipe writer...")
- Set rules and constraints ("Always respond in Spanish," "Keep answers under 3 sentences")
- Provide background context ("The user is a bakery owner targeting home bakers in Latin America")
- Define tone and style ("Be conversational, warm, never clinical")

In Claude Desktop, when she creates a Project and adds instructions, she's writing a system prompt. In a regular chat, she can type a system prompt at the very start of the conversation before asking her first question — just tell Claude "For this conversation, you are X and you should always Y."

**Role 2: The User Prompt**

This is what Erika types. Her question, her request, her instruction. Simple as that.

But here's what matters: the user prompt doesn't exist in isolation. It lands on top of the system prompt. Claude reads the system prompt first, then reads what she typed, and generates a response that honors both.

This is why the same question gets completely different answers depending on what system prompt preceded it. "Write me a recipe introduction" produces generic output on its own — but with a system prompt that says "You are a warm, home-style recipe writer who specializes in simple baking for beginner bakers in Latin America," the same request produces something personal, specific, and useful.

**Role 3: The Assistant Turn**

The assistant turn is Claude's response. It's the output — the result set. And critically, in a multi-turn conversation, the assistant turn also becomes part of the context for the next exchange. Claude "reads" what it said before when generating the next response. This is how conversations build on themselves.

**SQL connection:** This is one of the cleanest SQL analogies in the whole curriculum. The system prompt is like a stored procedure that runs automatically before every query in a session — it sets the session context, defines how data should be handled, applies filters or rules that shape every subsequent operation. The user prompt is the SELECT query itself — the specific thing she's asking for right now. The assistant turn is the result set returned. She writes the query, the session context shapes how it runs, and she gets back a result. That's the whole model.

**Key insight:** The system prompt is the most powerful tool she has. It multiplies the quality of every user prompt that follows, without requiring her to re-explain herself every time she types a message.

---

## Exercise

This exercise demonstrates the power of the system prompt with a direct A/B comparison. It's one of the most satisfying exercises in Week 1 because the difference is immediately obvious.

**Step 1 — No setup.** Open a fresh Claude chat. Without any system prompt or preamble, type exactly:

> "Help me write a recipe introduction."

Read the response. Note how it sounds — the tone, the vocabulary, the assumptions Claude made.

**Step 2 — With a system prompt.** Open another fresh Claude chat. Before asking anything, type this at the very start (tell Erika to type this first, before any question):

> "For this conversation, you are a warm, home-style recipe writer who specializes in simple baking. You write in a friendly, encouraging tone for people who are just starting to bake. Your introductions feel like a conversation with a trusted friend in the kitchen, not a formal cookbook."

After Claude acknowledges this (it will likely say something like "Got it!"), then send the exact same request:

> "Help me write a recipe introduction."

**Step 3 — Compare.** Read both responses side by side. Ask Erika:
- What's different about the tone?
- Which one feels more like "her"?
- What specific words or phrases show the effect of the system prompt?

**Debrief with her:** Help her articulate what happened. The input was identical — "help me write a recipe introduction" — but the output was completely different because of what came before it. That's the system prompt working. Then connect it back to SQL: "It's like running the same SELECT query against two different database configurations. Same query, different context, different output."

If time permits, encourage her to experiment with one more variation: change the system prompt to something very different ("You are a formal culinary school instructor who writes technically precise recipes for professional chefs") and run the same request. The contrast will be dramatic.

---

## Reading for Tonight

1. **Anthropic 101, Module 1, Lesson 3: "Getting better results"** — https://anthropic.skilljar.com/claude-101
   This lesson covers practical techniques for improving prompts, which is a direct extension of what she learned today about prompt structure.

2. **Ruben Hassid: "Stop 'prompting'"** — https://lnkd.in/dPePDVXx
   A reframe on how to think about prompts — less like search queries and more like instructions to a thoughtful collaborator. Good mental preparation for Days 4 and 5.

---

## Quiz

**Q1:** Name the three roles in a Claude conversation and what each one does.

*Answer to look for:* System prompt (sets context, persona, rules before the conversation), user prompt (what she types — the request or question), assistant turn (Claude's response). She doesn't need perfect terminology. She needs to understand the three parts and their purposes. Accept any phrasing that captures: "the setup / the question / the answer" or "the background instructions / what I type / what Claude says back."

**Q2:** What is the main purpose of a system prompt?

*Answer to look for:* It sets the scene before the conversation starts — giving Claude a persona, rules, context, and tone that shape every response that follows. Accept: "it tells Claude who it is and how to behave," "it sets the rules for the whole conversation," "it's the background instructions." If she says "it tells Claude what to do" that's close but push for more specificity — it sets the context for everything, not just one thing.

**Q3:** If you want Claude to always respond in a warm, encouraging tone without having to ask for it every single time, where do you put that instruction?

*Answer to look for:* In the system prompt (or in the Project instructions, which is the same thing). Not in the user prompt each time — that's inefficient. The system prompt is where persistent instructions live. Accept: "at the beginning," "in the project settings," "in the system prompt," "in the setup." If she says "I'd just keep repeating it in every message," that's a teaching moment — help her understand the difference between one-time setup (system prompt) and per-message instructions (user prompt).

---

## Session Close

"You've completed Day 3. ✓ You just learned something most people figure out the hard way after months of prompting. The system prompt is a multiplier — every well-crafted system prompt makes everything you do afterward more effective. Your SQL instinct helped you here: you already knew that session context shapes query results. You've just applied that to Claude. Next session, tell me you're on Day 4."
