function empProf(empid,ename,empSal,deptNo)
{
	this.empid=empid;
	this.ename=ename;
	this.empSal=empSal;
	this.deptNo=deptNo;
	this.getEmpId=function()
	{
		document.write("Empid:",this.empid);
		document.write("<br>");
	}
	this.getEmpName=function()
	{
		document.write("Emp Name:",this.empName);
		document.write("<br>");
	}
	this.getEmpSal=function()
	{
		document.write("Emp Salary:",this.empSal);
		document.write("<br>");
	}
	this.getEmpDeptNo=function()
	{
		document.write("Emp Department Number:",this.deptNo);
		document.write("<br>");
	}
}
var EmployeeListManager=(function()
{
	var Employee=[];
	var teid,ten,tes,tdn;
	return{
		addEmp: function(empProf){Employee.push(empProf);},
		getEmp: function(){return Employee ; },
		eSort: function()
		{
			for(i=0;i<Employee.length;i++)
			{
				for(j=0;j<Employee.length;j++)
				{
					if((Employee[i].empid) < (Employee[j].empid))
					{
						teid=Employee[i].empid;
						Employee[i].empid=Employee[j].empid;
						Employee[j].empid=teid;
						ten=Employee[i].empName;
						Employee[i].empName=Employee[j].empName;
						Employee[j].empName=ten;
						tes=Employee[i].empSal;
						Employee[i].empSal=Employee[j].empSal;
						Employee[j].empSal=tes;
						tdn=Employee[i].deptNo;
						Employee[i].deptNo=Employee[j].deptNo;
						Employee[j].deptNo=tdn;
					}
				}
			}
		}
	}
})();
function testEmp()
{
	var emp1=new empProf(105,"Shravya",400000,1);
	emp1.getEmpId();
	emp1.getEmpName();
	emp1.getEmpSal();
	emp1.getEmpDeptNo();
	var emp2=new empProf(102,"Ujjay",400000,2);
	emp2.getEmpId();
	emp2.getEmpName();
	emp2.getEmpSal();
	emp2.getEmpDeptNo();
	var emp3=new empProf(104,"Vishal",400000,4);
	emp3.getEmpId();
	emp3.getEmpName();
	emp3.getEmpSal();
	emp3.getEmpDeptNo();
	document.write("<br>");
	document.write("Sorted List");
	document.write("<br>");
	EmployeeListManager.addEmp(emp1);
	EmployeeListManager.addEmp(emp2);
	EmployeeListManager.addEmp(emp3);
	var empList=EmployeeListManager.getEmp();
	EmployeeListManager.eSort();
	var empList=EmployeeListManager.getEmp();
	for(var x in empList)
	{
		empList[x].getEmpId();
		empList[x].getEmpName();
		empList[x].getEmpSal();
		empList[x].getEmpDeptNo();
	}

}