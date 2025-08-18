let nums = [1, 2, 3, 4, 5];

function sum(numsList) {
  let total = 0;
  for (let i = 0; i < numsList.length; i++) {
    total += numsList[i];
  }
  return total;
}

let result = sum(nums) / nums.length;
console.log(result);