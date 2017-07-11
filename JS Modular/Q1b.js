function bankAcc(accNo,accBal,accName)
{
	this.accNo=accNo;
	this.accBal=accBal;
	this.accName=accName;
	this.withdraw=function(amount)
	{
		if(amount > this.accBal)
			{alert("Insufficient balance.Withdraw not possible.");}
		else
		{
			this.accBal=this.accBal-amount;
			alert("Withdraw succesful.");
		}
	};
	this.deposit=function(amount)
	{
		if(amount<0)
		{alert("Amount can not be neagtive");}
		else
		{
			this.accBal=this.accBal+amount;
		}
	};
	this.getBal=function()
	{
		return this.accBal;
	}
}
function testBank()
{
	var bankObj1=new bankAcc("123A",19000,"Shravya");
	var bankObj2=new bankAcc("145B",35000,"Ujjay");
	document.write("Account 1");
	document.write("<br>");
	document.write("Current balance:",bankObj1.accBal);
	document.write("<br>");
	bankObj1.withdraw(2000);
	var bal=bankObj1.getBal();
	document.write("Current balance:",bal);
	document.write("<br>");
	bankObj1.deposit(1000);
	var bal=bankObj1.getBal();
	document.write("Current balance:",bal);
}
