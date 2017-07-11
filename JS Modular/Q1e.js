function bankAcc(accNum,accBalance,accName)
{
	this.accNo=accNum;
	this.accBal=accBalance;
	this.accName=accName;
}
bankAcc.prototype.withdraw=function(amount)
{
	if(amount > this.accBal) {
		alert("Insufficient balance.Withdraw not possible.");
	}
	else
	{
		this.accBal=this.accBal-amount;
		alert("Withdraw succesful.");
	}
};
bankAcc.prototype.deposit=function(amount)
{
	if(amount<0)
		{alert("Amount can not be negative");}
	else
	{
		this.accBal=this.accBal+amount;
	}
};
bankAcc.prototype.getBal=function(amount)
{
	return this.accBal;
};
function testBank()
{
	var bankObj1=new bankAcc("123A",25000,"Ujjay");
	var bal=bankObj1.getBal();
	document.write("Current balance:",bal);
	document.write("<br>");
	bankObj1.withdraw(2000);
	var bal=bankObj1.getBal();
	document.write("Current balance:",bal);
	document.write("<br>");
	bankObj1.deposit(1000);
	var bal=bankObj1.getBal();
	document.write("Current balance:",bal);
}