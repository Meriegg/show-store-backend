export const censorString = (input: string, leaveOut: number) => {
  let newWord = "";
  const splitInput = input.split("");
  const DOT_CHAR = "·";

  if (leaveOut >= splitInput.length) {
    Array.from(new Array(splitInput.length)).forEach(() => {
      newWord += DOT_CHAR;
    });
    return newWord;
  }

  for (let i = 0; i < splitInput.length; i++) {
    newWord += i < leaveOut ? splitInput[i] : DOT_CHAR;
  }

  return newWord;
};
