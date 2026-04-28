# Day 5: Prompting Best Practices + Deliverable (~2 hrs)

## Session Brief
Erika learns three prompt engineering techniques — Role, Constraints, Output Format — and puts all of Week 1 together by producing her first real Spanish-language asset: an Instagram caption for her bakery that sounds genuinely like her voice.

---

## Lesson Artifact

Render a clean HTML artifact at the start of this session:

- **Header:** "Day 5: Las 3 Técnicas de Prompting" with subtitle: "Con esto, cada prompt que escribas va a mejorar inmediatamente"
- **Section 1 — The Three Techniques:** Three cards or rows, each with a name, a one-line description, and a short example:
  - **ROLE** — "Tell Claude who it is." Example: "You are a warm, bilingual food blogger..."
  - **CONSTRAINTS** — "Tell Claude what NOT to do and what to aim for." Example: "Keep it under 150 characters. Do not use formal language. No generic hashtags."
  - **OUTPUT FORMAT** — "Tell Claude exactly how you want the answer structured." Example: "Give me 3 options, each on its own line, with the caption first and the hashtags on the line below."
- **Section 2 — The SQL Connection:** Callout box: "Role = schema context (the database Claude is 'querying from'). Constraints = WHERE clauses and NOT IN filters. Output format = specifying SELECT fields and ORDER BY — you control exactly what shape the result takes."
- **Section 3 — Today's Deliverable:** A highlighted box (different color) announcing: "Hoy vas a escribir tu primer contenido en español para tu panadería. Un Instagram caption real. Para publicar."
- **Footer:** "Tiempo estimado: 2 horas · Ejercicio incluido · Deliverable en español · Quiz al final"

---

## Concepts

### Concept: Three Techniques That Immediately Improve Any Prompt

These three techniques are the foundation of practical prompt engineering. They're not advanced — they're basic hygiene. After today, she should use them automatically.

**Technique 1: Give Claude a ROLE**

This one she already knows from Day 3 — the system prompt. But "role" is a technique she can apply in any prompt, even without a formal system prompt. By telling Claude who it is at the start of a request, she shapes everything that follows.

The role doesn't have to be long. Even a short one changes the output dramatically:
- "You are a home baker sharing your favorite recipes with friends."
- "You are a social media manager for a cozy artisan bakery in Argentina."
- "You are a warm, bilingual food writer who understands both Latin American and North American baking culture."

The more specific the role, the more targeted the output. "You are a food blogger" is fine. "You are a warm, bilingual food blogger who writes for home bakers in Latin America and celebrates traditional recipes with a modern touch" is much better — it gives Claude a specific lens to write through.

**SQL connection:** The role is like schema context. When she's connected to a production Oracle database with a specific schema loaded, every query runs in that context — it knows what tables exist, what the data means, what the relationships are. When she gives Claude a role, she's setting the "schema" it reasons from. The same query ("write a caption") returns completely different results depending on what schema is loaded.

---

**Technique 2: Add CONSTRAINTS**

Constraints are the WHERE clauses of prompting. They don't describe what she wants — they filter out what she doesn't want.

Common constraints:
- **Length:** "Keep it under 150 characters." / "Write no more than 3 sentences."
- **Tone:** "Do not use formal language." / "Avoid clichés like 'passion for baking'."
- **Content:** "Don't include a call to action." / "No emojis." / "Use only real words, no invented terms."
- **Language:** "Output must be in Spanish."

Constraints are powerful because they prevent Claude from defaulting to its generic, crowd-pleasing middle ground. Without constraints, Claude often produces technically correct but bland output. Constraints force it to make real choices.

**SQL connection:** Constraints are WHERE clauses and NOT IN filters. A SELECT without a WHERE clause returns everything — often too much, often unfocused. A well-crafted WHERE clause narrows the result set to exactly what you need. "NOT IN ('cliché phrases', 'generic hashtags')" is a real filter she can apply to a prompt, even if she writes it in plain language rather than SQL syntax.

---

**Technique 3: Specify OUTPUT FORMAT**

This is the most underused technique. If she doesn't tell Claude how to structure the output, Claude makes its own decisions — and those decisions might not match what she needs.

Output format examples:
- "Give me 3 options, each on its own line."
- "Respond in a table with two columns: Version and Tone."
- "Write this as a numbered list."
- "Give me the caption first, then the hashtags on a separate line."
- "Format this as a JSON object with keys: caption, hashtags, tone."
- "Write one short paragraph, no bullet points."

This technique matters especially when she starts building tools and workflows (Weeks 3 and 4) — a script that parses Claude's output needs that output to be consistently structured. But it matters right now too: if she wants three Instagram caption options to choose from, she needs to ask for three. If she wants hashtags separate from the caption, she needs to say so.

**SQL connection:** Output format is specifying SELECT fields and ORDER BY. When she writes SELECT *, she gets everything in whatever order the engine decides. When she writes SELECT caption, hashtags FROM results ORDER BY tone, she gets exactly the shape of data she needs. Same with prompts: tell Claude what fields you want and in what order.

**Key insight:** These three techniques — Role, Constraints, Output Format — stack. A prompt that uses all three is exponentially better than a prompt that uses none. And once she internalizes them, she'll use them automatically.

