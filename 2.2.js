function detect(arr){
  let answer = arr.map(str =>{
    let obj = {}

    let keys = str.split(' ');
    let times = keys[0].split('-');
    obj['firstCondition'] = times[0];
    obj['secondCondition'] = times[1];
    obj['char'] = keys[1][0];
    obj['string'] = keys[2];
    return obj;
  }).filter(obj => {
    let firstPosition = obj['firstCondition']-1,
    secondPosition =  obj['secondCondition']-1
    str = obj['string'],
    char = obj['char']

    
    if((str[firstPosition] === char && str[secondPosition] !== char)
    || (str[firstPosition] !== char && str[secondPosition] === char)){
      return obj;
    }
  }).length

  return answer;
}