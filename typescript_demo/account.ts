class Account
{   
    acc_id:string;
    acc_name:string;
    acc_bal:number;
    constructor(acc_id:string,acc_name:string,acc_bal:number)
    {
        this.acc_id=acc_id;
        this.acc_name=acc_name;
        this.acc_bal=acc_bal;
    }
    getBal():number
    {return this.acc_bal;}
}
class SavingsAccount extends Account
{
    acc_id:string;
    acc_name:string;
    acc_bal:number;
    interest:number;
    constructor(acc_id:string,acc_name:string,acc_bal:number,interest:number)
    {
        super(acc_id,acc_name,acc_bal);
        this.interest=interest;
    }
    getBal():number
    {return this.acc_bal+this.interest;}
}
class CurrentAccount extends Account
{
    acc_id:string;
    acc_name:string;
    acc_bal:number;
    cash_credit:number;
    constructor(acc_id:string,acc_name:string,acc_bal:number,cash_credit:number)
    {
        super(acc_id,acc_name,acc_bal);
        this.cash_credit=cash_credit;
    }
    getBal():number
    {return this.acc_bal+this.cash_credit;}
}
function getTotalCashBank(accounts):number
{
    var total=0;
    accounts.map(
        (acc) => total=total+acc.getBal());
    return total;
}
function testAccount():void
{
    var accounts:Array<object>=[];
    let sobj1=new SavingsAccount('b1','Shravya',20000,2000);
    accounts.push(sobj1);
    var sobj2=new SavingsAccount('b2','Shata',1500,4000);
    accounts.push(sobj2);
    var sobj3=new SavingsAccount('b3','Vishal',1400,2000);
    accounts.push(sobj3);

    var cobj1=new CurrentAccount('b4','Shruthi',2000,5000);
    accounts.push(cobj1);
    var cobj2=new CurrentAccount('b5','Vignesh',3000,2000);
    accounts.push(cobj1);
    var cobj3=new CurrentAccount('b6','Darshan',2000,5000);
    accounts.push(cobj1);
    console.log(accounts);
    var cash=getTotalCashBank(accounts);
    console.log("total ammount:",cash);
}
testAccount();