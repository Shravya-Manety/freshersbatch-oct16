
function calcDesc()
{
  var arr=[10,30,48,28,85,29,76,19,73,60];
  var temp=0;
  for(i=0;i<arr.length;i++)
  {
    for(j=0;j<arr.length;j++)
    {
      if(arr[i]>arr[j])
      {
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
      }
    }
  }
  for(i=0;i<arr.length;i++)
  {
    document.write(arr[i]," ");
  }
}
function calcAsc()
{
  var temp=0;
  var arr=[10,30,48,28,85,29,76,19,73,60];
  for(i=0;i<arr.length;i++)
  {
    for(j=0;j<arr.length;j++)
    {
      if(arr[i]<arr[j])
      {
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
      }
    }
  }
  for(i=0;i<arr.length;i++)
  {
    document.write(arr[i]," ");
  }
}
