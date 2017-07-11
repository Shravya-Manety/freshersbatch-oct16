var bankAcc= { 
	accNo: "unknown",
	accBal: 0,
	accName: "unknown",
	withdraw: function(amount)
	{
		if(amount > this.accBal)
			{alert("Insufficient balance.Withdraw not possible.");}
		else
		{
			this.accBal=this.accBal-amount;
			alert("Withdraw succesful.");
		}
	},
	deposit: function(amount)
	{
		if(amount<0)
		{alert("Amount can not be neagtive");}
		else
		{
			this.accBal=this.accBal+amount;
		}
	},
	getBal: function()
	{
		return this.accBal;
	}
}
function testBank()
{
	var bankObj1=Object.create(bankAcc);
	bankObj1.accNo="123A";
	bankObj1.accBal=19200;
	bankObj1.accName="Shravya";
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