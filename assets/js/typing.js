const greeting = document.querySelector('[data-greeting]');
const typingDelay = 100;
const greetingPause = 2000;
const greetings = [
  { text: 'Haii~', lang: 'en' },
  { text: 'こんにちは~', lang: 'ja' },
  { text: '你好~', lang: 'zh' },
];
let greetingIndex = 0;
let characterIndex = greetings[0].text.length;
let deleting = true;

function typeGreeting() {
  if (document.hidden) {
    setTimeout(typeGreeting, greetingPause);
    return;
  }

  greeting.parentElement.classList.add('is-typing');
  const current = greetings[greetingIndex];
  characterIndex += deleting ? -1 : 1;
  greeting.textContent = current.text.slice(0, characterIndex);
  let delay = typingDelay;

  if (characterIndex === 0) {
    deleting = false;
    greetingIndex = (greetingIndex + 1) % greetings.length;
    greeting.lang = greetings[greetingIndex].lang;
  } else if (!deleting && characterIndex === current.text.length) {
    deleting = true;
    delay = greetingPause;
    greeting.parentElement.classList.remove('is-typing');
  }

  setTimeout(typeGreeting, delay);
}

if (greeting) setTimeout(typeGreeting, greetingPause);
