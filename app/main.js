import {square, diag} from './lib';

console.log(square(4));

let app = (name) => {
    console.log(`hello from ${name}`);
}
app('Nirmal');

var func = (...params) =>{
	var result = 1;
	for(var i=0; i < params.length;i++){
      result *= params[i] 
	} 
	return result;
}
console.log(func(1,2,3));