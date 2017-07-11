function check()
{
  var word=document.getElementById("word").value;
  var rev="";
  for(i=word.length;i>=0;i--)
  {
    rev=rev+word.charAt(i);
  }
  if(rev===word)
  {
    alert("The word is Paloindrome!");
  }
  else {
    alert("The word is a consonant.");
  }
}
