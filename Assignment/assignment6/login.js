window.onload = loginLoad;
function loginLoad()
{
	var form = document.getElementById("MyLogin");
	form.onsubmit = checkLogin;
}

function checkLogin()
{
	const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const username = urlParams.get('username');
    const password = urlParams.get('password');

	var user = document.forms["MyLogin"]["username"];
	var pass = document.forms["MyLogin"]["password"];
	console.log(user.value)
	console.log(username)
	console.log(pass.value)
	console.log(password)
	if(user.value!=username||pass.value!=password)
	{
	 	
	 	alert("Name or Password is incorrect."); 
	 	return false;
    }
	alert("Login success");
	return false;
	
	
}

			