/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (!intervals.length) {
        return []
    }
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    let res = [intervals[0]];
    for (let i = 0; i < intervals.length; i++) {
        let right = res[res.length - 1][1]
        if (right >= intervals[i][0]) {
            if (right < intervals[i][1]) {
                res[res.length - 1][1] = intervals[i][1]
            }
        } else {
            res.push(intervals[i])
        }
    }
    return res
};

/**
 * @description: 合并区间
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 */
/**
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 */
const nums = [[1, 3], [2, 6], [8, 10], [15, 18]]
console.log(merge(nums));
console.log(merge([[1, 4], [4, 5]]));
