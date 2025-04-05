# Eidolon

### Created by: Tara Laraine S. Pablo, 9-Strontium

---

## Description

**Eidolon** is a pixel game set inside the Edge Lab of Pisay.  
You play as Elijah, a ghost who recently died inside the Edge Lab and cannot leave the room. You cannot pass on to the afterlife until you have figured out how you died. The only catch? You have no memory of your death.  

Will you be able to uncover the mystery of your death, or will you spend eternity wandering inside the Edge Lab?

---

## Update Plan

The next updates will focus on the game itself, located in the legacy webpage. These updates include:

- Addition of NPCs.
- Custom dialogues for NPCs (dependent on the player's answers to the form).
- Finalization of the tiles in the game.

Additionally, all current webpages will be tweaked and finalized to improve the user experience. The dialogue webpage is still in the wireframe stage and has not been implemented yet. Updates to the **About** webpage will continue as new changes are made.  

### Planned Updates:
- **Notepad Webpage**: Add two new characters (the player and another character to be revealed).
- **Dialogue Webpage**: Implement customizable dialogue based on player input.

The current project schedule is manageable but could be improved. I aim to complete this project in the coming weeks and stay on track with the rest of the groups.

---

## Dialogue Portion

**Type of Data**: Basic player information.  
**Purpose**: To create customizable dialogue with NPCs in the game.

```json
info {
   name: text-string,
   pronouns: enumerate-string,
   color: color-string,
   hobby: text-string,
   food: text-string
}

// Note: "color" can accept hex codes, RGB, and HSL values.
```

---

## Wireframe

**Link to Wireframe**: [Canva Wireframe](https://www.canva.com/design/DAGi0dTdv5M/UUdOaXl1OIMARgjnBybJpA/edit?utm_content=DAGi0dTdv5M&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)  

**Image Version**:  
<picture>
 <source media="(prefers-color-scheme: dark)" srcset="images/WIREFRAME OF PROJECT UPDATE.png">
 <source media="(prefers-color-scheme: light)" srcset="images/WIREFRAME OF PROJECT UPDATE.png">
 <img alt="Wireframe" src="images/WIREFRAME OF PROJECT UPDATE.png">
</picture>

---

## Progress Report

### Emoji Legend:
- 😔 - Barely any progress.
- 😐 - Some progress (basic HTML, CSS, or JS).
- 😀 - Good progress, in development.
- 😁 - Almost complete, needs minor tweaks.
- 😍 - Complete.

---

### Current Progress for Each Page:

<details>
  <summary>Homepage (😁)</summary>
  **Description**:
  - Background designed to resemble an old camera.
  - Includes main buttons (Play, About).
  - Features audio and animations.

  **Files**:
  - `homepage.html`
  - `homepage.css`
  - `homepage.js`
</details>

<details>
  <summary>Chapters Page (😁)</summary>
  **Description**:
  - Contains one chapter.
  - Includes a redirect to the notepad page.

  **Files**:
  - `chapters.html`
  - `chapters.css`
  - `chapters.js`
</details>

<details>
  <summary>About Page (😁)</summary>
  **Description**:
  - Includes project description, author information, Q&A, and social media links.
  - Webpage format is not finalized.

  **Files**:
  - `about.html`
  - `about.css`
</details>

<details>
  <summary>Notepad (😍)</summary>
  **Description**:
  - Displays information about each character.
  - Currently includes three characters (main character to be added in the next update).

  **Files**:
  - `notepad.html`
  - `notepad.css`
  - `notepad.js`
</details>

<details>
  <summary>Legacy Game (😀)</summary>
  **Description**:
  - Short gameplay focused on tile and page formatting.
  - Current colors are placeholders and not final.

  **Files**:
  - `ch1.html`
  - `ch1.css`
  - `ch1.js`
</details>

<details>
  <summary>Dialogue (😔)</summary>
  **Description**:
  - Collects player information (as seen in the sample JSON code).
  - Will follow the wireframe format.
  - Redirects to the Legacy Game webpage after data submission.

  **Files**:
  - None yet.
</details>