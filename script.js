function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (charCount[str.charAt(i)] === 1) {
      return str.charAt(i);
    }
  }

  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
