
function table()
{
	num=document.getElementById("num").value;
	str="";
	do{
		for(i=1;i<=10;i++)
		{
			str+=num+"*"+i+"="+(num*i)+"  ";
		}
		num=parseInt(num);
		num=num+1;
		var r=confirm(str,"Do you want to continue?");
	}while(r==true);
}
