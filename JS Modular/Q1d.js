function bankAcc(accNum,accBalance,accName)
{
	//private members
	var accNo=accNum;
	var accBal=accBalance;
	var accName=accName;
	//public methods: the variables can be accessed within the funcion, but not outside, so testBank me can't be accessed.
	var obj={
		withdraw : function(amount)
		{
			if(amount > accBal)
			{alert("Insufficient balance.Withdraw not possible.");}
			else
			{
				accBal=accBal-amount;
				alert("Withdraw succesful.");
			}
		},
		deposit : function(amount)
		{
			if(amount<0)
			{alert("Amount can not be negative");}
			else
			{
				accBal=accBal+amount;
			}
		},
		getBal: function()
		{
			return accBal;
		}
	};
	return obj;
}
function testBank()
{
	var bankObj1= new bankAcc("123A",23000, "Shravya");
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