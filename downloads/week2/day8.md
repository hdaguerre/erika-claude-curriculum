# Day 8: Memoria — Qué Recuerda Claude y Por Qué (~2 hrs)

## Session Brief
Today Erika learns the three layers of Claude's memory — and more importantly, she learns the one source of frustration that trips up almost every new user: Claude does not remember conversations the way a human colleague does, and she will prove this to herself through a hands-on experiment.

## Lesson Artifact
Render an HTML artifact at the start of this session. It should look like a clean lesson card with the following layout and content:

**Header bar:** "Semana 2 · Día 8" in small caps, muted color. Below it, large title: "Memoria en Claude" and subtitle: "Qué recuerda, qué olvida, y qué puedes hacer al respecto."

**Three-layer memory diagram** (stacked boxes, top to bottom, each a different shade):

Top box (lightest, labeled "Capa 1"):
- Title: "Memoria dentro de una conversación"
- Description: "Claude recuerda TODO lo que se dice durante la conversación actual."
- Duration: "Dura: mientras dure esa conversación"
- SQL analogy: "= Tabla temporal (temp table)"

Middle box (medium shade, labeled "Capa 2"):
- Title: "Memoria del Proyecto"
- Description: "Claude recuerda tus instrucciones y archivos del Knowledge Base en TODAS las conversaciones de ese proyecto."
- Duration: "Dura: siempre, hasta que lo cambies"
- SQL analogy: "= Tabla persistente (base table)"

Bottom box (darkest, labeled "Capa 3 — LA TRAMPA"):
- Title: "Memoria entre conversaciones"
- Description: "NO EXISTE. Lo que dices en la conversación A no viaja sola a la conversación B."
- Duration: "Dura: 0 — se pierde al cerrar"
- SQL analogy: "= La temp table se borra al cerrar la sesión"

**Warning box** (red-orange border, light background):
"El error más común: asumir que Claude 'recuerda' como un colega humano. No lo hace. Recuerda lo que está en su contexto — nada más. Si algo importa, escríbelo donde Claude pueda leerlo."

**Solution box** (green border):
"La solución: cuando algo funciona bien — un tono que encajó, una estructura que sintió bien — guárdalo en tus instrucciones o Knowledge Base. Tú eres el sistema de memoria de Claude."

---

## Concepts

### The three layers of Claude's memory

Understanding how Claude's memory works is one of the most practical things Erika will learn in this curriculum. This is the thing that, once understood, changes how she uses Claude forever.

**Layer 1: In-conversation memory**
Within a single conversation, Claude remembers everything. If she tells Claude in message 3 that she prefers short paragraphs, Claude will use short paragraphs in message 15. If she establishes a character, a format, or a rule mid-conversation, that rule holds for the rest of that conversation. This layer is reliable and powerful — long conversations can build on themselves.

**Layer 2: Project memory**
Across all conversations in a Project, Claude has access to the Project Instructions and the Knowledge Base. These load at the start of every conversation. This is the persistent layer. This is what she built in Days 6 and 7.

**Layer 3: The gap that surprises everyone**
There is NO automatic memory between conversations. If she tells Claude something in conversation A — something that's not in the Project Instructions or Knowledge Base — that information does not exist in conversation B. Conversation B starts with only what the project provides. That's it.

This is the single most common source of frustration for new Claude users. They have a great conversation, Claude learns something important about their preferences, they close the tab, and the next day — it's gone. They blame Claude. But Claude is working exactly as designed. The burden of persistence is on the user, not on Claude.

**SQL connection:** In-conversation memory = a temp table. It exists for the duration of the session and is dropped when the session ends. Project knowledge = a persistent table that's always there. Nothing moves from temp to persistent automatically. She has to do that herself — by updating the Knowledge Base or Project Instructions when she discovers something worth keeping.

**Key insight:** Claude is not building a relationship with her over time. Every conversation is a fresh instance that reads from whatever context she's provided. If something matters, she needs to write it down somewhere Claude can read it.

---

### The practical discipline this creates

Once she understands this model, the right habit becomes clear: whenever something works well in a conversation, she captures it.

