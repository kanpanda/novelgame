// console.log("HelloHello");

const story = {
  0: {
    text: "あなたは暗い森の中にいる。進むべき道を選んでください。",
    choices: [
      { text: "右に進む", next: 1 },
      { text: "左に進む", next: 2 },
    ],
  },
  1: {
    text: "右に進んだ先には広場があり、そこには魔法使いがいた。",
    choices: [
      { text: "話しかける", next: 3 },
      { text: "無視して通り過ぎる", next: 4 },
    ],
  },
  2: {
    text: "左に進むと、森はさらに暗くなり、怪物の気配がする。",
    choices: [
      { text: "戦う", next: 5 },
      { text: "逃げる", next: 6 },
    ],
  },
  3: {
    text: "魔法使いと話すと、強力な魔法を教えてくれた。",
    choices: [
      { text: "魔法を使う", next: 7 },
      { text: "感謝して去る", next: 8 },
    ],
  },
  4: {
    text: "魔法使いを無視して進んだが、道に迷ってしまった。",
    choices: [{ text: "やり直す", next: 0 }],
  },
  // 他のシーンを追加
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
