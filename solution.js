var twoSum = function(nums, target) {
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) { // Loop through each element except the last one
        for (let j = i + 1; j < n; j++) { // Loop through elements after nums[i]
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};