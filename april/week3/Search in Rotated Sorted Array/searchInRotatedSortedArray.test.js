const test = require('ava');

const search = require('./searchInRotatedSortedArray');

test('searchInRotatedSortedArray first test case', t => {
  const nums = [4,5,6,7,0,1,2];
  const target = 0;

  const expected = 4;
  t.is(search(nums, target), expected);
});

test('searchInRotatedSortedArray second test case', t => {
  const nums = [4,5,6,7,0,1,2];
  const target = 3;

  const expected = -1;
  t.is(search(nums, target), expected);
});

test('searchInRotatedSortedArray third test case', t => {
  const nums = [4,5,6,0,1,2,3];
  const target = 6;

  const expected = 2;
  t.is(search(nums, target), expected);
});

test('searchInRotatedSortedArray forth test case BIG', t => {
  const nums = [];
  for (let i = 0; i < 10000; i++) {
    nums.push(i);
  }
  const pivot = 34;
  const newNums = [...nums.slice(pivot), ...nums.slice(0, pivot)]
  const target = 0;

  console.time('start');
  const result = search(newNums, target);
  console.log(console.timeEnd('start'));
  t.not(result, -1);
});
