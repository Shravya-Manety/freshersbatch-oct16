function check()
{
  word=document.getElementById('email').value;
  word=word.toLowerCase();
  var flag=0;
  for(i=0;i<word.length;i++)
  {
    if(word.charAt(i)=='@')
    {
      for(j=i+1;j<word.length;j++)
      {
        if(word.charAt(j)=='.')
        {
          flag++;
          alert("This is a valid email id!!");
        }
        else
        {
          if(j==(word.length-1) && flag==0)
          {
            flag++;
            alert("Missing domain name");
          }
        }
      }
    }
    else {
      if(i==(word.length-1) && flag==0)
      {
        alert("Missing @");
      }
    }
  }
}
