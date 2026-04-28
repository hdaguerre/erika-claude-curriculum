# Day 6: Claude Projects — Tu Espacio Persistente (~2 hrs)

## Session Brief
Today Erika learns what a Claude Project is and why it exists — and by the end she will have created her first personal Project with working instructions so that every new conversation inside it already knows who she is.

## Lesson Artifact
Render an HTML artifact at the start of this session. It should look like a clean lesson card with the following layout and content:

**Header bar:** "Semana 2 · Día 6" in small caps, muted color. Below it, large title: "Claude Projects" and subtitle: "Tu espacio persistente de trabajo."

**Two-column grid (concepts at a glance):**
- Left column header: "Chat normal" — bullet points: starts fresh every time, forgets who you are, you repeat yourself every session
- Right column header: "Claude Project" — bullet points: remembers your instructions always, holds your uploaded files always, every new chat starts informed

**Middle section — the two parts of a Project:**
- "Project Instructions" — described as: "The rules and context that apply to EVERY conversation in this project. Who Claude is here. What tone to use. What topics matter."
- "Knowledge Base" — described as: "Files you upload once. Claude can read them in every conversation. Brand guides, reference docs, personal notes."

**SQL Bridge box** (light yellow background, monospace font accent):
"Un Project es como una conexión a base de datos con un schema ya definido. Las instrucciones = el connection string (quién eres, qué reglas aplican). El Knowledge Base = las tablas del schema (los datos que Claude puede consultar siempre). Cada prompt que escribes = un SELECT que corre dentro de ese contexto."

**Bottom bar:** "Objetivo de hoy: Crear tu primer Project — 'Mi Taller' — y comprobar que el contexto persiste entre conversaciones."

---

## Concepts

### What is a Claude Project?

A Claude Project is a persistent workspace inside Claude Desktop. Think of it as a dedicated room where Claude always knows the house rules before you say a word.

In a regular Claude chat, every conversation starts completely blank. Claude has no memory of what you told it yesterday, no knowledge of your style, no understanding of your goals. You are a stranger every single time. If you want good output, you have to re-explain yourself at the start of every session — and even then, Claude only holds that context for the duration of that one conversation.

A Project changes this entirely. A Project has two permanent layers of context that load automatically into every conversation:

**1. Project Instructions (the system prompt)**
This is a block of text you write once. It tells Claude: who it is inside this project, what your goals are, what tone to use, what rules to follow. Every conversation in the project starts with these instructions already active — before you type your first message, Claude has already read them.

**2. Knowledge Base (uploaded files)**
These are files you upload to the project — text files, PDFs, Word documents. Claude reads them as part of its context in every conversation. You upload once; it's there forever until you remove it.

When you start a new conversation inside a Project, Claude does not start blank. It starts loaded. That is the fundamental shift.

**SQL connection:** A Claude Project is exactly like a database connection string combined with a schema definition. Your connection string (project instructions) tells the system who you are, what environment you're connecting to, what session-level rules apply. Your schema (uploaded knowledge files) defines the data structures available to every query. Then every SELECT you run (every prompt you write) executes within that context automatically — you don't have to re-establish the connection every time.

**Key insight:** Projects are where you stop repeating yourself. Instead of explaining your style, your context, and your rules at the start of every chat, you write it once and it's there forever.

---

### Why this matters for Erika specifically

Right now, if Erika asks Claude to write her an Instagram caption, she has to say something like: "I'm a Spanish-speaking creator, my followers are into home baking and handcraft, my tone is warm and personal, write it in Spanish please." Every. Single. Time.

With a Project, none of that needs to be said again. She says it once in the Project Instructions. From that moment on, every conversation in that project already knows all of it. She can just say: "Write me a caption about my new batch of alfajores." Done.

This is not a small convenience — this is the shift from using Claude as a search box to using Claude as a configured creative partner.

---

## Exercise

This is a hands-on setup exercise. Take your time with each step.

**Step 1 — Create the Project (10 mins)**
Open Claude Desktop. Look for the option to create a new Project (it appears in the left sidebar or under a "Projects" section depending on your version). Create a new project and name it: **Mi Taller** (this will be her personal creative workspace for her home bakery and sewing projects — she'll keep building on this all week).

**Step 2 — Write your first Project Instructions (20 mins)**
Inside Mi Taller, find the "Project Instructions" or "Custom Instructions" section and write the following in English (English is used here because Claude processes instructions most reliably in English — her outputs will still be in Spanish):

```
You are my creative assistant for my home bakery and sewing projects. I create content for Spanish-speaking followers on Instagram. My style is warm, personal, and authentic — like a friend sharing what she loves, not a brand trying to sell. Always respond in Spanish unless I explicitly ask for English. Keep your tone encouraging and down-to-earth.
```

She can adjust the wording, but these are the essential elements: what Claude's role is, who her audience is, what her style is, what language to use.

**Step 3 — Test the persistence, first conversation (15 mins)**
Start a new conversation INSIDE the Mi Taller project. Type exactly this:

> "¿Qué sabes sobre mí?"

Read Claude's response carefully. It should reflect what she put in the Project Instructions — her role as a creator, her audience, her style. If it does, the project is working. If it doesn't, double-check that the instructions were saved correctly.

**Step 4 — Test the persistence, second conversation (10 mins)**
Close that conversation. Start a SECOND new conversation inside the same Mi Taller project. Ask the exact same question:

> "¿Qué sabes sobre mí?"

Notice: Claude still knows. This is the key demonstration. You didn't have to re-explain anything. The second conversation loaded the project context just like the first one did.

**Step 5 — Reflection (5 mins)**
Write down (or just think through): What is ONE thing you currently repeat every time you use Claude that you could move into a Project Instructions instead? This is the mindset shift for the rest of the week.

---

## Reading for tonight
Anthropic 101 Module 2 Lesson 1 — https://anthropic.skilljar.com/claude-101
This is the official introduction to Projects from Anthropic. Read it to see the concept explained in Anthropic's own words — it reinforces today's session from a different angle.

"Set up Claude Cowork + Project" by Ruben Hassid — https://lnkd.in/d8BHqTvV
Ruben shows his actual workflow for setting up Projects. Pay attention to how he structures his instructions — it's a real-world example, not a theoretical one.

---

## Quiz

**Q1:** What is the main difference between a regular Claude chat and a Claude Project?
*Answer:* A regular chat starts blank every time — no memory of who you are or what you want. A Project loads your instructions and uploaded files automatically at the start of every conversation, so Claude already knows your context before you type anything. Look for Erika to use her own words here — the key concept is "persistence."

**Q2:** What are the two key parts of a Project?
*Answer:* (1) Project Instructions — the rules and context that apply to every conversation. (2) The Knowledge Base — files you upload once that Claude can always reference. Both answers should be present.

**Q3:** If you close a Project conversation and start a new one tomorrow, what will Claude remember?
*Answer:* Everything in the Project Instructions and the Knowledge Base — because those are loaded at the start of every conversation. It will NOT remember things you said only inside a conversation, because that was session-level context. This distinction matters and will be explored more deeply in Day 8.

---

## Session Close
"You've completed Day 6. ✓ You created your first Claude Project — Mi Taller — and proved that context persists across conversations. That is the foundational move for everything that comes next this week. Next session, tell me you're on Day 7."
