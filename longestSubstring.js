 /*
 Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
*/

const lengthOfLongestSubstring = (s) =>{
    if(s.length < 1) {
        return 0;
    }
    let duplicates = new Map(); 
    let biggestLength = 1;
    let tmpLength = 0;
    let pointerA;
    let pointerVal;
    let pointerB;

    s.split('').forEach((letter, index) => {
        if(duplicates.has(letter)) {
            pointerA += 1;
            pointerB = index;

            //check if its a reoccuring letter 
            if(pointerVal === letter) {
                pointerA += 1;
            }

            duplicates.delete(letter);
            duplicates.set(letter, index)
        } else {
            // this else is if theres no reoccuring found
            duplicates.set(letter, index)
            pointerA = pointerA ? pointerA : 0; 
            pointerVal = letter;
            pointerB = duplicates.get(letter);
        }

        if(tmpLength < pointerB - pointerA + 1) {
           tmpLength = pointerB - pointerA + 1;
           biggestLength = tmpLength;
        };

    });
    return biggestLength;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('au'));
console.log(lengthOfLongestSubstring('dvdf'));
console.log(lengthOfLongestSubstring('abba'));
console.log(lengthOfLongestSubstring('aab'));

// var lengthOfLongestSubstring = function(s) {
//     var start = 0, maxLen = 0;
//     var map = new Map();
  
//     for(var i = 0; i < s.length; i++) {
//         var ch = s[i];
      
//         if(map.get(ch) >= start) start = map.get(ch) + 1;
//         map.set(ch, i);
      
//         if(i - start + 1 > maxLen) maxLen = i - start + 1;
//     }
  
//     return maxLen;
//   };