function calculate()
{
  var ca=0;
  var ce=0;
  var ci=0;
  var co=0;
  var cu=0;
  var sent=document.getElementById("sent").value;
  for (i=0;i<sent.length;i++)
  {
    letter=sent.charAt(i);
    letter=letter.toLowerCase();
    if(letter=='a')
      ca++;
    else if(letter=='e')
      ce++;
    else if(letter=='i')
      ci++;
    else if(letter=='o')
      co++;
    else if(letter=='u')
      cu++;
    else {

    }
  }
  document.write("a=",ca,", e=",ce,", i=",ci,", o=",co,", u=",cu);
}
