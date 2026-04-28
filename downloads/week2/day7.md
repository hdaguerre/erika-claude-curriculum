# Day 7: Custom Instructions y Knowledge Base (~2 hrs)

## Session Brief
Today Erika deepens her Mi Taller project by writing richer instructions and uploading her first knowledge file — and by the end she will have produced an Instagram bio in Spanish that actually sounds like her.

## Lesson Artifact
Render an HTML artifact at the start of this session. It should look like a clean lesson card with the following layout and content:

**Header bar:** "Semana 2 · Día 7" in small caps, muted color. Below it, large title: "Custom Instructions & Knowledge Base" and subtitle: "Configurar Claude como un asistente que ya te conoce."

**Two-panel comparison (side by side):**

Left panel — "Project Instructions" with a subtle purple left-border accent:
- "What it is: The system prompt for the entire project"
- "What goes here: Who Claude is in this project · Tone and voice rules · Topics in scope · Output format preferences · Rules Claude must always follow"
- "When it runs: At the start of every single conversation"
- "Analogy: A stored procedure that fires at session start and sets all session variables"

Right panel — "Knowledge Base" with a subtle green left-border accent:
- "What it is: Files Claude can always read"
- "What goes here: Brand voice documents · Reference materials · Personal facts · Example posts · Style guides"
- "When it runs: Available in every conversation, on demand"
- "Analogy: Persistent lookup tables Claude can always JOIN against"

**SQL Bridge box** (light yellow background):
"Las instrucciones = un stored procedure que se ejecuta al inicio de cada sesión y setea variables. El Knowledge Base = tablas de lookup persistentes. Tu guía de voz es una tabla. Tu lista de hashtags favoritos es una tabla. Cada conversación hace un JOIN implícito contra todo eso."

**Bottom bar:** "Objetivo de hoy: Instrucciones mejoradas + tu primer archivo de Knowledge Base + una bio de Instagram en español que suena como tú."

---

## Concepts

### Project Instructions — what belongs there and why

Project Instructions are the single most important configuration in your Claude Project. They are the system prompt that shapes every conversation. Before you type your first message in any conversation, Claude has already read these instructions. They are the lens through which it interprets everything you say.

Good Project Instructions cover five things:

**1. Role definition** — who Claude is in this specific project. "You are my creative assistant for my home bakery and Instagram content" is different from just "You are a helpful assistant." The more specific the role, the more focused the behavior.

**2. Tone and voice** — how Claude should communicate. This includes: formal or informal language, use of "tú" vs "usted" in Spanish, whether humor is appropriate, how direct or gentle to be. Without this, Claude picks a generic default that probably doesn't match you.

**3. Scope** — what topics this project is for. "This project is for bakery content and Instagram copy — not for unrelated tasks." Scope helps Claude stay on topic and not drift.

**4. Output format** — what shape the outputs should take by default. "Always write Instagram captions without hashtags in the body — put hashtags in a separate block at the end." This saves you from having to say it every time.

**5. Hard rules** — things Claude must always or never do. "Never use 'nosotros' — always speak in first person singular." "Never use formal business language." These are your non-negotiables.

The key principle: everything you find yourself repeating in conversation belongs in the instructions instead.

**SQL connection:** Project Instructions are a stored procedure that fires at session start and sets all session variables. Think of `SET SESSION character_set_client = 'warm_personal_voice'` — that setting applies to everything that runs afterward. You set it once; it's always active.

**Key insight:** The better your project setup, the less you have to explain in every chat. A well-configured project is like hiring an assistant who has read all your notes before their first day.

---

### The Knowledge Base — what to upload and how to think about it

The Knowledge Base is where you upload files that Claude should be able to reference in every conversation. These files become permanent context — Claude reads them as part of its understanding of who you are and what you're working with.

What kinds of files belong here?

- **A "Brand Voice" document** — a few paragraphs you write describing how you talk, what you care about, what your tone is. This is the single most powerful file you can add. When Claude has read this, its outputs start to actually sound like you.
- **Reference lists** — your most-used hashtags, your product names, your seasonal offerings, the names of people or places you mention often.
- **Example posts or writing** — copy-paste 5-10 of your best existing posts or captions. Claude will learn your patterns from examples faster than from descriptions.
- **Personal facts** — things that make your content personal: your abuela's recipe, your city, your kids' names (if she wants to use them), your origin story.

Files can be plain text (.txt), Word documents (.docx), or PDFs. Plain text is simplest and works perfectly.

The mental model: every file in your Knowledge Base is a lookup table. When Claude writes something for you, it's doing an implicit JOIN against all those tables. The richer the tables, the more accurate the output.

**SQL connection:** Knowledge Base files = persistent lookup tables. Your brand voice doc is a `voice_guide` table. Your hashtag list is a `tags` table. Your example posts are a `style_samples` table. Claude runs its generations against all of them simultaneously.

