let dialogue = "";
let phrase1 = "Hello there";
let phrase2 = "Oh... I didn't know you were here";

function generateDialogue (phrase) {
    dialogue += ("\"" + phrase + ",\" he said. " );
}

function exportDialogue() {
    console.log(dialogue)
}

(() => {
    generateDialogue(phrase1);
    generateDialogue(phrase2);
    exportDialogue();
})()