---

## Exercise

This exercise builds from a bare prompt to a fully engineered one in three steps. She writes the same prompt three times, adding one technique each time, and sees the output change.

**Starting prompt (bare):**
> "Write me an Instagram caption for a photo of freshly baked cookies."

She runs this first. Notes what she gets.

**Round 2 — Add ROLE:**
> "You are a warm, bilingual food blogger who writes about homemade baking for Latin American families. You celebrate the comfort of home-baked food and write with heart.
>
> Write me an Instagram caption for a photo of freshly baked cookies."

She runs this. Compares to Round 1.

**Round 3 — Add CONSTRAINTS and OUTPUT FORMAT:**
> "You are a warm, bilingual food blogger who writes about homemade baking for Latin American families. You celebrate the comfort of home-baked food and write with heart.
>
> Write me an Instagram caption for a photo of freshly baked cookies.
>
> Constraints: Keep the caption under 150 characters. Write in Spanish. Warm and personal — not promotional. No clichés like 'made with love' or 'straight from the oven.'
>
> Format: Give me 3 options. Each option: caption on one line, then 3–5 relevant hashtags on the next line."

She runs this. Compares all three.

**Debrief:** Ask her which version she'd actually use. Ask her what specific changes she'd make. This prepares her for the deliverable.

---

## Deliverable: Her First Real Instagram Caption in Spanish

This is the payoff for Week 1. Guide her through creating a real, publish-ready Instagram caption for her bakery. Follow these steps with her:

**Step 1 — Define the role.** Ask her: What kind of voice does your bakery have? Who are you writing for? Help her articulate this in 2–3 sentences. Write it down as a role statement. If she's unsure, suggest: "You are a home baker in [her city/country] who shares the warmth and tradition of home-baked treats with your community. You write with heart, in a tone that feels like a message to a close friend."

**Step 2 — Pick a specific photo scenario.** She doesn't need to have the actual photo — she just needs to describe one. Help her pick something specific and real to her bakery: freshly baked pan dulce, chocolate chip cookies cooling on a rack, a tray of alfajores, a birthday cake she just finished. The more specific, the better the caption.

**Step 3 — Add constraints together.** Work with her to identify constraints for her brand:
- Length (Instagram sweet spot: under 150 characters for the caption itself, more if including a mini story)
- Tone (warm? playful? nostalgic? modern?)
- Language (Spanish — this is a requirement)
- What to avoid (generic hashtags? overly formal language? food puns?)
- Hashtags: does she want them integrated or on a separate line?

**Step 4 — Add output format.** Ask for 3 options so she can choose or combine. Caption + hashtags on separate lines.

**Step 5 — Run the full prompt.** She writes the full prompt using all three techniques. Claude responds with 3 options in Spanish.

**Step 6 — Iterate at least twice.** After seeing the first set: What doesn't feel like her? What's too generic? Too formal? What word would she change? Help her refine the prompt (tighten the role, add a constraint, change the format) and run it again. Do this at least twice. The goal is a caption that genuinely sounds like her voice in Spanish.

**Step 7 — Final output.** When she has a caption she loves, have her copy it somewhere she can reuse it (Notes app, a Google Doc, anywhere she can find it). This is her first Claude deliverable. It's real.

**Important note:** Don't rush this. She should iterate. Two or three rounds of refinement is expected and good. Help her see that iteration is the skill — the first output is never the final output, and that's by design.

---

## No Reading Tonight

She has a deliverable to be proud of. Let her enjoy it.

*If she wants something to explore on her own:* Tell her to scroll through Ruben Hassid's LinkedIn feed (linkedin.com/in/rubenhassid) and notice which posts are about Claude. She'll recognize concepts from this week. No assigned reading — just optional exploration.

---

## Quiz

**Q1:** Name the three prompting techniques from today.

*Answer to look for:* Role, Constraints, Output Format. She should be able to name all three and give a brief description of each. Don't accept just the names without some indication she knows what they do.

**Q2:** What does adding a Role to your prompt do? Give an example.

*Answer to look for:* It gives Claude a specific persona and lens to reason through — it shapes vocabulary, tone, assumptions, and frame of reference. The example should be something specific: "You are a warm food blogger" not just "a chef." Accept any answer that conveys "it tells Claude who it is and that changes how it responds."

**Q3:** Give one example of a Constraint you could add to a prompt for her bakery.

*Answer to look for:* Any concrete, specific constraint — "keep it under 150 characters," "write in Spanish," "no formal language," "don't use the phrase 'made with love'," "no more than 5 hashtags." Accept any real constraint that isn't vague. If she gives a vague one ("make it nice"), help her tighten it: "make it nice is hard for Claude to act on — what specifically do you want, and what are you trying to avoid?"

---

## Session Close

"You've completed Day 5. ✓ That was a full week of real work — and you finished it with something you can actually use. You now understand what Claude is, how it processes language, how conversations are structured, which model to reach for, and how to engineer a prompt that gets real results. And you have a Spanish-language Instagram caption for your bakery that sounds like you. That's Week 1 done. Take a breath. Next session, tell me you're on Day 6."
