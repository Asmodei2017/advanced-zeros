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
  
	function getMaxOfArray(numArray) {
		return Math.max.apply(null, numArray);
	}


	let getCount = getMaxOfArray(simpleMultiplier(base));
	let sum = 0;
	let result = 0;
	let i = 1;
	while(i < (number / getCount)){
		result = Math.floor(number / Math.pow(getCount, i));
		sum += result;
		i++;
	}
	return sum;
}
