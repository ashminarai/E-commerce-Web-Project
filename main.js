// Validatinng user detail starts

function Validation(){
	var user = document.getElementById('user').value;
	var pass = document.getElementById('pass').value;
	if (user == ""){
				alert("Form should not be empty");
				return false;
			}
			if ((user.length <=2) || (user.length > 20)){
				alert("Username should contain more than 2 or less than 20 characters");
				return false;
			}
			if (!isNaN(user)){
				alert("Username should not contain integers");
				return false;
			}


			if (pass == ""){
				alert("Enter your password");
				return false;
			}
			if ((pass.length <=5) || (user.length > 20)){
				alert("password should be more than 5 characters!");
				return false;
			}

			if (conpass == ""){
				alert("Enter password");
				return false;
			}
			if(pass!=conpass){
				alert("Enter the same password")
				return false;
			}
			if(pass=conpass){
				alert("Thankyou! Have a great day");
				return false;
			}
		}

// Validatinng user detail ends


function clickme(smallImg){
	var fullImg = document.getElementById("imagebox");
	fullImg.src = smallImg.src;
}
// Choosing product of buy.html starts