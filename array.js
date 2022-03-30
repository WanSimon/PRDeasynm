var array = [10, 1, 3, 4, 20, 4, 25, 8];
// 升序 a-b < 0   a将排到b的前面，按照a的大小来排序的
// 比如被减数a是10，减数是20  10-20 < 0   被减数a(10)在减数b(20)前面
array.sort(function (a, b) {
  return a - b;
});
console.log(array); // [1,3,4,4,8,10,20,25];
