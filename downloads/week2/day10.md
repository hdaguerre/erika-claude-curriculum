# Day 10: Taller LinkedIn — Tu Perfil Completo en Español (~2.5 hrs)

## Session Brief
Today is all practice. Erika will use everything she has learned in weeks 1 and 2 to produce her complete LinkedIn profile in Spanish — headline, about section, and featured section — through structured prompting. This is her first major real-world deliverable.

## Lesson Artifact
Render an HTML artifact at the start of this session. It should look like a clean, workshop-style card — different in tone from the previous days. This is a working session, not a lecture.

**Header bar:** "Semana 2 · Día 10" in small caps. Below it, large title: "Taller LinkedIn" and subtitle: "Tu primer entregable real."

**Workshop overview panel** (clean, minimal, like a project brief):
- "Lo que vas a producir hoy:"
- "① Titular de LinkedIn (hasta 220 caracteres)"
- "② Sección Acerca de (tu historia, en tu voz)"
- "③ Texto para la sección Destacado (qué estás construyendo ahora)"
- Small note: "Todo en español. Todo con tu voz. Listo para pegar en LinkedIn."

**Skills you're applying today** (as small pill tags):
Role prompting · Context loading · Constraints · Prompt chaining · Voice matching · Iteration

**Preparation checklist box** (light background, checkboxes):
"Antes de empezar, ten a mano:
☐ Tu título anterior (desarrolladora Oracle SQL / reportes y datos)
☐ Años de experiencia antes de tu pausa
☐ Lo que te entusiasma ahora (IA, Claude, contenido, trabajo GTM)
☐ Las habilidades que quieres destacar
☐ Cómo quieres presentar tu pausa (madre, crianza — es una fortaleza)"

**Tone note** (italic, warm): "No hay respuestas incorrectas hoy. Este perfil es tuyo. El objetivo es que suene como tú — no como un CV corporativo."

---

## Workshop Structure

Claude should guide Erika through the following sequence, one section at a time. Do not rush. Each section deserves its own space. If she gets stuck, slow down and ask her questions to draw out the content — don't fill in the blanks for her.

---

### Before Starting — Gather Her Raw Material

Ask Erika to share the following facts. She can answer in Spanish or English — whatever is easier. These become the raw input for every prompt that follows.

Prompt to Erika:
> "Antes de escribir nada, quiero que me cuentes algunos datos básicos. No tienen que estar perfectos — esto es materia prima, no el producto final. Dime:
> - Tu título o rol anterior (la parte técnica: SQL, Oracle, reportes, stored procedures, etc.)
> - Cuántos años trabajaste antes de tu pausa
> - Por qué tomaste la pausa (crianza — y por qué eso es una fortaleza, no una explicación que disculparte)
> - Qué te emociona de lo que estás aprendiendo ahora
> - Qué tipo de trabajo te gustaría hacer o explorar
> - Una cosa personal que quieras que la gente sepa sobre ti"

Wait for her answers. Reflect them back briefly so she knows you understood. Then begin.

---

### Step 1 — The Headline (20 mins)

Begin with this framing for Erika:

"El titular es la línea más importante de LinkedIn. Aparece en los resultados de búsqueda, en los comentarios, en las invitaciones de conexión. La mayoría de la gente pone solo su título anterior. Pero tú no eres solo tu título anterior — eres también lo que estás construyendo ahora. El mejor titular dice: quién eres O en qué te estás convirtiendo, no solo dónde trabajaste."

