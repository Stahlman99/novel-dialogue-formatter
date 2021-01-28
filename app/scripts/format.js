let phrases = ["Hello there", "Oh... I didn't know you were here"];

function generateDialogue (phrases) {
    let dialogue = "";

    phrases.map((phrase) => {
        dialogue += ("\"" + phrase + ",\" he said. \n" );
    });

    return dialogue;
}

(() => {
    console.log(generateDialogue(phrases));
})()