// JavaScript Document
const a=7;

//línea comentada 

/*parrafo comentado*/

var b;
let c;

var b=5;
var c=8;

if(a>b){
	console.log("El mayor es A");
}
else if(a<b){
	console.log("El mayor es B");
}
else (a<b){
	console.log("El mayor es B");
}

switch(c){
	   case 1:
	case 4: console.log("Es 1"); break;
	case 2: console.log("Es 2"); break;
	case 3: console.log("Es 3"); break;
	//case : break;
	default : console.log("Es 0"); break;
}

for(var i=0;i<10;i++){
	console.log(i)
}

let i=1;
do{
	console.log(i)
	i++;
}
while(i<=10);

let i=1;
while(i<=10){
	i++;
}

const arr=[2,4,5,7,1];

for(let i in arr){
	console.log(i);
}

for(let i of arr){
	console.log(i);
}

if( (a<b) && (c>b) || (c === d) ){
	
}

//condicion ? valor : valorn;

function square(x){
	return x * x;
}
square(4);

const square=function(x){
	returnx * x;
}

/*console.log("valor =>"+b);
console.log("valor =>"+d);
var d;

console.log("valor =>"+c);
console.log("valor =>"+e);
let e;*/

