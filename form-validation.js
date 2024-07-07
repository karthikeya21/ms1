function formValidation()
{
var uname = document.regform.name;
var passid = document.regform.pass;
var phno = document.regform.phno;
var uemail = document.regform.email;
if(username_validation(uname,6,12))
{
if(passid_validation(passid,6,12))
{
    
        if(allnumeric(phno,10))
        {
            if(ValidateEmail(uemail))
            {
               
                alert('Form Succesfully Submitted');
                window.location.reload()
                return true;
                
            } 
        }
    
}
}
return false;
}
function username_validation(uname,mx,my)
{
    var u_len = uname.value.length;
    if (u_len == 0 || u_len >= my || u_len < mx)
    {
        alert("User Id should not be empty / length be between "+mx+" to "+my);
        uid.focus();
        return false;
    }
    var letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}
function passid_validation(passid,mx,my)
{
    var passid_len = passid.value.length;
    if (passid_len == 0 ||passid_len >= my || passid_len < mx)
    {
        alert("Password should not be empty / length be between "+mx+" to "+my);
        passid.focus();
        return false;
    }
    return true;
}
function allnumeric(phno,mx)
{ 
    var numbers = /^[0-9]+$/;
    if(phno.value.match(numbers))
    {
        var ph_len=phno.value.length;
        if (ph_len == 0 ||ph_len > mx || ph_len < mx)
        {
            alert("Phone number should not be empty / length should be "+mx);
            phno.focus();
            return false;
        }
        return true;
    }
    else
    {
        alert('phone number must have numeric characters only');
        phno.focus();
        return false;
    }
}
function ValidateEmail(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}
