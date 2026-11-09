function scramble(element, characters, done) {
  const text = element.textContent;
  const letters = [...text];
  const length = letters.length;
  const steps = 20;
  let step = 0;

  const timer = setInterval(() => {
    if (++step === steps || document.hidden) {
      clearInterval(timer);
      element.textContent = text;
      done?.();
      return;
    }

    const settled = Math.floor((step - 1) / steps * length);
    let output = '';
    for (let index = 0; index < length; index++) {
      const letter = letters[index];
      if (index < settled || letter === '~') {
        output += letter;
      } else {
        const random = characters[Math.floor(Math.random() * characters.length)];
        output += letter >= 'A' && letter <= 'Z' ? random.toUpperCase() : random;
      }
    }
    element.textContent = output;
  }, 50);
}

const latinName = document.querySelector('[data-scramble="name"]');
const kana = document.querySelector('[data-scramble="kana"]');

if (latinName && kana) {
  scramble(latinName, 'abcdefghijklmnopqrstuvwxyz');
  scramble(kana, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン');
}
