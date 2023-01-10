export function generateRandomHexColor(): string {
  // as per https://css-tricks.com/snippets/javascript/random-hex-color/
  const color = Math.floor(Math.random() * 16777215).toString(16);

  return `#${color}`;
}
