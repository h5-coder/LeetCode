
/**
 * @link https://leetcode-cn.com/leetbook/read/array-and-string/crmp5/
 * @description: 给定一个字符串，逐个翻转字符串中的每个单词。
 * 无空格字符构成一个 单词 。
 * 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
 * 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.trim();
    let arr = s.split(/\ +/)
    arr.reverse()
    return arr.join(' ')
};


const s = "the sky is blue"
console.log(reverseWords(s));