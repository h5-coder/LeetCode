/**
 * @link https://leetcode-cn.com/leetbook/read/array-and-string/conm7/
 * @description: 最长回文子串
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母（大写和/或小写）组成
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const len = s.length

    if (len < 2) {
        return s
    }
    let result = '', find = (m, n) => {
        while (m >= 0 && n < len && s[m] == s[n]) {
            m--;
            n++
        }
        if (n - m - 1 > result.length) {
            result = s.slice(m + 1, n)
        }
    }
    for (let i = 0; i < len; i++) {
        find(i, i)
        find(i, i + 1)
    }

    return result

};


const s = "babad"
console.log(longestPalindrome(s));