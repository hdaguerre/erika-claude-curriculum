# Day 9: File Uploads como Contexto y Prompt Chaining (~2 hrs)

## Session Brief
Today Erika learns two techniques that together unlock a new level of output quality: uploading files as context, and breaking her work into chained prompts — and by the end she will have produced an Instagram post that she iteratively refined through multiple steps until it's exactly what she wanted.

## Lesson Artifact
Render an HTML artifact at the start of this session. It should look like a clean lesson card with the following layout and content:

**Header bar:** "Semana 2 · Día 9" in small caps, muted color. Below it, large title: "File Uploads + Prompt Chaining" and subtitle: "Cómo pasar de 'suficientemente bueno' a 'exactamente lo que quería.'"

**Two concept boxes side by side:**

Left box — "File Uploads":
- Icon hint: document/upload symbol
- "What it is: Darle a Claude material de referencia real para trabajar"
- "What you can upload: Texto · PDFs · Word docs · Imágenes"
- "Why it matters: Claude puede analizar, comparar, aprender de tus referencias"
- SQL analogy: "= Cargar un CSV externo en una tabla temporal para poder hacer queries sobre él"

Right box — "Prompt Chaining":
- Icon hint: chain/link symbol
- "What it is: Dividir el trabajo en pasos donde cada prompt construye sobre el anterior"
- "The pattern: Analizar → Generar → Refinar → Ajustar"
- "Why it matters: Tres prompts enfocados casi siempre superan a uno gigante"
- SQL analogy: "= Un stored procedure de varios pasos donde el output de cada paso alimenta el siguiente"

**Chaining diagram** (horizontal flow with arrows):
Step 1: "Prompt 1 — Analizar" → Step 2: "Prompt 2 — Generar" → Step 3: "Prompt 3 — Refinar" → "Resultado final"
Each step box shows: what you give Claude / what you get back

**Warning box** (amber border):
"El error clásico: pedir todo en un solo prompt gigante. Claude puede hacerlo, pero el resultado suele ser genérico. Cuando el trabajo importa, encadena."

**SQL Bridge box** (light yellow background):
"File upload = cargar un CSV externo en una tabla temporal para poder consultarlo. Prompt chaining = un stored procedure de varios pasos donde el resultado de cada paso alimenta el siguiente. Así es como las consultas complejas funcionan: no escribes una sola query enorme, la divides en pasos manejables."

---

## Concepts

### File uploads as context

In any Claude conversation — or in the Project Knowledge Base — Erika can upload files and Claude will read them as part of its working context. This expands what Claude can work with dramatically.

**What she can upload:**
- **Text files (.txt)** — plain text, notes, lists, scripts
- **PDFs** — reports, articles, research, documents
- **Word documents (.docx)** — anything she writes in Word
- **Images** — Claude can describe what it sees, analyze composition, read text in images, and discuss visual content

**The key mental model:** uploading a file is giving Claude a piece of the real world to work with. Instead of Claude having to work from a vague description ("I like this kind of post"), she can show Claude an actual post and say "work from this." That specificity produces much better output.

Practical applications for Erika:
- Upload a competitor's post or an Instagram post she admires — Claude analyzes it and learns from it
- Upload a recipe to adapt it for Instagram content
- Upload a sewing pattern or project photos to write about it
- Upload a rough draft she wrote — Claude polishes it while keeping her voice

**SQL connection:** File upload = loading an external CSV into a temp table so you can run queries against it. You don't just describe the data to the database — you load it in. Claude works the same way. Real data produces real analysis.

**Key insight for file uploads:** Claude reads what she gives it. The richer the reference material, the more accurate and specific the output.

---

### Prompt chaining — the most underused technique

Prompt chaining is the practice of breaking a complex task into a sequence of focused prompts, where each prompt builds on the output of the previous one.

Most people write one big prompt and hope for the best. The result is usually something generic — Claude tries to satisfy every part of the request at once and ends up half-satisfying all of them. The output is safe. It's competent. It's not hers.

Chaining works differently. Each prompt has one clear job:

- **Prompt 1 — Analyze:** Give Claude the reference material. Ask it to understand and explain it. "What makes this post work? What's the tone? What's the structure?"
- **Prompt 2 — Generate:** Now give Claude a specific task based on that understanding. "Write me a post using those same elements, on this topic, in my style."
- **Prompt 3 — Refine:** Take what Claude produced and tune one specific dimension. "Make it more personal. Add a memory or story. Reduce the length by half."
- **Prompt 4 (if needed) — Adjust:** One more specific change. "The opening line is too generic — rewrite just that line."

By the end of this sequence, she's had four focused conversations with Claude about one piece of content. The output reflects her judgment applied at every step — not just Claude's best guess at what she wanted.

**SQL connection:** Prompt chaining = a multi-step stored procedure where each step's output feeds the next. You don't write a single massive SQL statement that does everything — you break it into CTEs or temp tables, each step building on the last, each one checkpointable and debuggable.

