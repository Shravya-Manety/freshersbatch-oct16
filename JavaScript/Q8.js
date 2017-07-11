var flag=0;
function validate()
{
	pwd=document.getElementById("pwd").value;
	verify(pwd);
}

function verify(pwd)
{
	if(flag<3)
	{
		if(pwd=="tomato")
		{
			alert("Login Successful!");
		}
		else
		{
			rpwd=prompt("Re-enter");
			flag++;
			verify(rpwd);
		}
	}
	else
	{
		alert("Login Failed");
	}
}
