window.onload = pageLoad;
function pageLoad()
{
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() 
{
    var a = document.forms["myForm"]["password"][0];
    var b = document.forms["myForm"]["password"][1];
    if(a.value!= b.value)
    {
        document.getElementById('errormsg').innerHTML = "Password not match";
        alert("Password not match");
        return false;
    }
    alert("Register success");
   
}
