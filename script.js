function firstNonRepeatedChar(str) {
 // Write your code here
	n=str.length;
	for(let i=0; i<n;i++){
		if (str.charAt(i) === str.charAt(i + 1)) {
			i++; 
		}else{
			return str.charAt(i);
		}
	} 
	return null; 
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
