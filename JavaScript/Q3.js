	

function divide(a , b){
	document.write("Quotient:", (a/b));
}
function check(){
	var num=document.getElementById("num2").value;
	if(num==0){
		alert("Division by 0 not allowed. Reenter the value of number 2.")
	}
	else{
		var num1=document.getElementById("num1").value;
		var num2=document.getElementById("num2").value;
		divide(num1, num2);
	}
}

	