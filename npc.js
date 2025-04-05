class NPC {
  constructor({ position, image, frames = { max: 1 }, dialogue = [] }) {
    this.position = position;
    this.image = image;
    this.frames = { ...frames, val: 0, elapsed: 0 };
    this.dialogue = dialogue; // Array of dialogue strings
    this.currentDialogueIndex = 0;

    this.image.onload = () => {
      this.width = this.image.width / this.frames.max;
      this.height = this.image.height;
    };
  }

  draw() {
    c.drawImage(
      this.image,
      this.frames.val * this.width,
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width / this.frames.max,
      this.image.height
    );
  }

  interact() {
    if (this.dialogue.length > 0) {
      const currentDialogue = this.dialogue[this.currentDialogueIndex];
      console.log(currentDialogue); // Replace this with a UI element to display dialogue
      this.currentDialogueIndex =
        (this.currentDialogueIndex + 1) % this.dialogue.length;
    }
  }
}