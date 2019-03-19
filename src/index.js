module.exports = function getZerosCount(number, base) {
  function simpleMultiplier(base) {
		let i = 2;
		let arr = [];
		while (i <= base) {
			if (base % i === 0){
				arr.push(i);
				base = base / i;
			}
			else{      
				i++;          
			}                
		}
	  return arr;
  }
  
  function noRepeat(arr){
    let result = [];
    arr.forEach(function(el, i) {
      if (result.indexOf(el) === -1) {
        result.push(el);
      }
    })
  return result;
  }


  let s = simpleMultiplier(base);
  let getCount = noRepeat(s);
	let arrSum = [];
	for(let count = 0; count < getCount.length; count++){
		let sum = 0;
		let result = 0;
		let i = 1;
		while(i < (number / getCount[count])){
			result = Math.floor(number / Math.pow(getCount[count], i));
			sum += result;
			i++;
		}
		arrSum.push(sum);
	}
	return Math.min.apply(null, arrSum);
}
