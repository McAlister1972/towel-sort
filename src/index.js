
// You should implement your task here.

module.exports =  function towelSort(matrix){ 
  if (Array.isArray(matrix) === false)  return []; 
   let z = matrix.reduce(function(result, current, index) { 
 if (index % 2 !== 0 || 0) {
       return current.reverse();
    } 
 return result.concat(current); 
}, []);
return matrix.flat();
}