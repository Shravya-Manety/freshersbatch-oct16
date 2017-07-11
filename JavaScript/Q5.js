	

function display(){
	var letter=document.getElementById("alph").value;
	letter=letter.toLowerCase();
	if(letter=='a'||letter=='e'||letter=='i'||letter=='o'||letter=='u'){
		alert("You have entered a vovel.");
	}
	else{
		alert("You have entered a consonant.");
	}
}

	