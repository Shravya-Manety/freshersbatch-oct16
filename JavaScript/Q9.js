
function calculate()
{
  var arr=[23,34,45,12,56,67,78,89,91];
  find_max(arr);
  find_min(arr);
  find_total(arr);
  find_avg(arr);
}
function find_max(arr)
{
  var max=arr[0];
  for(i=0;i<arr.length;i++)
  {
    if(max<arr[i])
    {
      max=arr[i];
    }
  }
  document.write("Max element:",max);
  document.write("<br>");
}
function find_min(arr)
{
  var min=arr[0];
  for(i=0;i<arr.length;i++)
  {
    if( min>arr[i])
    {
      min=arr[i];
    }
  }
  document.write("Min element:",min);
  document.write("<br>");
}
function find_avg(arr)
{
  var avg;
  var total=0;
  for(i=0;i<arr.length;i++)
  {
    total+=arr[i];
  }
  avg=total/(arr.length);
  document.write("Average:",avg);
}
function find_total(arr)
{
  var total=0;
  for(i=0;i<arr.length;i++)
  {
    total+=arr[i];
  }
  document.write("Total:",total);
  document.write("<br>");
}
