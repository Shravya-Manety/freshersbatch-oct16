var account1= {
	accNo: "123A",
	accBal: 10000,
	accName: "Ranjit Bhise",
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
	document.write("Current balance:",account1.accBal);
	document.write("<br>");
	account1.withdraw(2000);
	var bal=account1.getBal();
	document.write("Current balance:",bal);
	document.write("<br>");
	account1.deposit(1000);
	var bal=account1.getBal();
	document.write("Current balance:",bal);
}