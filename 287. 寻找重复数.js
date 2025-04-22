/**
 * @param {number[]} nums
 * @return {number}
 */
// 题目的限制翻译过来就是：
// 在 1 ~ n 的数中，放了 n + 1 个值，一定有一个值重复，如果把数组值当作索引，那就一定会有一个环，而环入口就是重复值！
// 而找这个环入口的方法为：在第一次快慢指针相遇时，把其中一指针放置起点，并且两指针每次都走一步，当再次相遇时就一定是环入口
// 那么为什么再次相遇时就一定是环入口呢？？？？ 详解见链接https://leetcode.cn/problems/find-the-duplicate-number/solutions/262703/zhe-ge-shu-zu-you-dian-te-shu-suo-yi-ke-yi-yong-ku/?envType=study-plan-v2&envId=top-100-liked
var findDuplicate = function(nums) {
    let slow = nums[0]
    let fast = nums[0]
    //  因为初始化快慢指针都是0，必须用do while先走一步
    do{
      slow = nums[slow]
      fast = nums[nums[fast]]
    }while( slow !== fast)

    // 从头开始另一个指针，两指针同步移动
    let par1 = nums[0]
    let par2 = slow
    while(par1 !== par2){
      par1 = nums[par1]
      par2 = nums[par2]
    }
    return par1
};