const list = [999, 333, 2, 8982, 12, 45, 77, 99, 11];
for (let i = 0; i < list.length - 1; i++)
  for (let j = i + 1; j < list.length; j++)
    if (list[i] > list[j]) {
      let temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
console.log(list);