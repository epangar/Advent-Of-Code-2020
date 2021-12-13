function toboggan(arrInput){
  let position = [0,0];
  let countTress = 0;

  //Make each row extend horizontally
  let fullMap = arrInput.map(row => row.repeat(arrInput.length * arrInput.length))

  fullMap.forEach(row => {
    
    //Check current point
    let currentPoint = fullMap[position[0]][position[1]]

    //Check if it's a tree
    let isATree = ( currentPoint === '#');

    if(isATree){
      countTress++
    }
    
    position[1] += 3
    position[0] += 1
    
  });
  return countTress;
}

