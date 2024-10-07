const story = {
  0: {
    text: "はるちゃんがとことこ歩いてきた。",
    choices: [
      { text: "散歩にいく", next: 1 },
      { text: "ごはんをあげる", next: 2 },
    ],
  },
  1: {
    text: "はるちゃんと近所を散歩している",
    choices: [
      { text: "ハムに挨拶する", next: 3 },
      { text: "エイリアンに挨拶する", next: 4 },
    ],
  },
  2: {
    text: "はるちゃんはごはんを食べた。",
  },
  3: {
    text: "ハム「どうもこんにちは」",
  },
  4: {
    text: "エイリアン「さみしさみし」",
  },
};

let currentScene = 0;

function renderScene(scene) {
  const textBox = document.getElementById("text-box");
  const choicesBox = document.getElementById("choices");
  textBox.textContent = story[scene].text;
  choicesBox.innerHTML = "";

  story[scene].choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.onclick = () => renderScene(choice.next);
    choicesBox.appendChild(button);
  });
}

window.onload = () => {
  renderScene(currentScene);
};
