/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) {
        return ''
    }
    let res = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        for (; j < strs[i].length; j++) {
            if (strs[i][j] !== res[j]) {
                break;
            }
        }
        res = res.substr(0, j)
    }
    return res
};

/**
 * @description: 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 */
/**
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 */
const strs = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(strs));
