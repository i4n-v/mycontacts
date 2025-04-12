export default function cleanupString(string: string, characters: string[] | RegExp[]) {
  let replacedString = string;

  characters.forEach((character) => {
    replacedString = replacedString.replace(character, '');
  });

  return replacedString;
}
