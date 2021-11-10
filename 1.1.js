function mySum(arr){
  for(let i = 0, len = arr.length; i < len; i++){
    for(let j = 1; j <len; j++){
      let first = arr[i],
          second = arr[j];
      if(first + second === 2020){
        return first * second;
      }
    }
  }
}