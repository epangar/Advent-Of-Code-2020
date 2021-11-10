function mySum(arr){
  for(let i = 0, len = arr.length; i < len; i++){
    for(let j = 1; j <len; j++){
      for(let k = 2; k < len; k++){
        let first = arr[i],
          second = arr[j],
          third = arr[k];

        if(first + second + third === 2020){
          return first * second * third;
        }
      }
    }
  }
}