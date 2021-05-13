/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    const total = nums.reduce((a, b) => a + b, 0)
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (2 * sum + nums[i] === total) {
            return i
        }
        sum += nums[i]
    }
    return -1
};

/**
 * @description: 寻找数组的中心索引
 * 给你一个整数数组 nums，请编写一个能够返回数组 “中心索引” 的方法。
 * 数组 中心索引 是数组的一个索引，其左侧所有元素相加的和等于右侧所有元素相加的和。
 * 如果数组不存在中心索引，返回 - 1 。如果数组有多个中心索引，应该返回最靠近左边的那一个。
 * 注意：中心索引可能出现在数组的两端。
 */
const nums = [1, 7, 3, 6, 5, 6]
console.log(pivotIndex(nums));