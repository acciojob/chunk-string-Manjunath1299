function stringChop(str, size) {
  // your code here
	let newstr=[],str1='',c=1;
	if(!str)
		return [];
	else if{

		for(let i=0;i<str.length;i++){
			if(count<=size){
				str1+=str[i];
			}
			else if(count==size){
				newstr.push(str1);
				str1='';
				c=1;
			}
		}
	}
	return newstr
	
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
