const allDSAProblems = [
  // Easy Problems
  {
    id: 1,
    title: "Two Sum",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: "Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].",
    difficulty: "easy",
    python: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Example usage
print(two_sum([2,7,11,15], 9))  # Output: [0, 1]`,
    javascript: `function twoSum(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }
    return [];
}

// Example usage
console.log(twoSum([2,7,11,15], 9));  // Output: [0, 1]`
  },
  {
    id: 2,
    title: "Reverse String",
    description: "Write a function that reverses a string. The input string is given as an array of characters s.",
    examples: "Input: s = ['h','e','l','l','o']\nOutput: ['o','l','l','e','h']",
    difficulty: "easy",
    python: `def reverse_string(s):
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
    return s

# Example usage
s = ['h','e','l','l','o']
reverse_string(s)
print(s)  # Output: ['o','l','l','e','h']`,
    javascript: `function reverseString(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
}

// Example usage
let s = ['h','e','l','l','o'];
reverseString(s);
console.log(s);  // Output: ['o','l','l','e','h']`
  },
  {
    id: 3,
    title: "Palindrome Number",
    description: "Given an integer x, return true if x is palindrome integer.",
    examples: "Input: x = 121\nOutput: true\nExplanation: 121 reads as 121 from left to right and from right to left.",
    difficulty: "easy",
    python: `def is_palindrome(x):
    if x < 0:
        return False
    original = x
    reversed_num = 0
    while x > 0:
        reversed_num = reversed_num * 10 + x % 10
        x //= 10
    return original == reversed_num

# Example usage
print(is_palindrome(121))  # Output: True`,
    javascript: `function isPalindrome(x) {
    if (x < 0) return false;
    let original = x;
    let reversed = 0;
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return original === reversed;
}

// Example usage
console.log(isPalindrome(121));  // Output: true`
  },
  {
    id: 4,
    title: "Merge Two Sorted Lists",
    description: "Merge two sorted linked lists and return it as a sorted list.",
    examples: "Input: l1 = [1,2,4], l2 = [1,3,4]\nOutput: [1,1,2,3,4,4]",
    difficulty: "easy",
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def merge_two_lists(l1, l2):
    dummy = ListNode()
    current = dummy
    while l1 and l2:
        if l1.val < l2.val:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next
    current.next = l1 or l2
    return dummy.next

# Example usage (assuming lists are created)
# Output: [1,1,2,3,4,4]`,
    javascript: `function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 || l2;
    return dummy.next;
}

// Example usage (assuming lists are created)
// Output: [1,1,2,3,4,4]`
  },
  {
    id: 5,
    title: "Valid Parentheses",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    examples: "Input: s = '()'\nOutput: true",
    difficulty: "easy",
    python: `def is_valid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)
    return not stack

# Example usage
print(is_valid('()'))  # Output: True`,
    javascript: `function isValid(s) {
    const stack = [];
    const mapping = {')': '(', '}': '{', ']': '['};
    for (let char of s) {
        if (char in mapping) {
            const topElement = stack.length > 0 ? stack.pop() : '#';
            if (mapping[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

// Example usage
console.log(isValid('()'));  // Output: true`
  },
  {
    id: 6,
    title: "Maximum Subarray",
    description: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    examples: "Input: nums = [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6\nExplanation: [4,-1,2,1] has the largest sum = 6.",
    difficulty: "easy",
    python: `def max_subarray(nums):
    max_current = max_global = nums[0]
    for num in nums[1:]:
        max_current = max(num, max_current + num)
        if max_current > max_global:
            max_global = max_current
    return max_global

# Example usage
print(max_subarray([-2,1,-3,4,-1,2,1,-5,4]))  # Output: 6`,
    javascript: `function maxSubarray(nums) {
    let maxCurrent = maxGlobal = nums[0];
    for (let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }
    return maxGlobal;
}

// Example usage
console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]));  // Output: 6`
  },
  {
    id: 7,
    title: "Climbing Stairs",
    description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    examples: "Input: n = 2\nOutput: 2\nExplanation: There are two ways to climb to the top.\n1. 1 step + 1 step\n2. 2 steps",
    difficulty: "easy",
    python: `def climb_stairs(n):
    if n <= 2:
        return n
    a, b = 1, 2
    for _ in range(3, n + 1):
        a, b = b, a + b
    return b

# Example usage
print(climb_stairs(2))  # Output: 2`,
    javascript: `function climbStairs(n) {
    if (n <= 2) return n;
    let a = 1, b = 2;
    for (let i = 3; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

// Example usage
console.log(climbStairs(2));  // Output: 2`
  },
  {
    id: 8,
    title: "Best Time to Buy and Sell Stock",
    description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
    examples: "Input: prices = [7,1,5,3,6,4]\nOutput: 5\nExplanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
    difficulty: "easy",
    python: `def max_profit(prices):
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        if price < min_price:
            min_price = price
        elif price - min_price > max_profit:
            max_profit = price - min_price
    return max_profit

# Example usage
print(max_profit([7,1,5,3,6,4]))  # Output: 5`,
    javascript: `function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
}

// Example usage
console.log(maxProfit([7,1,5,3,6,4]));  // Output: 5`
  },
  {
    id: 9,
    title: "Single Number",
    description: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
    examples: "Input: nums = [2,2,1]\nOutput: 1",
    difficulty: "easy",
    python: `def single_number(nums):
    result = 0
    for num in nums:
        result ^= num
    return result

# Example usage
print(single_number([2,2,1]))  # Output: 1`,
    javascript: `function singleNumber(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
    return result;
}

// Example usage
console.log(singleNumber([2,2,1]));  // Output: 1`
  },
  {
    id: 10,
    title: "Intersection of Two Arrays II",
    description: "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays.",
    examples: "Input: nums1 = [1,2,2,1], nums2 = [2,2]\nOutput: [2,2]",
    difficulty: "easy",
    python: `from collections import Counter

def intersect(nums1, nums2):
    counts = Counter(nums1)
    result = []
    for num in nums2:
        if counts[num] > 0:
            result.append(num)
            counts[num] -= 1
    return result

# Example usage
print(intersect([1,2,2,1], [2,2]))  # Output: [2,2]`,
    javascript: `function intersect(nums1, nums2) {
    const count = {};
    for (let num of nums1) {
        count[num] = (count[num] || 0) + 1;
    }
    const result = [];
    for (let num of nums2) {
        if (count[num] > 0) {
            result.push(num);
            count[num]--;
        }
    }
    return result;
}

// Example usage
console.log(intersect([1,2,2,1], [2,2]));  // Output: [2,2]`
  },
  // Medium Problems
  {
    id: 11,
    title: "Add Two Numbers",
    description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    examples: "Input: l1 = [2,4,3], l2 = [5,6,4]\nOutput: [7,0,8]\nExplanation: 342 + 465 = 807.",
    difficulty: "medium",
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def add_two_numbers(l1, l2):
    dummy = ListNode()
    current = dummy
    carry = 0
    while l1 or l2 or carry:
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0
        total = val1 + val2 + carry
        carry = total // 10
        current.next = ListNode(total % 10)
        current = current.next
        l1 = l1.next if l1 else None
        l2 = l2.next if l2 else None
    return dummy.next

# Example usage (assuming lists are created)
# Output: [7,0,8]`,
    javascript: `function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function addTwoNumbers(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;
    let carry = 0;
    while (l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const total = val1 + val2 + carry;
        carry = Math.floor(total / 10);
        current.next = new ListNode(total % 10);
        current = current.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return dummy.next;
}

// Example usage (assuming lists are created)
// Output: [7,0,8]`
  },
  {
    id: 12,
    title: "Longest Substring Without Repeating Characters",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    examples: "Input: s = 'abcabcbb'\nOutput: 3\nExplanation: The answer is 'abc', with the length of 3.",
    difficulty: "medium",
    python: `def length_of_longest_substring(s):
    char_set = set()
    left = 0
    max_length = 0
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)
    return max_length

# Example usage
print(length_of_longest_substring('abcabcbb'))  # Output: 3`,
    javascript: `function lengthOfLongestSubstring(s) {
    const charSet = new Set();
    let left = 0;
    let maxLength = 0;
    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

// Example usage
console.log(lengthOfLongestSubstring('abcabcbb'));  // Output: 3`
  },
  {
    id: 13,
    title: "Container With Most Water",
    description: "Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.",
    examples: "Input: height = [1,8,6,2,5,4,8,3,7]\nOutput: 49",
    difficulty: "medium",
    python: `def max_area(height):
    left, right = 0, len(height) - 1
    max_area = 0
    while left < right:
        width = right - left
        h = min(height[left], height[right])
        max_area = max(max_area, width * h)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_area

# Example usage
print(max_area([1,8,6,2,5,4,8,3,7]))  # Output: 49`,
    javascript: `function maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        const width = right - left;
        const h = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, width * h);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}

// Example usage
console.log(maxArea([1,8,6,2,5,4,8,3,7]));  // Output: 49`
  },
  {
    id: 14,
    title: "3Sum",
    description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
    examples: "Input: nums = [-1,0,1,2,-1,-4]\nOutput: [[-1,-1,2],[-1,0,1]]",
    difficulty: "medium",
    python: `def three_sum(nums):
    nums.sort()
    result = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        left, right = i + 1, len(nums) - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total < 0:
                left += 1
            elif total > 0:
                right -= 1
            else:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                left += 1
                right -= 1
    return result

# Example usage
print(three_sum([-1,0,1,2,-1,-4]))  # Output: [[-1,-1,2],[-1,0,1]]`,
    javascript: `function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            const total = nums[i] + nums[left] + nums[right];
            if (total < 0) {
                left++;
            } else if (total > 0) {
                right--;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
        }
    }
    return result;
}

// Example usage
console.log(threeSum([-1,0,1,2,-1,-4]));  // Output: [[-1,-1,2],[-1,0,1]]`
  },
  {
    id: 15,
    title: "Letter Combinations of a Phone Number",
    description: "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.",
    examples: "Input: digits = '23'\nOutput: ['ad','ae','af','bd','be','bf','cd','ce','cf']",
    difficulty: "medium",
    python: `def letter_combinations(digits):
    if not digits:
        return []
    phone_map = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    }
    def backtrack(index, path):
        if index == len(digits):
            combinations.append(''.join(path))
            return
        possible_letters = phone_map[digits[index]]
        for letter in possible_letters:
            path.append(letter)
            backtrack(index + 1, path)
            path.pop()
    
    combinations = []
    backtrack(0, [])
    return combinations

# Example usage
print(letter_combinations('23'))  # Output: ['ad','ae','af','bd','be','bf','cd','ce','cf']`,
    javascript: `function letterCombinations(digits) {
    if (!digits) return [];
    const phoneMap = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };
    const combinations = [];
    function backtrack(index, path) {
        if (index === digits.length) {
            combinations.push(path.join(''));
            return;
        }
        const possibleLetters = phoneMap[digits[index]];
        for (let letter of possibleLetters) {
            path.push(letter);
            backtrack(index + 1, path);
            path.pop();
        }
    }
    backtrack(0, []);
    return combinations;
}

// Example usage
console.log(letterCombinations('23'));  // Output: ['ad','ae','af','bd','be','bf','cd','ce','cf']`
  },
  {
    id: 16,
    title: "Generate Parentheses",
    description: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    examples: "Input: n = 3\nOutput: ['((()))','(()())','(())()','()(())','()()()']",
    difficulty: "medium",
    python: `def generate_parenthesis(n):
    def backtrack(s, left, right):
        if len(s) == 2 * n:
            result.append(s)
            return
        if left < n:
            backtrack(s + '(', left + 1, right)
        if right < left:
            backtrack(s + ')', left, right + 1)
    
    result = []
    backtrack('', 0, 0)
    return result

# Example usage
print(generate_parenthesis(3))  # Output: ['((()))','(()())','(())()','()(())','()()()']`,
    javascript: `function generateParenthesis(n) {
    const result = [];
    function backtrack(s, left, right) {
        if (s.length === 2 * n) {
            result.push(s);
            return;
        }
        if (left < n) {
            backtrack(s + '(', left + 1, right);
        }
        if (right < left) {
            backtrack(s + ')', left, right + 1);
        }
    }
    backtrack('', 0, 0);
    return result;
}

// Example usage
console.log(generateParenthesis(3));  // Output: ['((()))','(()())','(())()','()(())','()()()']`
  },
  {
    id: 17,
    title: "Search in Rotated Sorted Array",
    description: "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
    examples: "Input: nums = [4,5,6,7,0,1,2], target = 0\nOutput: 4",
    difficulty: "medium",
    python: `def search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1

# Example usage
print(search([4,5,6,7,0,1,2], 0))  # Output: 4`,
    javascript: `function search(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}

// Example usage
console.log(search([4,5,6,7,0,1,2], 0));  // Output: 4`
  },
  {
    id: 18,
    title: "Combination Sum",
    description: "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.",
    examples: "Input: candidates = [2,3,6,7], target = 7\nOutput: [[2,2,3],[7]]",
    difficulty: "medium",
    python: `def combination_sum(candidates, target):
    def backtrack(start, target, path):
        if target == 0:
            result.append(path[:])
            return
        for i in range(start, len(candidates)):
            if candidates[i] > target:
                continue
            path.append(candidates[i])
            backtrack(i, target - candidates[i], path)
            path.pop()
    
    result = []
    candidates.sort()
    backtrack(0, target, [])
    return result

# Example usage
print(combination_sum([2,3,6,7], 7))  # Output: [[2,2,3],[7]]`,
    javascript: `function combinationSum(candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b);
    function backtrack(start, target, path) {
        if (target === 0) {
            result.push([...path]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > target) continue;
            path.push(candidates[i]);
            backtrack(i, target - candidates[i], path);
            path.pop();
        }
    }
    backtrack(0, target, []);
    return result;
}

// Example usage
console.log(combinationSum([2,3,6,7], 7));  // Output: [[2,2,3],[7]]`
  },
  {
    id: 19,
    title: "Permutations",
    description: "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
    examples: "Input: nums = [1,2,3]\nOutput: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
    difficulty: "medium",
    python: `def permute(nums):
    def backtrack(path, used):
        if len(path) == len(nums):
            result.append(path[:])
            return
        for i in range(len(nums)):
            if used[i]:
                continue
            used[i] = True
            path.append(nums[i])
            backtrack(path, used)
            path.pop()
            used[i] = False
    
    result = []
    used = [False] * len(nums)
    backtrack([], used)
    return result

# Example usage
print(permute([1,2,3]))  # Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]`,
    javascript: `function permute(nums) {
    const result = [];
    const used = new Array(nums.length).fill(false);
    function backtrack(path) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            path.push(nums[i]);
            backtrack(path);
            path.pop();
            used[i] = false;
        }
    }
    backtrack([]);
    return result;
}

// Example usage
console.log(permute([1,2,3]));  // Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]`
  },
  {
    id: 20,
    title: "Jump Game",
    description: "Given an array of non-negative integers nums, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Determine if you are able to reach the last index.",
    examples: "Input: nums = [2,3,1,1,4]\nOutput: true\nExplanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.",
    difficulty: "medium",
    python: `def can_jump(nums):
    farthest = 0
    for i in range(len(nums)):
        if i > farthest:
            return False
        farthest = max(farthest, i + nums[i])
        if farthest >= len(nums) - 1:
            return True
    return True

# Example usage
print(can_jump([2,3,1,1,4]))  # Output: True`,
    javascript: `function canJump(nums) {
    let farthest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > farthest) return false;
        farthest = Math.max(farthest, i + nums[i]);
        if (farthest >= nums.length - 1) return true;
    }
    return true;
}

// Example usage
console.log(canJump([2,3,1,1,4]));  // Output: true`
  },
  // Hard Problems
  {
    id: 21,
    title: "Median of Two Sorted Arrays",
    description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    examples: "Input: nums1 = [1,3], nums2 = [2]\nOutput: 2.00000\nExplanation: merged array = [1,2,3] and median is 2.",
    difficulty: "hard",
    python: `def find_median_sorted_arrays(nums1, nums2):
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    m, n = len(nums1), len(nums2)
    total = m + n
    half = (total + 1) // 2
    left, right = 0, m
    while left <= right:
        i = (left + right) // 2
        j = half - i
        nums1_left = nums1[i-1] if i > 0 else float('-inf')
        nums1_right = nums1[i] if i < m else float('inf')
        nums2_left = nums2[j-1] if j > 0 else float('-inf')
        nums2_right = nums2[j] if j < n else float('inf')
        if nums1_left <= nums2_right and nums2_left <= nums1_right:
            if total % 2 == 1:
                return max(nums1_left, nums2_left)
            return (max(nums1_left, nums2_left) + min(nums1_right, nums2_right)) / 2
        elif nums1_left > nums2_right:
            right = i - 1
        else:
            left = i + 1
    return 0

# Example usage
print(find_median_sorted_arrays([1,3], [2]))  # Output: 2.0`,
    javascript: `function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
    const m = nums1.length, n = nums2.length;
    const total = m + n;
    const half = Math.floor((total + 1) / 2);
    let left = 0, right = m;
    while (left <= right) {
        const i = Math.floor((left + right) / 2);
        const j = half - i;
        const nums1Left = i > 0 ? nums1[i - 1] : -Infinity;
        const nums1Right = i < m ? nums1[i] : Infinity;
        const nums2Left = j > 0 ? nums2[j - 1] : -Infinity;
        const nums2Right = j < n ? nums2[j] : Infinity;
        if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
            if (total % 2 === 1) return Math.max(nums1Left, nums2Left);
            return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2;
        } else if (nums1Left > nums2Right) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }
    return 0;
}

// Example usage
console.log(findMedianSortedArrays([1,3], [2]));  // Output: 2`
  },
  {
    id: 22,
    title: "Regular Expression Matching",
    description: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where '.' matches any single character and '*' matches zero or more of the preceding element.",
    examples: "Input: s = 'aa', p = 'a*'\nOutput: true\nExplanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes 'aa'.",
    difficulty: "hard",
    python: `def is_match(s, p):
    m, n = len(s), len(p)
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True
    for j in range(1, n + 1):
        if p[j - 1] == '*':
            dp[0][j] = dp[0][j - 2]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if p[j - 1] == '.' or p[j - 1] == s[i - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            elif p[j - 1] == '*':
                dp[i][j] = dp[i][j - 2]
                if p[j - 2] == '.' or p[j - 2] == s[i - 1]:
                    dp[i][j] = dp[i][j] or dp[i - 1][j]
    return dp[m][n]

# Example usage
print(is_match('aa', 'a*'))  # Output: True`,
    javascript: `function isMatch(s, p) {
    const m = s.length, n = p.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
    dp[0][0] = true;
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2];
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }
    return dp[m][n];
}

// Example usage
console.log(isMatch('aa', 'a*'));  // Output: true`
  },
  {
    id: 23,
    title: "Merge k Sorted Lists",
    description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    examples: "Input: lists = [[1,4,5],[1,3,4],[2,6]]\nOutput: [1,1,2,3,4,4,5,6]",
    difficulty: "hard",
    python: `import heapq

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def merge_k_lists(lists):
    if not lists:
        return None
    heap = []
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(heap, (lst.val, i, lst))
    dummy = ListNode()
    current = dummy
    while heap:
        val, idx, node = heapq.heappop(heap)
        current.next = node
        current = current.next
        if node.next:
            heapq.heappush(heap, (node.next.val, idx, node.next))
    return dummy.next

# Example usage (assuming lists are created)
# Output: [1,1,2,3,4,4,5,6]`,
    javascript: `function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function mergeKLists(lists) {
    if (!lists || lists.length === 0) return null;
    const heap = [];
    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            heap.push([lists[i].val, i, lists[i]]);
        }
    }
    heap.sort((a, b) => a[0] - b[0]);
    const dummy = new ListNode();
    let current = dummy;
    while (heap.length > 0) {
        const [val, idx, node] = heap.shift();
        current.next = node;
        current = current.next;
        if (node.next) {
            heap.push([node.next.val, idx, node.next]);
            heap.sort((a, b) => a[0] - b[0]);
        }
    }
    return dummy.next;
}

// Example usage (assuming lists are created)
// Output: [1,1,2,3,4,4,5,6]`
  },
  {
    id: 24,
    title: "Trapping Rain Water",
    description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    examples: "Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6",
    difficulty: "hard",
    python: `def trap(height):
    if not height:
        return 0
    left, right = 0, len(height) - 1
    left_max, right_max = height[left], height[right]
    water = 0
    while left < right:
        if left_max < right_max:
            left += 1
            left_max = max(left_max, height[left])
            water += left_max - height[left]
        else:
            right -= 1
            right_max = max(right_max, height[right])
            water += right_max - height[right]
    return water

# Example usage
print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # Output: 6`,
    javascript: `function trap(height) {
    if (!height || height.length === 0) return 0;
    let left = 0, right = height.length - 1;
    let leftMax = height[left], rightMax = height[right];
    let water = 0;
    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
        }
    }
    return water;
}

// Example usage
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));  // Output: 6`
  },
  {
    id: 25,
    title: "Word Ladder",
    description: "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that: Every adjacent pair of words differs by a single letter. Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList. sk == endWord. Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.",
    examples: "Input: beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log','cog']\nOutput: 5\nExplanation: One shortest transformation sequence is 'hit' -> 'hot' -> 'dot' -> 'dog' -> 'cog', which is 5 words long.",
    difficulty: "hard",
    python: `from collections import deque

def ladder_length(begin_word, end_word, word_list):
    word_set = set(word_list)
    if end_word not in word_set:
        return 0
    queue = deque([(begin_word, 1)])
    visited = set([begin_word])
    while queue:
        word, length = queue.popleft()
        if word == end_word:
            return length
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                new_word = word[:i] + c + word[i+1:]
                if new_word in word_set and new_word not in visited:
                    visited.add(new_word)
                    queue.append((new_word, length + 1))
    return 0

# Example usage
print(ladder_length('hit', 'cog', ['hot','dot','dog','lot','log','cog']))  # Output: 5`,
    javascript: `function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    const queue = [[beginWord, 1]];
    const visited = new Set([beginWord]);
    while (queue.length > 0) {
        const [word, length] = queue.shift();
        if (word === endWord) return length;
        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) {
                const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    visited.add(newWord);
                    queue.push([newWord, length + 1]);
                }
            }
        }
    }
    return 0;
}

// Example usage
console.log(ladderLength('hit', 'cog', ['hot','dot','dog','lot','log','cog']));  // Output: 5`
  },
  {
    id: 26,
    title: "N-Queens",
    description: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.",
    examples: "Input: n = 4\nOutput: [['.Q..','...Q','Q...','..Q.'],['..Q.','Q...','...Q','.Q..']]",
    difficulty: "hard",
    python: `def solve_n_queens(n):
    def backtrack(row, cols, diagonals1, diagonals2):
        if row == n:
            board = []
            for i in range(n):
                row_str = ''.join('Q' if j == queens[i] else '.' for j in range(n))
                board.append(row_str)
            result.append(board)
            return
        for col in range(n):
            if col in cols or (row - col) in diagonals1 or (row + col) in diagonals2:
                continue
            queens[row] = col
            cols.add(col)
            diagonals1.add(row - col)
            diagonals2.add(row + col)
            backtrack(row + 1, cols, diagonals1, diagonals2)
            cols.remove(col)
            diagonals1.remove(row - col)
            diagonals2.remove(row + col)
    
    result = []
    queens = [-1] * n
    backtrack(0, set(), set(), set())
    return result

# Example usage
print(solve_n_queens(4))  # Output: [['.Q..','...Q','Q...','..Q.'],['..Q.','Q...','...Q','.Q..']]`,
    javascript: `function solveNQueens(n) {
    const result = [];
    const queens = new Array(n).fill(-1);
    function backtrack(row, cols, diagonals1, diagonals2) {
        if (row === n) {
            const board = [];
            for (let i = 0; i < n; i++) {
                let rowStr = '';
                for (let j = 0; j < n; j++) {
                    rowStr += j === queens[i] ? 'Q' : '.';
                }
                board.push(rowStr);
            }
            result.push(board);
            return;
        }
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diagonals1.has(row - col) || diagonals2.has(row + col)) continue;
            queens[row] = col;
            cols.add(col);
            diagonals1.add(row - col);
            diagonals2.add(row + col);
            backtrack(row + 1, cols, diagonals1, diagonals2);
            cols.delete(col);
            diagonals1.delete(row - col);
            diagonals2.delete(row + col);
        }
    }
    backtrack(0, new Set(), new Set(), new Set());
    return result;
}

// Example usage
console.log(solveNQueens(4));  // Output: [['.Q..','...Q','Q...','..Q.'],['..Q.','Q...','...Q','.Q..']]`
  },
  {
    id: 27,
    title: "Sudoku Solver",
    description: "Write a program to solve a Sudoku puzzle by filling the empty cells. A sudoku solution must satisfy all of the following rules: Each of the digits 1-9 must occur exactly once in each row, each column and each of the 9 3x3 sub-boxes of the grid.",
    examples: "Input: board = [['5','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','.','4','1','9','.','.','5'],['.','.','.','.','8','.','.','7','9']]\nOutput: [['5','3','4','6','7','8','9','1','2'],['6','7','2','1','9','5','3','4','8'],['1','9','8','3','4','2','5','6','7'],['8','5','9','7','6','1','4','2','3'],['4','2','6','8','5','3','7','9','1'],['7','1','3','9','2','4','8','5','6'],['9','6','1','5','3','7','2','8','4'],['2','8','7','4','1','9','6','3','5'],['3','4','5','2','8','6','1','7','9']]",
    difficulty: "hard",
    python: `def solve_sudoku(board):
    def is_valid(row, col, num):
        for i in range(9):
            if board[i][col] == num or board[row][i] == num:
                return False
        box_row, box_col = 3 * (row // 3), 3 * (col // 3)
        for i in range(3):
            for j in range(3):
                if board[box_row + i][box_col + j] == num:
                    return False
        return True
    
    def backtrack():
        for row in range(9):
            for col in range(9):
                if board[row][col] == '.':
                    for num in '123456789':
                        if is_valid(row, col, num):
                            board[row][col] = num
                            if backtrack():
                                return True
                            board[row][col] = '.'
                    return False
        return True
    
    backtrack()

# Example usage (board is modified in place)`,
    javascript: `function solveSudoku(board) {
    function isValid(row, col, num) {
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === num || board[row][i] === num) return false;
        }
        const boxRow = 3 * Math.floor(row / 3), boxCol = 3 * Math.floor(col / 3);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[boxRow + i][boxCol + j] === num) return false;
            }
        }
        return true;
    }
    
    function backtrack() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    for (let num = 1; num <= 9; num++) {
                        const numStr = num.toString();
                        if (isValid(row, col, numStr)) {
                            board[row][col] = numStr;
                            if (backtrack()) return true;
                            board[row][col] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    
    backtrack();
}

// Example usage (board is modified in place)`
  },
  {
    id: 28,
    title: "Maximum Rectangle",
    description: "Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.",
    examples: "Input: matrix = [['1','0','1','0','0'],['1','0','1','1','1'],['1','1','1','1','1'],['1','0','0','1','0']]\nOutput: 6",
    difficulty: "hard",
    python: `def maximal_rectangle(matrix):
    if not matrix or not matrix[0]:
        return 0
    rows, cols = len(matrix), len(matrix[0])
    heights = [0] * cols
    max_area = 0
    for row in matrix:
        for j in range(cols):
            heights[j] = heights[j] + 1 if row[j] == '1' else 0
        stack = []
        for j in range(cols + 1):
            while stack and (j == cols or heights[stack[-1]] > heights[j]):
                h = heights[stack.pop()]
                w = j - stack[-1] - 1 if stack else j
                max_area = max(max_area, h * w)
            stack.append(j)
    return max_area

# Example usage
print(maximal_rectangle([['1','0','1','0','0'],['1','0','1','1','1'],['1','1','1','1','1'],['1','0','0','1','0']]))  # Output: 6`,
    javascript: `function maximalRectangle(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;
    const rows = matrix.length, cols = matrix[0].length;
    const heights = new Array(cols).fill(0);
    let maxArea = 0;
    for (let row of matrix) {
        for (let j = 0; j < cols; j++) {
            heights[j] = row[j] === '1' ? heights[j] + 1 : 0;
        }
        const stack = [];
        for (let j = 0; j <= cols; j++) {
            while (stack.length > 0 && (j === cols || heights[stack[stack.length - 1]] > heights[j])) {
                const h = heights[stack.pop()];
                const w = stack.length === 0 ? j : j - stack[stack.length - 1] - 1;
                maxArea = Math.max(maxArea, h * w);
            }
            stack.push(j);
        }
    }
    return maxArea;
}

// Example usage
console.log(maximalRectangle([['1','0','1','0','0'],['1','0','1','1','1'],['1','1','1','1','1'],['1','0','0','1','0']]));  // Output: 6`
  },
  {
    id: 29,
    title: "Wildcard Matching",
    description: "Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where '?' matches any single character and '*' matches any sequence of characters (including the empty sequence).",
    examples: "Input: s = 'aa', p = 'a*'\nOutput: true\nExplanation: '*' matches any sequence.",
    difficulty: "hard",
    python: `def is_match(s, p):
    m, n = len(s), len(p)
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True
    for j in range(1, n + 1):
        if p[j - 1] == '*':
            dp[0][j] = dp[0][j - 1]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if p[j - 1] == '?' or p[j - 1] == s[i - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            elif p[j - 1] == '*':
                dp[i][j] = dp[i][j - 1] or dp[i - 1][j]
    return dp[m][n]

# Example usage
print(is_match('aa', 'a*'))  # Output: True`,
    javascript: `function isMatch(s, p) {
    const m = s.length, n = p.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
    dp[0][0] = true;
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            }
        }
    }
    return dp[m][n];
}

// Example usage
console.log(isMatch('aa', 'a*'));  // Output: true`
  },
  {
    id: 30,
    title: "Sliding Window Maximum",
    description: "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.",
    examples: "Input: nums = [1,3,-1,-3,5,3,6,7], k = 3\nOutput: [3,3,5,5,6,7]",
    difficulty: "hard",
    python: `from collections import deque

def max_sliding_window(nums, k):
    if not nums:
        return []
    result = []
    dq = deque()
    for i in range(len(nums)):
        while dq and nums[dq[-1]] <= nums[i]:
            dq.pop()
        dq.append(i)
        if dq[0] == i - k:
            dq.popleft()
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result

# Example usage
print(max_sliding_window([1,3,-1,-3,5,3,6,7], 3))  # Output: [3,3,5,5,6,7]`,
    javascript: `function maxSlidingWindow(nums, k) {
    if (!nums || nums.length === 0) return [];
    const result = [];
    const dq = [];
    for (let i = 0; i < nums.length; i++) {
        while (dq.length > 0 && nums[dq[dq.length - 1]] <= nums[i]) {
            dq.pop();
        }
        dq.push(i);
        if (dq[0] === i - k) {
            dq.shift();
        }
        if (i >= k - 1) {
            result.push(nums[dq[0]]);
        }
    }
    return result;
}

// Example usage
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));  // Output: [3,3,5,5,6,7]`
  },
  // Additional Easy Problems
  {
    id: 31,
    title: "Remove Duplicates from Sorted Array",
    description: "Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.",
    examples: "Input: nums = [1,1,2]\nOutput: 2, nums = [1,2,_]",
    difficulty: "easy",
    python: `def remove_duplicates(nums):
    if not nums:
        return 0
    i = 0
    for j in range(1, len(nums)):
        if nums[j] != nums[i]:
            i += 1
            nums[i] = nums[j]
    return i + 1

# Example usage
nums = [1,1,2]
print(remove_duplicates(nums))  # Output: 2`,
    javascript: `function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

// Example usage
let nums = [1,1,2];
console.log(removeDuplicates(nums));  // Output: 2`
  },
  {
    id: 32,
    title: "Plus One",
    description: "Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.",
    examples: "Input: digits = [1,2,3]\nOutput: [1,2,4]",
    difficulty: "easy",
    python: `def plus_one(digits):
    for i in range(len(digits) - 1, -1, -1):
        if digits[i] < 9:
            digits[i] += 1
            return digits
        digits[i] = 0
    return [1] + digits

# Example usage
print(plus_one([1,2,3]))  # Output: [1,2,4]`,
    javascript: `function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    return [1, ...digits];
}

// Example usage
console.log(plusOne([1,2,3]));  // Output: [1,2,4]`
  },
  {
    id: 33,
    title: "Move Zeroes",
    description: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
    examples: "Input: nums = [0,1,0,3,12]\nOutput: [1,3,12,0,0]",
    difficulty: "easy",
    python: `def move_zeroes(nums):
    non_zero_index = 0
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[non_zero_index], nums[i] = nums[i], nums[non_zero_index]
            non_zero_index += 1

# Example usage
nums = [0,1,0,3,12]
move_zeroes(nums)
print(nums)  # Output: [1,3,12,0,0]`,
    javascript: `function moveZeroes(nums) {
    let nonZeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
            nonZeroIndex++;
        }
    }
}

// Example usage
let nums = [0,1,0,3,12];
moveZeroes(nums);
console.log(nums);  // Output: [1,3,12,0,0]`
  },
  {
    id: 34,
    title: "Contains Duplicate",
    description: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    examples: "Input: nums = [1,2,3,1]\nOutput: true",
    difficulty: "easy",
    python: `def contains_duplicate(nums):
    return len(nums) != len(set(nums))

# Example usage
print(contains_duplicate([1,2,3,1]))  # Output: True`,
    javascript: `function containsDuplicate(nums) {
    const seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}

// Example usage
console.log(containsDuplicate([1,2,3,1]));  // Output: true`
  },
  {
    id: 35,
    title: "Roman to Integer",
    description: "Given a roman numeral, convert it to an integer.",
    examples: "Input: s = 'III'\nOutput: 3",
    difficulty: "easy",
    python: `def roman_to_int(s):
    roman = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
    total = 0
    prev = 0
    for char in reversed(s):
        val = roman[char]
        if val < prev:
            total -= val
        else:
            total += val
        prev = val
    return total

# Example usage
print(roman_to_int('III'))  # Output: 3`,
    javascript: `function romanToInt(s) {
    const roman = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
    let total = 0;
    let prev = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        const val = roman[s[i]];
        if (val < prev) {
            total -= val;
        } else {
            total += val;
        }
        prev = val;
    }
    return total;
}

// Example usage
console.log(romanToInt('III'));  // Output: 3`
  },
  {
    id: 36,
    title: "Fizz Buzz",
    description: "Write a program that outputs the string representation of numbers from 1 to n. But for multiples of three it should output 'Fizz' instead of the number and for the multiples of five output 'Buzz'. For numbers which are multiples of both three and five output 'FizzBuzz'.",
    examples: "Input: n = 3\nOutput: ['1','2','Fizz']",
    difficulty: "easy",
    python: `def fizz_buzz(n):
    result = []
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            result.append('FizzBuzz')
        elif i % 3 == 0:
            result.append('Fizz')
        elif i % 5 == 0:
            result.append('Buzz')
        else:
            result.append(str(i))
    return result

# Example usage
print(fizz_buzz(3))  # Output: ['1','2','Fizz']`,
    javascript: `function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i.toString());
        }
    }
    return result;
}

// Example usage
console.log(fizzBuzz(3));  // Output: ['1','2','Fizz']`
  },
  {
    id: 37,
    title: "Power of Two",
    description: "Given an integer n, return true if it is a power of two. Otherwise, return false.",
    examples: "Input: n = 1\nOutput: true",
    difficulty: "easy",
    python: `def is_power_of_two(n):
    if n <= 0:
        return False
    return (n & (n - 1)) == 0

# Example usage
print(is_power_of_two(1))  # Output: True`,
    javascript: `function isPowerOfTwo(n) {
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
}

// Example usage
console.log(isPowerOfTwo(1));  // Output: true`
  },
  {
    id: 38,
    title: "Sqrt(x)",
    description: "Given a non-negative integer x, compute and return the square root of x.",
    examples: "Input: x = 4\nOutput: 2",
    difficulty: "easy",
    python: `def my_sqrt(x):
    if x == 0:
        return 0
    left, right = 1, x
    while left <= right:
        mid = (left + right) // 2
        if mid * mid == x:
            return mid
        elif mid * mid < x:
            left = mid + 1
        else:
            right = mid - 1
    return right

# Example usage
print(my_sqrt(4))  # Output: 2`,
    javascript: `function mySqrt(x) {
    if (x === 0) return 0;
    let left = 1, right = x;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mid * mid === x) return mid;
        else if (mid * mid < x) left = mid + 1;
        else right = mid - 1;
    }
    return right;
}

// Example usage
console.log(mySqrt(4));  // Output: 2`
  },
  {
    id: 39,
    title: "Missing Number",
    description: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
    examples: "Input: nums = [3,0,1]\nOutput: 2",
    difficulty: "easy",
    python: `def missing_number(nums):
    n = len(nums)
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(nums)
    return expected_sum - actual_sum

# Example usage
print(missing_number([3,0,1]))  # Output: 2`,
    javascript: `function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = n * (n + 1) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// Example usage
console.log(missingNumber([3,0,1]));  // Output: 2`
  },
  {
    id: 40,
    title: "First Unique Character in a String",
    description: "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
    examples: "Input: s = 'leetcode'\nOutput: 0",
    difficulty: "easy",
    python: `from collections import Counter

def first_uniq_char(s):
    count = Counter(s)
    for i, char in enumerate(s):
        if count[char] == 1:
            return i
    return -1

# Example usage
print(first_uniq_char('leetcode'))  # Output: 0`,
    javascript: `function firstUniqChar(s) {
    const count = {};
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) return i;
    }
    return -1;
}

// Example usage
console.log(firstUniqChar('leetcode'));  // Output: 0`
  },
  // Additional Medium Problems
  {
    id: 41,
    title: "Top K Frequent Elements",
    description: "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    examples: "Input: nums = [1,1,1,2,2,3], k = 2\nOutput: [1,2]",
    difficulty: "medium",
    python: `from collections import Counter
import heapq

def top_k_frequent(nums, k):
    count = Counter(nums)
    return heapq.nlargest(k, count.keys(), key=count.get)

# Example usage
print(top_k_frequent([1,1,1,2,2,3], 2))  # Output: [1,2]`,
    javascript: `function topKFrequent(nums, k) {
    const count = {};
    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }
    const freq = Object.keys(count).sort((a, b) => count[b] - count[a]);
    return freq.slice(0, k).map(Number);
}

// Example usage
console.log(topKFrequent([1,1,1,2,2,3], 2));  // Output: [1,2]`
  },
  {
    id: 42,
    title: "Group Anagrams",
    description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    examples: "Input: strs = ['eat','tea','tan','ate','nat','bat']\nOutput: [['bat'],['nat','tan'],['ate','eat','tea']]",
    difficulty: "medium",
    python: `from collections import defaultdict

def group_anagrams(strs):
    anagrams = defaultdict(list)
    for s in strs:
        key = ''.join(sorted(s))
        anagrams[key].append(s)
    return list(anagrams.values())

# Example usage
print(group_anagrams(['eat','tea','tan','ate','nat','bat']))  # Output: [['eat','tea','ate'],['tan','nat'],['bat']]`,
    javascript: `function groupAnagrams(strs) {
    const anagrams = {};
    for (let s of strs) {
        const key = s.split('').sort().join('');
        if (!anagrams[key]) anagrams[key] = [];
        anagrams[key].push(s);
    }
    return Object.values(anagrams);
}

// Example usage
console.log(groupAnagrams(['eat','tea','tan','ate','nat','bat']));  // Output: [['eat','tea','ate'],['tan','nat'],['bat']]`
  },
  {
    id: 43,
    title: "Product of Array Except Self",
    description: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
    examples: "Input: nums = [1,2,3,4]\nOutput: [24,12,8,6]",
    difficulty: "medium",
    python: `def product_except_self(nums):
    n = len(nums)
    left = [1] * n
    right = [1] * n
    for i in range(1, n):
        left[i] = left[i - 1] * nums[i - 1]
    for i in range(n - 2, -1, -1):
        right[i] = right[i + 1] * nums[i + 1]
    return [left[i] * right[i] for i in range(n)]

# Example usage
print(product_except_self([1,2,3,4]))  # Output: [24,12,8,6]`,
    javascript: `function productExceptSelf(nums) {
    const n = nums.length;
    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }
    return left.map((val, i) => val * right[i]);
}

// Example usage
console.log(productExceptSelf([1,2,3,4]));  // Output: [24,12,8,6]`
  },
  {
    id: 44,
    title: "Find Minimum in Rotated Sorted Array",
    description: "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2] if it was rotated 4 times. Given the sorted rotated array nums of unique elements, return the minimum element of this array.",
    examples: "Input: nums = [3,4,5,1,2]\nOutput: 1",
    difficulty: "medium",
    python: `def find_min(nums):
    left, right = 0, len(nums) - 1
    while left < right:
        mid = (left + right) // 2
        if nums[mid] > nums[right]:
            left = mid + 1
        else:
            right = mid
    return nums[left]

# Example usage
print(find_min([3,4,5,1,2]))  # Output: 1`,
    javascript: `function findMin(nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
}

// Example usage
console.log(findMin([3,4,5,1,2]));  // Output: 1`
  },
  {
    id: 45,
    title: "Subarray Sum Equals K",
    description: "Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.",
    examples: "Input: nums = [1,1,1], k = 2\nOutput: 2",
    difficulty: "medium",
    python: `def subarray_sum(nums, k):
    count = 0
    prefix_sum = 0
    sum_count = {0: 1}
    for num in nums:
        prefix_sum += num
        if prefix_sum - k in sum_count:
            count += sum_count[prefix_sum - k]
        sum_count[prefix_sum] = sum_count.get(prefix_sum, 0) + 1
    return count

# Example usage
print(subarray_sum([1,1,1], 2))  # Output: 2`,
    javascript: `function subarraySum(nums, k) {
    let count = 0;
    let prefixSum = 0;
    const sumCount = {0: 1};
    for (let num of nums) {
        prefixSum += num;
        if (sumCount[prefixSum - k]) {
            count += sumCount[prefixSum - k];
        }
        sumCount[prefixSum] = (sumCount[prefixSum] || 0) + 1;
    }
    return count;
}

// Example usage
console.log(subarraySum([1,1,1], 2));  // Output: 2`
  },
  {
    id: 46,
    title: "Binary Tree Level Order Traversal",
    description: "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    examples: "Input: root = [3,9,20,null,null,15,7]\nOutput: [[3],[9,20],[15,7]]",
    difficulty: "medium",
    python: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def level_order(root):
    if not root:
        return []
    result = []
    queue = deque([root])
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        result.append(level)
    return result

# Example usage (assuming tree is built)`,
    javascript: `function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function levelOrder(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    while (queue.length > 0) {
        const level = [];
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
}

// Example usage (assuming tree is built)`
  },
  {
    id: 47,
    title: "Validate Binary Search Tree",
    description: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
    examples: "Input: root = [2,1,3]\nOutput: true",
    difficulty: "medium",
    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def is_valid_bst(root):
    def helper(node, lower, upper):
        if not node:
            return True
        if not (lower < node.val < upper):
            return False
        return helper(node.left, lower, node.val) and helper(node.right, node.val, upper)
    return helper(root, float('-inf'), float('inf'))

# Example usage (assuming tree is built)`,
    javascript: `function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function isValidBST(root) {
    function helper(node, lower, upper) {
        if (!node) return true;
        if (!(lower < node.val && node.val < upper)) return false;
        return helper(node.left, lower, node.val) && helper(node.right, node.val, upper);
    }
    return helper(root, -Infinity, Infinity);
}

// Example usage (assuming tree is built)`
  },
  {
    id: 48,
    title: "Kth Smallest Element in a BST",
    description: "Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.",
    examples: "Input: root = [3,1,4,null,2], k = 1\nOutput: 1",
    difficulty: "medium",
    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def kth_smallest(root, k):
    stack = []
    while root or stack:
        while root:
            stack.append(root)
            root = root.left
        root = stack.pop()
        k -= 1
        if k == 0:
            return root.val
        root = root.right

# Example usage (assuming tree is built)`,
    javascript: `function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function kthSmallest(root, k) {
    const stack = [];
    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        k--;
        if (k === 0) return root.val;
        root = root.right;
    }
}

// Example usage (assuming tree is built)`
  },
  {
    id: 49,
    title: "Number of Islands",
    description: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
    examples: "Input: grid = [['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]\nOutput: 1",
    difficulty: "medium",
    python: `def num_islands(grid):
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    def dfs(i, j):
        if i < 0 or i >= rows or j < 0 or j >= cols or grid[i][j] == '0':
            return
        grid[i][j] = '0'
        dfs(i + 1, j)
        dfs(i - 1, j)
        dfs(i, j + 1)
        dfs(i, j - 1)
    count = 0
    for i in range(rows):
        for j in range(cols):
            if grid[i][j] == '1':
                count += 1
                dfs(i, j)
    return count

# Example usage
print(num_islands([['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]))  # Output: 1`,
    javascript: `function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;
    const rows = grid.length, cols = grid[0].length;
    function dfs(i, j) {
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === '0') return;
        grid[i][j] = '0';
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }
    let count = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }
    return count;
}

// Example usage
console.log(numIslands([['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]));  // Output: 1`
  },
  {
    id: 50,
    title: "Course Schedule",
    description: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return true if you can finish all courses. Otherwise, return false.",
    examples: "Input: numCourses = 2, prerequisites = [[1,0]]\nOutput: true",
    difficulty: "medium",
    python: `from collections import defaultdict, deque

def can_finish(num_courses, prerequisites):
    graph = defaultdict(list)
    indegree = [0] * num_courses
    for course, prereq in prerequisites:
        graph[prereq].append(course)
        indegree[course] += 1
    queue = deque([i for i in range(num_courses) if indegree[i] == 0])
    count = 0
    while queue:
        course = queue.popleft()
        count += 1
        for neighbor in graph[course]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)
    return count == num_courses

# Example usage
print(can_finish(2, [[1,0]]))  # Output: True`,
    javascript: `function canFinish(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    const indegree = new Array(numCourses).fill(0);
    for (let [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        indegree[course]++;
    }
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) queue.push(i);
    }
    let count = 0;
    while (queue.length > 0) {
        const course = queue.shift();
        count++;
        for (let neighbor of graph[course]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) queue.push(neighbor);
        }
    }
    return count === numCourses;
}

// Example usage
console.log(canFinish(2, [[1,0]]));  // Output: true`
  },
  // Additional Hard Problems
  {
    id: 51,
    title: "Longest Increasing Path in a Matrix",
    description: "Given an m x n integers matrix, return the length of the longest increasing path in matrix.",
    examples: "Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]\nOutput: 4",
    difficulty: "hard",
    python: `def longest_increasing_path(matrix):
    if not matrix or not matrix[0]:
        return 0
    rows, cols = len(matrix), len(matrix[0])
    dp = [[0] * cols for _ in range(rows)]
    def dfs(i, j):
        if dp[i][j]:
            return dp[i][j]
        val = matrix[i][j]
        dp[i][j] = 1 + max(
            dfs(i + 1, j) if i + 1 < rows and matrix[i + 1][j] > val else 0,
            dfs(i - 1, j) if i - 1 >= 0 and matrix[i - 1][j] > val else 0,
            dfs(i, j + 1) if j + 1 < cols and matrix[i][j + 1] > val else 0,
            dfs(i, j - 1) if j - 1 >= 0 and matrix[i][j - 1] > val else 0
        )
        return dp[i][j]
    return max(dfs(i, j) for i in range(rows) for j in range(cols))

# Example usage
print(longest_increasing_path([[9,9,4],[6,6,8],[2,1,1]]))  # Output: 4`,
    javascript: `function longestIncreasingPath(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;
    const rows = matrix.length, cols = matrix[0].length;
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
    function dfs(i, j) {
        if (dp[i][j]) return dp[i][j];
        const val = matrix[i][j];
        dp[i][j] = 1 + Math.max(
            i + 1 < rows && matrix[i + 1][j] > val ? dfs(i + 1, j) : 0,
            i - 1 >= 0 && matrix[i - 1][j] > val ? dfs(i - 1, j) : 0,
            j + 1 < cols && matrix[i][j + 1] > val ? dfs(i, j + 1) : 0,
            j - 1 >= 0 && matrix[i][j - 1] > val ? dfs(i, j - 1) : 0
        );
        return dp[i][j];
    }
    let maxPath = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            maxPath = Math.max(maxPath, dfs(i, j));
        }
    }
    return maxPath;
}

// Example usage
console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]));  // Output: 4`
  },
  {
    id: 52,
    title: "Alien Dictionary",
    description: "There is a new alien language that uses the English alphabet. However, the order among letters are unknown to you. You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.",
    examples: "Input: words = ['wrt','wrf','er','ett','rftt']\nOutput: 'wertf'",
    difficulty: "hard",
    python: `from collections import defaultdict, deque

def alien_order(words):
    graph = defaultdict(set)
    indegree = {c: 0 for word in words for c in word}
    for i in range(len(words) - 1):
        w1, w2 = words[i], words[i + 1]
        for j in range(min(len(w1), len(w2))):
            if w1[j] != w2[j]:
                if w2[j] not in graph[w1[j]]:
                    graph[w1[j]].add(w2[j])
                    indegree[w2[j]] += 1
                break
        else:
            if len(w1) > len(w2):
                return ''
    queue = deque([c for c in indegree if indegree[c] == 0])
    result = []
    while queue:
        c = queue.popleft()
        result.append(c)
        for neighbor in graph[c]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)
    return ''.join(result) if len(result) == len(indegree) else ''

# Example usage
print(alien_order(['wrt','wrf','er','ett','rftt']))  # Output: 'wertf'`,
    javascript: `function alienOrder(words) {
    const graph = {};
    const indegree = {};
    for (let word of words) {
        for (let c of word) {
            graph[c] = new Set();
            indegree[c] = 0;
        }
    }
    for (let i = 0; i < words.length - 1; i++) {
        const w1 = words[i], w2 = words[i + 1];
        const len = Math.min(w1.length, w2.length);
        for (let j = 0; j < len; j++) {
            if (w1[j] !== w2[j]) {
                if (!graph[w1[j]].has(w2[j])) {
                    graph[w1[j]].add(w2[j]);
                    indegree[w2[j]]++;
                }
                break;
            }
        }
        if (w1.length > w2.length && w1.startsWith(w2)) return '';
    }
    const queue = [];
    for (let c in indegree) {
        if (indegree[c] === 0) queue.push(c);
    }
    const result = [];
    while (queue.length > 0) {
        const c = queue.shift();
        result.push(c);
        for (let neighbor of graph[c]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) queue.push(neighbor);
        }
    }
    return result.length === Object.keys(indegree).length ? result.join('') : '';
}

// Example usage
console.log(alienOrder(['wrt','wrf','er','ett','rftt']));  // Output: 'wertf'`
  },
  {
    id: 53,
    title: "Serialize and Deserialize Binary Tree",
    description: "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment. Design an algorithm to serialize and deserialize a binary tree.",
    examples: "Input: root = [1,2,3,null,null,4,5]\nOutput: [1,2,3,null,null,4,5]",
    difficulty: "hard",
    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Codec:
    def serialize(self, root):
        def preorder(node):
            if not node:
                return ['null']
            return [str(node.val)] + preorder(node.left) + preorder(node.right)
        return ','.join(preorder(root))

    def deserialize(self, data):
        vals = data.split(',')
        i = 0
        def build():
            nonlocal i
            if vals[i] == 'null':
                i += 1
                return None
            node = TreeNode(int(vals[i]))
            i += 1
            node.left = build()
            node.right = build()
            return node
        return build()

# Example usage
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))
`,
    javascript: `function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

class Codec {
    serialize(root) {
        const result = [];
        function preorder(node) {
            if (!node) {
                result.push('null');
                return;
            }
            result.push(node.val.toString());
            preorder(node.left);
            preorder(node.right);
        }
        preorder(root);
        return result.join(',');
    }

    deserialize(data) {
        const vals = data.split(',');
        let i = 0;
        function build() {
            if (vals[i] === 'null') {
                i++;
                return null;
            }
            const node = new TreeNode(parseInt(vals[i]));
            i++;
            node.left = build();
            node.right = build();
            return node;
        }
        return build();
    }
}

// Example usage
// const ser = new Codec();
// const deser = new Codec();
// const ans = deser.deserialize(ser.serialize(root));
`
  }
];

window.allDSAProblems = allDSAProblems;
