/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/

/*
If the given string and reverse string are the same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/
var s
function lengthOfLastWord(s) {  
    if (s.length === 0) {
        return 0;
    } else {
        var words = s.trim().split(' ');
        var lengthOfLastWord = words[words.length - 1].length;
        console.log(`Length of the last word from "${s}" is ${lengthOfLastWord}\n`);
    }
};
console.log("Length of the last word from string:")
lengthOfLastWord("Hello World"); //example #1
lengthOfLastWord("   fly me   to   the moon  "); //example #2

//check anagrams between two strings
function isAnagram(str1, str2) { 
    let sortStr1 = str1.toLowerCase().split('').sort().join('');
    let sortStr2 = str2.toLowerCase().split('').sort().join('');
    if(sortStr1 === sortStr2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 console.log("Check given numbers are anagram :")
 isAnagram('listen','Listen')
 isAnagram('hello','World') 

 //Check given string is palindrome

let origStr;
function isPalindromeString(origStr){
    let revStr=''
    for (let i = origStr.length - 1; i >= 0; i--) {
        revStr = revStr+origStr[i];
    }
    console.log(`Original value is "${origStr}" and Reverse valus is "${revStr}"`);
    if (origStr === revStr){
       console.log("True")
    }else{
       console.log("False")
    }
}
isPalindromeString("radar");
isPalindromeString("Testing");