Good tone came through in a caption today? Copy the instruction that produced it into the Project Instructions.

Claude used a structure for a post that she loved? Add that structure as an example to her Knowledge Base.

She told Claude about her alfajores recipe and wants that fact always available? Add it to her knowledge file.

This is not a limitation — it's a design. It gives her complete control over what Claude knows. Nothing she doesn't want is in there. Nothing she adds is lost. She decides what persists.

The mental shift: she is not talking TO a system that learns automatically. She is CONFIGURING a system that executes precisely on what she configures. The power is hers — but so is the responsibility.

---

## Exercise

This exercise is designed specifically to demonstrate the memory boundary — not just explain it. She needs to experience it herself to internalize it.

**Step 1 — Start a conversation and plant a fact (10 mins)**
Start a new conversation inside her Mi Taller project. Type:

> "Quiero que recuerdes algo importante sobre mi bakery: mi receta insignia son los alfajores de mi abuela y siempre menciono esto cuando hablo de mi negocio."

Claude will acknowledge this. It now "knows" this fact — but only within this conversation.

**Step 2 — Confirm it works in this conversation (5 mins)**
In the same conversation, ask:

> "¿Cuál es mi receta insignia?"

Claude will answer correctly. Good. This is Layer 1 — in-conversation memory working perfectly.

**Step 3 — Close and start fresh (5 mins)**
Close that conversation. Start a NEW conversation inside the same Mi Taller project. Ask:

> "¿Cuál es mi receta insignia?"

Claude will not know. It might make something up, or it might say it doesn't have that information. Either way, what she told it in the previous conversation is gone. This is the gap. This is real.

**Step 4 — Fix it the right way (15 mins)**
Go to her Knowledge Base in Mi Taller. Open the `voz-de-marca.txt` file (or create a new file called `sobre-mi-bakery.txt` if she prefers to keep things separate). Add this line:

```
Receta insignia: los alfajores de mi abuela — siempre menciono este detalle cuando hablo de mi bakery porque es parte de mi historia y la de mi negocio.
```

Save and re-upload (or update) the file in the Knowledge Base.

**Step 5 — Test the fix (10 mins)**
Start ANOTHER new conversation inside Mi Taller. Ask the same question:

> "¿Cuál es mi receta insignia?"

This time Claude will know. Because now it's in the Knowledge Base — in a persistent table — not just in a temp table that got dropped.

**Step 6 — Reflection (5 mins)**
Think about (or write down): What is one other piece of information she has mentioned to Claude before in passing — a preference, a rule, a personal detail — that she should now add to her Knowledge Base so she never has to repeat it again?

---

## Reading for tonight
Anthropic 101 Module 2 Lesson 2 "Creating with artifacts" — https://anthropic.skilljar.com/claude-101
This lesson is about artifacts — the rendered HTML, code, and document outputs Claude can produce. It's adjacent to today's topic but important: artifacts are how Claude creates shareable outputs, and she'll use them more in the coming days.

---

## Quiz

**Q1:** Name the three layers of Claude's memory.
*Answer:* (1) In-conversation memory — everything in the current conversation. (2) Project memory — Project Instructions and Knowledge Base files, available in every conversation. (3) No cross-conversation memory — things said in one conversation do not automatically appear in the next. All three should be named, even briefly.

**Q2:** What happens to things Claude learns in conversation A when she starts conversation B?
*Answer:* They are gone. Conversation B starts with only the Project Instructions and Knowledge Base. Nothing from conversation A carries over unless she explicitly added it to one of those two places. The SQL analogy to look for: temp table vs persistent table.

**Q3:** If she wants Claude to always remember her signature recipe, what is the right place to store it?
*Answer:* The Knowledge Base — in one of her uploaded files. Project Instructions would work too (for very short, rule-like facts), but the Knowledge Base is the right home for content-type information like personal facts. She should NOT rely on telling Claude in a conversation — that's the temp table approach, and it disappears.

---

## Session Close
"You've completed Day 8. ✓ You proved to yourself — with your own hands — where Claude's memory boundary lives. That understanding will save you time and frustration every week from here on. Next session, tell me you're on Day 9."
