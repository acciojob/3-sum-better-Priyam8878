function threeSum(arr, target) {
// write your code
	for(let i=0;i<arr.length;i++){
		
		let ans= twoSum(i+1,arr.length-1,arr,target-arr[i])
		console.log(ans)
	}

  
}
function twoSum(i, j, arr, target) {
	let sum=0;
	let a= arr[i-1]
	while (i<j) {
		if(arr[i]+arr[j]>target){
			j--;
		}else if(arr[i]+arr[j]<target) {
			i++;
			
		}else{
			sum=arr[i]+arr[j]+a;
		}
	}
	return sum;
}

module.exports = threeSum;
