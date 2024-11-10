function encode() {
  const inputText = document.getElementById('input-text').value;
  const outputText = document.getElementById('output-text');

  const mapping = {
    'A': 'Z',
    'B': 'Y',
    'C': 'X',
    'D': 'K'
  };

  let encodedText = '';
  for (let i = 0; i < inputText.length; i++) {
    const char = inputText[i].toUpperCase();
    encodedText += mapping[char] || char;
  }

  outputText.value = encodedText;
} 