**Key insight:** Prompt chaining is how she gets from "good enough" to "exactly what I wanted." One big prompt rarely gets her there. Three focused prompts almost always do.

---

### Why these two techniques work together

File uploads give Claude something real to work from. Prompt chaining gives her control over the process. Together:
- Step 1: Upload the reference → have Claude analyze it
- Step 2: Generate a first draft based on that analysis
- Step 3: Refine that draft with specific feedback
- Result: A final piece that's grounded in real examples, shaped by her judgment, and refined to match her voice

This is a workflow, not just a technique. And it scales to almost anything: writing content, planning a recipe, preparing for a difficult conversation, analyzing a business idea.

---

## Exercise

This exercise produces a real, final Instagram post through the full chaining workflow.

**Step 1 — Find your reference (10 mins)**
Find an Instagram post she genuinely likes. This could be:
- A screenshot of a post on her phone (she can upload the image)
- A post she copies and pastes as text into the conversation

It should be in her niche (food, baking, handcraft, lifestyle) or any creator she admires. This is her reference material.

**Step 2 — Open Mi Taller and upload or paste the post (5 mins)**
Start a new conversation in her Mi Taller project. Upload the screenshot OR paste the text of the post directly into the conversation window.

**Step 3 — Prompt 1: Analyze (15 mins)**
Type:
> "Analiza este post. ¿Qué lo hace efectivo? ¿Qué tono usa? ¿Cómo está estructurado — hay una historia, una pregunta, un gancho? ¿Qué hace que alguien quiera leerlo hasta el final?"

Read Claude's analysis carefully. It's doing the analytical work — she doesn't have to figure this out alone.

**Step 4 — Prompt 2: Generate (20 mins)**
Choose a topic from her Mi Taller work — her bakery, a sewing project, a recent baking experiment, a memory with her kids. Then type:

> "Usando esos mismos elementos que analizaste — la estructura, el tono, el gancho — escríbeme un post de Instagram sobre [su tema]. En español. En mi voz."

Read what comes back. This is the first draft. Don't stop here.

**Step 5 — Prompt 3: Personalize (15 mins)**
Now refine it. Type:

> "Está bien, pero quiero que se sienta más vivido. Agrega un pequeño detalle personal o un recuerdo que haga que se sienta real — como si lo hubiera vivido, no solo lo estuviera describiendo."

Read the second draft. Feel the difference.

**Step 6 — Compare and reflect (10 mins)**
Read the first draft (Prompt 2 output) next to the final draft (Prompt 3 output). Ask: what changed? Which feels more like her? What was the chaining step worth?

If she wants a fourth step: "Reescribe solo la primera línea — es demasiado genérica. Quiero una apertura que llame la atención de inmediato."

**Save anything she loves** to her Knowledge Base — structures that worked, a tone note, an example of her voice at its best.

---

## Reading for tonight
"Claude & text file" by Ruben Hassid — https://lnkd.in/ee29GvFF
Ruben walks through using text files as context with Claude — directly related to today's file upload concept.

---

## Bridge to Week 3

Before the quiz, share this with Erika:

"Mañana es tu taller de LinkedIn — tu gran entregable de la semana. Pero antes, un adelanto de lo que viene en la Semana 3.

A partir de la próxima semana vas a usar algo llamado Claude Code, que es una forma más poderosa de trabajar con Claude directamente en tu computadora. La lección de hoy es en realidad como ya piensa Claude Code: le das archivos, los lee, trabaja con ellos, produce outputs. La diferencia es que Claude Code también puede CREAR archivos y EJECUTAR scripts.

Ya estás pensando de la manera correcta."

---

## Quiz

**Q1:** Name two types of files she can upload to Claude.
*Answer:* Any two from: text files (.txt), PDFs, Word documents (.docx), images (JPG, PNG, etc.). All four are valid. Bonus if she mentions what each type enables — images for visual analysis, text files for reference content, PDFs for long documents.

**Q2:** What is prompt chaining and why is it better than one giant prompt?
*Answer:* Prompt chaining is breaking a task into a sequence of focused prompts where each one builds on the previous. It's better than one big prompt because each step has one clear job — analyze, then generate, then refine — so Claude's attention isn't split. The result reflects her judgment applied at each step, not just Claude's single-shot guess at what she wanted.

**Q3:** If her first draft isn't quite right, what's the better move — rewrite the whole prompt, or add a chaining step?
*Answer:* Add a chaining step. Keep the conversation going and give Claude one specific direction for improvement: "make it more personal," "shorten the opening," "add a story." Rewriting the whole prompt discards the progress already made. Chaining preserves what worked and fixes what didn't.

---

## Session Close
"You've completed Day 9. ✓ You ran a full prompt chaining workflow — analyze, generate, refine — and produced a post that's genuinely better than the first draft. That's a skill you'll use every day. Tomorrow is the LinkedIn workshop — your biggest deliverable yet. Next session, tell me you're on Day 10."
