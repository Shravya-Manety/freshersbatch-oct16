function check()
{
  word=document.getElementById('word').value;
  var count=0;
  for(i=0;i<word.length;i++)
  {
    if(word.charAt(i)!=' ')
    {count++;}
  }
  document.write("Characters in the string:", count);
}