---

## Exercise

**Step 1 — Open Mi Taller and improve the Project Instructions (20 mins)**
Open the Mi Taller project you created on Day 6. Go to the Project Instructions section. You're going to expand what's there. Add the following details — she should fill in the brackets with her real choices:

```
You are my creative assistant for my home bakery and sewing projects.

My bakery is called [she picks a name — something warm and personal, like "La Cosita Dulce" or whatever feels right to her].

My audience: Spanish-speaking women who love home baking and handcraft — mothers, hobbyists, people who appreciate things made with love, not mass-produced.

My tone: warm, personal, first-person singular. Never "we." Never corporate. Write as if a friend is sharing something she loves.

My content rules:
- Always write in Spanish
- No emojis in the caption body unless I add them myself
- Hashtags go in a separate block at the end, never embedded in the text
- Keep captions between 3-5 sentences unless I ask for longer
- Never start a caption with "¡Hola!" — find a more original opening

My role for you: write Instagram captions, help me brainstorm content ideas, help me tell stories about my work.
```

Take 10-15 minutes to customize this — she should change anything that doesn't feel like her, add what's missing, remove what doesn't apply.

**Step 2 — Create a Brand Voice .txt file (20 mins)**
Open a plain text editor (Notes on Mac, Bloc de Notas on Windows, or any text editor). Create a file called `voz-de-marca.txt`.

Write 8-12 sentences describing yourself as a creator. This should feel like you're describing yourself to a new assistant on their first day. Cover:
- How do you talk? (Direct? Storytelling? Poetic? Casual?)
- What do you care about most in what you make?
- What do you never want to sound like?
- What emotion do you want people to feel when they read your content?
- Is there a phrase or expression you use a lot?
- What's something personal that often comes through in your content?

There are no wrong answers. The more honest and specific she is, the better.

Example of what a good sentence in this file looks like: "Cuando escribo sobre mis recetas, siempre menciono de dónde vienen — si es de mi abuela, de una tarde con mis hijos, de un experimento que salió bien. Eso es lo que me importa compartir."

**Step 3 — Upload the file to the Knowledge Base (5 mins)**
In the Mi Taller project, find the Knowledge Base section and upload `voz-de-marca.txt`. Confirm it appears in the list.

**Step 4 — Start a new conversation and test (20 mins)**
Start a fresh conversation inside Mi Taller. Type:

> "Escríbeme una bio de Instagram en español. Debe sonar como yo — usa todo lo que sabes sobre mí para que sea auténtica, no genérica."

Read the result. Ask yourself: does this sound like something I could have written? Does it match my voice?

If it's close but not quite there, add one chaining prompt (you'll learn more about chaining in Day 9):
> "Está bien pero quiero que suene más [personal / cercana / con más historia]. Reescríbela con ese ajuste."

**Step 5 — Compare (5 mins)**
Read the final bio. Compare it to any previous LinkedIn or Instagram bio she has. Notice what changed. Write down (or just observe): what in her Project Instructions or Brand Voice file made the difference?

---

## Reading for tonight
"Claude to sound like you" by Ruben Hassid — https://lnkd.in/eF56s4i8
Ruben walks through exactly how to make Claude sound like a specific person — this is directly what she built today.

Anthropic 101 Module 2 Lesson 3 "Working with skills" — https://anthropic.skilljar.com/claude-101
A broader view of how to configure Claude for specific use cases — useful context for where this project work fits in the larger picture.

---

## Quiz

**Q1:** What kinds of things belong in Project Instructions vs the Knowledge Base?
*Answer:* Project Instructions: behavioral rules, tone, role definition, output format rules, hard constraints — things that govern HOW Claude behaves. Knowledge Base: reference content Claude reads FROM — brand voice documents, examples, facts, lists. A good answer distinguishes "rules" from "reference material." Both are permanent, but one shapes behavior and one provides content.

**Q2:** What is one file Erika could upload to make Claude's outputs sound more like her?
*Answer:* The brand voice document she created today — a file of sentences describing her tone, what she cares about, what she never wants to sound like. Also acceptable: a file of her existing Instagram posts or captions that Claude can learn from.

**Q3:** If Claude gives her an answer that doesn't match her style, where should she look first to fix the problem?
*Answer:* The Project Instructions — specifically the tone and voice rules. If the instructions are vague ("warm tone"), Claude will interpret that loosely. More specific rules ("no emojis in the body, first-person singular, never corporate") produce tighter results. The Knowledge Base (specifically the brand voice file) is the second place to look — if it's sparse, Claude has less to work with.

---

## Session Close
"You've completed Day 7. ✓ You have richer Project Instructions and your first Knowledge Base file — and you've produced a bio that sounds like you, not like a template. That is meaningful progress. Next session, tell me you're on Day 8."
