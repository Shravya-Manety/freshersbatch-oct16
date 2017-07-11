function remove()
{
  word=document.getElementById('word').value;
  word=word.toLowerCase();
  var newSent="";
  for (i=0;i<word.length;i++)
  {
    if(word.charAt(i)==' ' && word.charAt(i+1)==' ')
    {
      continue;
    }
    else
    {
        newSent=newSent+word.charAt(i);
    }
  }
  document.write("New sentence: ", newSent);
}
