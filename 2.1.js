function detect(arr){
  //map into an array of objects
  let answer = arr.map(str =>{
    let obj = {}

    let keys = str.split(' ');
    let times = keys[0].split('-');
    obj['min'] = times[0];
    obj['max'] = times[1];
    obj['char'] = keys[1][0];
    obj['string'] = keys[2];
    return obj;
  }).map(obj => {
    obj['timesForChar'] = 0;

    obj['string'].split('').forEach(c =>{
      let charToFind = obj['char'];
      
      if(c === charToFind){
        obj['timesForChar']++
      }
    })
    return obj;
  }).filter(obj => (obj['timesForChar'] >= obj['min']) && (obj['timesForChar'] <= obj['max']))
  .length

  return answer;
}