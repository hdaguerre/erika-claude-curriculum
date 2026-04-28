# Day 2: Tokens and Context Window (~1.5 hrs)

## Session Brief
Erika learns how Claude actually "reads" text (tokens, not words), and discovers the single biggest constraint that shapes every interaction: the context window — her working memory budget for every conversation.

---

## Lesson Artifact

Render a clean HTML artifact at the start of this session:

- **Header:** "Day 2: Tokens y Context Window" with subtitle: "Por qué el tamaño importa en cada conversación"
- **Section 1 — What is a Token?** Short visual explanation: show "Hello" = 1 token, "Extraordinary" = 3 tokens, a typical sentence = ~15–20 tokens. Use a small table or visual breakdown.
- **Section 2 — What is the Context Window?** A diagram or description showing the context window as a container. Everything inside it: her messages + Claude's responses. When it fills up, old content falls out.
- **Section 3 — The SQL Connection:** Callout box: "Tokens are like characters in a SQL query. The context window is like a temp table — there's a hard size limit, and old rows get dropped when it fills."
- **Section 4 — Why This Matters:** Three practical bullet points: long conversations lose early context / big file uploads eat the budget / shorter, focused sessions get better results.
- **Footer:** "Tiempo estimado: 1.5 horas · Ejercicio incluido · Quiz al final"

---

## Concepts

### Concept 1: Tokens — How Claude Actually Reads Text

When you type a message to Claude, Claude doesn't process it word by word the way a human reads. It processes it in chunks called **tokens**.

A token is roughly 3/4 of a word in English. Here's a rough rule of thumb:
- A short common word like "cat" or "the" = 1 token
- A longer or complex word like "Extraordinary" = 2–3 tokens
- A typical sentence of 10 words ≈ 13–15 tokens
- 1,000 words of text ≈ 1,300–1,500 tokens

Why does this matter? Because Claude has a limit on how many tokens it can process at once — called the **context window**. Tokens are the unit of measure for that budget.

Spanish and other non-English languages often use slightly more tokens per word than English. Worth knowing, but it won't change how she works day-to-day.

**SQL connection:** Think of tokens as characters in a SQL query or data in a temp table. You can store a lot, but there's a hard physical limit to how much the temp table can hold before you have to start dropping rows to make room. Tokens are how Claude measures what fits.

**Key insight:** Claude doesn't read words — it reads tokens. And tokens are the currency of every conversation.

---

### Concept 2: The Context Window — Claude's Working Memory

The **context window** is the total amount of information Claude can hold in "mind" at any one moment during a conversation. It includes:

- Every message she has sent
- Every response Claude has given back
- Any system prompt loaded at the start
- Any files or documents she's uploaded

All of it counts. The context window is shared by everything.

Here's the critical thing to understand: **when the context window fills up, Claude doesn't crash — it simply starts to "forget" the oldest parts of the conversation.** The most recent exchanges stay in the window; the earliest ones fall out.

This is why a very long conversation can sometimes produce worse results than a fresh one. If she spent the first 20 messages explaining her bakery brand and what she wants, and then the conversation goes on for 80 more messages — by the end, Claude may no longer have access to those first 20 messages. It's not that Claude stopped caring. It's that the window is full, and the early context has fallen out.

Claude's context window is measured in thousands of tokens. Claude 3.5 Sonnet, for example, has a 200,000-token context window — roughly 150,000 words. That sounds enormous, but long documents and extended conversations fill it faster than you'd think.

**SQL connection:** The context window is exactly like a temp table with a maximum row count. You can write rows into it all day, but once you hit the limit, the database starts dropping the oldest rows (or throws an error, depending on your system). Claude is more graceful — it silently loses old context — but the principle is identical. Important data that you loaded early in the session can disappear if you don't manage your session size carefully.

There's a deeper connection here too: this is why **Claude Projects** (which she'll learn on Day 6) are so powerful. A Project lets you put important context — your background, your preferences, your brand — somewhere that doesn't get bumped out of the window. Think of it like a permanent schema that's always loaded before your query runs, instead of data you have to re-enter every session.

**Key insight:** Everything she sends AND everything Claude responds with counts toward the limit. Long conversations eventually lose early context — and that's when responses start to drift or feel "off."

---

## Exercise

This exercise is about experiencing the context window limit firsthand, not just reading about it.

**Step 1 — The short experiment.** Open a fresh Claude chat (not this project). Have a short conversation — 3 exchanges total. Something casual: ask Claude to suggest a name for a bakery, pick one, ask it to describe the vibe of that bakery. Then ask: "What was the first thing I said to you?" Claude will be able to answer correctly.

**Step 2 — The long experiment.** Start another fresh Claude chat. This time, have a long conversation — at least 10–12 exchanges. It doesn't matter what you talk about; the goal is volume. Ask Claude to help you plan a menu, then ask it to write descriptions for each item, then ask for variations, then for pricing suggestions, and so on. Really draw it out.

After 10–12 exchanges, ask: "What was the very first question I asked you at the start of this conversation?"

**Step 3 — Observe and reflect.** Did Claude remember the first message in the short conversation? Did it remember in the long one? What happened? Share what you noticed with me and we'll talk through it.

*Note for Claude tutoring Erika:* In a typical 10–12 exchange conversation she won't have hit the limit yet — Claude's window is large. What she'll likely see is that Claude CAN still recall the first message, which is a good outcome. Use that as a teaching moment: "You didn't hit the limit today — but imagine this conversation went for 200 exchanges, or you uploaded a 50-page document. That's when the window starts to matter." Help her build the mental model even before she experiences the actual failure.

---

## Reading for Tonight

1. **Anthropic 101, Module 1, Lesson 2: "Your first conversation with Claude"** — https://anthropic.skilljar.com/claude-101
   The official lesson covers how conversations flow, which reinforces what she learned today about context and message history.

2. **Ruben Hassid: "Set up AI before prompting"** — https://lnkd.in/exfaYnBQ
   This is a practical piece about how to front-load context intelligently — exactly what the context window forces you to think about. Good bridge to Day 3.

---

## Quiz

**Q1:** What is a token, in simple terms?

*Answer to look for:* A token is roughly a 3/4 of a word — the unit Claude uses to measure and process text. It's not exactly a word and not exactly a character. Accept: "a chunk of text smaller than a word," "the unit Claude reads text in," "about 3/4 of a word." She doesn't need to memorize the exact ratio — she needs to understand it's the unit of measure Claude uses.

**Q2:** What happens when the context window fills up?

*Answer to look for:* Claude loses (forgets) the oldest parts of the conversation. The most recent content stays; early content gets dropped. Accept: "it forgets old messages," "early context gets cut off," "the window moves forward and old stuff falls out." If she says "Claude crashes" or "it gives an error," clarify — Claude handles it gracefully by silently dropping old context, which is actually sneakier than an error because you don't get a warning.

**Q3:** Why might a very long conversation produce worse responses than a fresh one?

*Answer to look for:* Because the early context — where she probably explained what she wanted, her background, her goals — may have fallen out of the context window by the time she asks later questions. Claude is now responding without that foundational information. Accept any answer that captures "the early setup information isn't available anymore" or "the window doesn't hold everything forever."

---

## Session Close

"You've completed Day 2. ✓ That was a genuinely important session — tokens and context windows are things most people use Claude for months without understanding, and you've got it now. You know why long conversations can go sideways, and you'll start to notice when you're burning through your context budget. Next session, tell me you're on Day 3."
