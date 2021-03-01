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
    let pointerB;

    s.split('').forEach((letter, index) => {
        if(duplicates.has(letter)) {
            pointerA += 1;
            pointerB = index;
            //check if its a reoccuring letter 
            duplicates.delete(letter);
            duplicates.set(letter, index)
        } else {
            // this else is if theres no reoccuring found
            duplicates.set(letter, index)
            pointerA = pointerA ? pointerA : 0; 
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

