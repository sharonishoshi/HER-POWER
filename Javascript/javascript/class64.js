// let i= 0;
// do{
	// document.write(i+"<br>");
	// i++;
// }while(i<10)
	 
 // let i= 2;
 // do{
	 // document.write(i+"<br>");
// i=i+2;	 
 // }while(i<10)
 // 'Hi!'
 // // let stinfo=["Arpita",21,"MAGURA"];
 // // for(let i=0; i<3; i++){
 // // document.write(stinfo[i]+"<br>");
 // // }
 // // let stinfo={name:"Arpita",age:"21",address:"Magura"}
 // // document.write(stinfo.name+"<br>"+stinfo.age+"<br>"+stinfo.address);

 // let abc=[12,65];
 // document.write(abc[0]*abc[1]);
// let abc=[0,2,3,4,6,8]
// for(let i=0;i<=6;i++){
	// if(abc[i]==0){
	// document.write(i+"is null"+"<br>");
	// }
	// else if(abc[i]%2==1){
		// document.write(i+"is odd"+"<br>");
	// }
	// else{
		// document.write(i+"is even Number"+"<br>");
	// }
// }
 // let j=1;
 // while(j<=10){
	 // document.write(j+"<br>");
// j++;}
// function name(){
	// return "arpita";
// }
// document.write( name());
// function farenheit(celcius){
	// return celcius*(9/5)+32;
// }
// document.write(farenheit(20)+"<br>");

// function circel(r){
	// return r**2*3.1416;
// } 
// document.write(circel(6)+"<br>")
 
 // function abc(a,b){
	 // return (a*b)/2;
// }
// document.write(abc(6,8)+"<br>")

// function salary(d){
	// if(d<=2000){
		// return"without Taxes";
	// }
	// else if(d=>2000&&d<=3000){
		// return (d*8)/100;
	// }
	// else if(d=>3001&& d<=4500){
		// return (d*18)/100;
	// }
	// else if(d>4500){
		// return (d*28)/100;
	// }
// }
// document.write(salary(3000)+"<br>");

// function day(y,m,da){
	// return (365*y)+(30*m)+da;
// }
// document.write(day(2,3,15))

// function sec(h,mi,s){
	// return (3600*h)+(60*mi)+s;
// }
// document.write(sec(3,10,12)+"<br>")

// function firstimage(){
// document.getElementById('img').src='backgrounpic.jpg';
// }
// function secondimage(){
	// document.getElementById('img').src='toggi.jpg';
// }

// let a=["arpita",5,"six"];
// for(let i=0;i<3;i++){
	// document.write(a[i]+"<br>");
// }
// let b={name:"Arpita",Roll:1129,age:21};
// document.write(b.name);

// let car={brand:"tata",color:"black",price:40000};
// document.write("this is " + car.brand + " car.<br> Its color is "+car.color+"<br>its price is "+car.price+"$");

//    document.getElementById('h').innerHTML="<u><b>This is DOM</b></u>";
//    document.getElementById('h').style.backgroundColor ="green";
//    document.getElementById('h').style.height ="50px";

//     function changecolor(col){
//  	document.getElementById('h').style.fontsize ="50px";
//  	document.getElementById('h').style.color =col;
//  }

function changecolor(){
	let col = document.getElementById('h').style.color;
	if(col=='green'){
		document.getElementById('h').style.color ="red";
	}
	else if(col=='red'){
		document.getElementById('h').style.color="yellow";
	}
	else{
		document.getElementById('h').style.color ="green";
	}
	document.getElementById('h').style.fontSize ="50px";
}