**Prompt structure to use** (help her build this, don't just give it to her — walk through each part):

```
Role: "Eres un especialista en perfiles de LinkedIn para profesionales hispanohablantes que regresan al mercado laboral después de una pausa"

Context: [insert her background facts she just shared]

Task: "Escribe 5 opciones de titular para LinkedIn. Máximo 220 caracteres cada una. En español. Tono: confiado pero cálido — no corporativo."

Constraint: "Al menos 2 opciones deben mencionar IA o Claude explícitamente. Al menos 1 debe hacer referencia a su experiencia técnica en SQL/datos. Ninguna debe empezar con 'Apasionada de' — ya lo usa todo el mundo."
```

Read the 5 options with her. Ask: which of these feels most like you? Which one would you want a stranger to read first? Help her pick one, and if she wants to adjust the wording, run one refinement prompt:
> "Toma la opción [número] y ajusta [lo que quiere cambiar]. Mantenla dentro de 220 caracteres."

**Final output:** One headline. Written down.

---

### Step 2 — The About Section (45 mins)

This is the hardest part of the session. Give Erika this framing before starting:

"La sección 'Acerca de' es donde cuentas tu historia. No es un resumen de CV. No es una lista de habilidades. Es el momento en que alguien te lee y piensa: 'Esta persona es interesante. Quiero saber más.' Tienes que cubrir tres cosas: de dónde vienes (experiencia técnica), dónde estuviste (la pausa, enmarcada como lo que fue — criar hijos es trabajo real), y hacia dónde vas (IA, Claude, lo que estás construyendo)."

**Important framing for the career gap:** The pause is not a gap to explain away. It is evidence of commitment, prioritization, and grit. A person who steps out of the workforce to raise children and then comes back to learn cutting-edge technology is not behind — she's resourceful and self-directed. Claude should frame it this way, and Erika should own it this way.

**Prompt structure** (build this with her):

```
Role: "Eres un especialista en narrativa profesional para LinkedIn"

Context: [her full background — technical career, the pause, what she's doing now, her values]

Task: "Escribe 3 versiones de la sección 'Acerca de' para LinkedIn en español:
- Versión 1: Profesional/formal — tono serio, énfasis en habilidades técnicas y transición a IA
- Versión 2: Personal/narrativa — cuenta la historia, incluye la pausa como fortaleza, voz cálida y humana
- Versión 3: Híbrida — mezcla lo técnico con lo personal"

Constraint: "Entre 150-250 palabras cada versión. Primera persona singular. Nunca 'nosotros'. Sin clichés como 'apasionada' o 'orientada a resultados'."
```

Read all three versions with her. This is a chaining moment — ask:
> "¿Qué elementos de cada versión te gustan más? ¿Hay una frase de la Versión 2 que quieras meter en la Versión 1? ¿Hay algo importante que falta?"

Then run the blend prompt:
> "Usando los elementos que mencioné, escribe una versión final que combine lo mejor de las tres. Esta es la definitiva — debe sonar exactamente como yo."

If the blend isn't quite right, run one more refinement:
> "La segunda mitad aún suena demasiado formal. Reescríbela con el tono de la Versión 2 — más personal, más historia."

**Final output:** One About section. Written down.

---

### Step 3 — The Featured Section Blurb (20 mins)

Frame this for Erika:

"La sección Destacado en LinkedIn es donde pones lo que estás haciendo AHORA — no lo que hiciste antes. Es tu señal de dirección. Si alguien llega a tu perfil y solo lee esta sección, ¿qué quieres que sepan sobre adónde vas?"

**Prompt structure:**

```
Context: [her current learning — Claude, IA, this curriculum, what she's building]

Task: "Escribe 3 opciones de descripción para la sección Destacado de LinkedIn. 2-3 oraciones cada una. En español. Tono: segura, con dirección clara, sin sonar como que estás vendiendo algo."

Options should cover different angles:
- One focused on her learning journey
- One focused on what she's building (Mi Taller, content creation)
- One forward-looking (where she wants to go with this)"
```

Help her pick one or blend two. This section is shorter — it should be quick.

**Final output:** One Featured blurb. Written down.

---

### Final Deliverable Review

Before closing, go through the three pieces together:

Read them in sequence — Headline → About → Featured — as if Erika is reading her own profile for the first time.

Ask her:
1. "¿Suena como tú?"
2. "¿Hay algo que no te representa o que cambiarías?"
3. "¿Hay algo que querías que estuviera y no está?"

Make any final small adjustments. Then confirm: these are ready to paste into LinkedIn.

**The three final outputs:**
1. Headline (final chosen version)
2. About section (full paragraph, her voice, in Spanish)
3. Featured blurb (2-3 sentences, forward-looking)

---

## Quiz

This is a short, reflection-based quiz. She's been working hard. The point is consolidation, not testing.

**Q1:** What prompting technique made the biggest difference in getting the output you wanted today?
*Answer:* There is no wrong answer here. Look for her to identify something specific — role-setting, constraints (like "no empieces con 'apasionada'"), the chaining approach, or the three-version strategy. The quality indicator is specificity: she names a technique and can say what it did.

**Q2:** What would you do differently next time you use Claude for a writing project?
*Answer:* Reflection-based. Look for strategic thinking — not "I'd write better prompts" (vague) but something like "I'd start by asking Claude to analyze examples before generating" or "I'd do the three-version approach from the beginning" or "I'd set the constraints before asking Claude to generate." Evidence that she's thinking about process, not just output.

**Q3:** What is one thing from weeks 1-2 that you want to make sure you remember as you start week 3?
*Answer:* Her choice. This is consolidation. Any answer is valid. The act of articulating it is the point — she's naming her own takeaway, which means she owns it.

---

## Session Close
"You've completed Day 10 — and Week 2. ✓ You just produced your LinkedIn profile in Spanish using only your prompting skills. That's not nothing — that's real work. Take a day off if you need it. When you're ready, Week 3 moves into Claude Code. Tell me you're on Day 11 when you're ready to start."
