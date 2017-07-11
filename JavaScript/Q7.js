function fact()
{
	var num=prompt("Enter the number.");
	factorial=1;
	for(i=1;i<=num;i++)
	{
		factorial=i*factorial;
	}
	document.write("Factorial=",factorial);
}