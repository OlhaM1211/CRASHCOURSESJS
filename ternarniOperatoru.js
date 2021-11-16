// --- For arrays of different lengths: ---

function sumNumsInArrays(array1, array2) {
    let sum1 = 0;
    let sum2 = 0;
  
    for (
      let i = 0;
      i < (array1.length >= array2.length ? array1.length : array2.length);
      i++
    ) {
      if (i < array1.length) {
        sum1 += array1[i];
      }
      if (i < array2.length) {
        sum2 += array2[i];
      }
    }
  
    let sum = sum1 + sum2;
    return sum;
  }
