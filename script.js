function stringChop(str, size) {
  // your code here
	
	let ans=[];
	if(str==null){
		return ans;
	}
	while(str.length>size){ 
		let temp=str.slice(0,size);
		ans.push(temp);
		str=str.slice(size,str.length);
	}
	if(str.length>0){
		ans.push(str);
	}
	return ans;
} 

// Do not change the code below

const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
