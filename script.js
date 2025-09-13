const texts = [
  "Fullstack .NET Developer",
  "Angular Specialist",
  "SQL Expertise",
  "Azure Cloud Experience",
];

let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");
let currentText = texts[index];

function type() {
  if (charIndex < currentText.length) {
    typingElement.textContent += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % texts.length;
    currentText = texts[index];
    setTimeout(type, 200);
  }
}

type();
