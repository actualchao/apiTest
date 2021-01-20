function InsertionSort (arr, from = 0, to = arr.length) {
  // 从数组第二项遍历
  for (var i = from + 1; i < to; i++) {
    // 取出新元素
    var element = arr[i];
    // 从新元素位置向前查找
    for (var j = i - 1; j >= from; j--) {
      // 缓存查找的项
      var tmp = arr[j];
      // 计算是否是需要插入的位置
      // 此处可修改插入逻辑，正序倒序
      var order = tmp - element;
      if (order > 0) {
        // 不是插入位置，查找项后移
        arr[j + 1] = tmp;
      } else {
        // 是插入位置，退出循环，插入元素
        break;
      }
    }
    // 退出循环插入元素
    arr[j + 1] = element;
  }
};


console.log(InsertionSort([1, 6, 4, 2, 4, 6, 8, 345, 4]));