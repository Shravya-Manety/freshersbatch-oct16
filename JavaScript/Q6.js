	

function display(){
	var num1=document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	num2=parseInt(num2);
	document.write("Following is the list of prime numbers:");
	document.write("<br>");
	var c=0;
	var flag=0;
	if(num1>num2)
	{
		flag=num1;
		num1=num2;
		num2=flag;
	}
	for(i=num1;i<=num2;i++)
	{
		for(j=2;j<i;j++)
		{
			if(i%j==0)
			{
				flag++;
			}
		}
		if(flag==0)
		{
			c++;
			document.writeln(c,".",i);
			document.write("<br>");
		}
		flag=0;
	}
}

	