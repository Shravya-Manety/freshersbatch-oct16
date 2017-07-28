var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = (function () {
    function Account(acc_id, acc_name, acc_bal) {
        this.acc_id = acc_id;
        this.acc_name = acc_name;
        this.acc_bal = acc_bal;
    }
    Account.prototype.getBal = function () { return this.acc_bal; };
    return Account;
}());
var SavingsAccount = (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(acc_id, acc_name, acc_bal, interest) {
        var _this = _super.call(this, acc_id, acc_name, acc_bal) || this;
        _this.interest = interest;
        return _this;
    }
    SavingsAccount.prototype.getBal = function () { return this.acc_bal + this.interest; };
    return SavingsAccount;
}(Account));
var CurrentAccount = (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(acc_id, acc_name, acc_bal, cash_credit) {
        var _this = _super.call(this, acc_id, acc_name, acc_bal) || this;
        _this.cash_credit = cash_credit;
        return _this;
    }
    CurrentAccount.prototype.getBal = function () { return this.acc_bal + this.cash_credit; };
    return CurrentAccount;
}(Account));
function getTotalCashBank(accounts) {
    var total = 0;
    accounts.map(function (acc) { return total = total + acc.getBal(); });
    return total;
}
function testAccount() {
    var accounts = [];
    var sobj1 = new SavingsAccount('b1', 'Shravya', 20000, 2000);
    accounts.push(sobj1);
    var sobj2 = new SavingsAccount('b2', 'Shata', 1500, 4000);
    accounts.push(sobj2);
    var sobj3 = new SavingsAccount('b3', 'Vishal', 1400, 2000);
    accounts.push(sobj3);
    var cobj1 = new CurrentAccount('b4', 'Shruthi', 2000, 5000);
    accounts.push(cobj1);
    var cobj2 = new CurrentAccount('b5', 'Vignesh', 3000, 2000);
    accounts.push(cobj1);
    var cobj3 = new CurrentAccount('b6', 'Darshan', 2000, 5000);
    accounts.push(cobj1);
    console.log(accounts);
    var cash = getTotalCashBank(accounts);
    console.log("total ammount:", cash);
}
testAccount();
