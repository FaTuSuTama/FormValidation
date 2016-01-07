/*function userIdValidation(uid,mx,my){  
    var uidLen = uid.value.length;  
    if (uidLen == 0 || uidLen >= my || uidLen < mx){  
    alert("User Id should not be empty / length be between "+mx+" to "+my);  
    return false;  
    }  
    return true;  
} 

function passIdValidation(passid,mx,my){  
    var passidLen = passid.value.length;  
    if (passidLen == 0 ||passidLen >= my || passidLen < mx){  
        alert("Password should not be empty / length be between "+mx+" to "+my);  
        return false;  
    }  
    return true;  
}

function allLetter(uname){   
    var letters = /^[A-Za-z]+$/;  
    if(uname.value.match(letters)){  
        return true;  
    }  
    else{  
        alert('Username must have alphabet characters only');   
        return false;  
    }  
}
function alphaNumeric(uadd){   
    var letters = /^[0-9a-zA-Z]+$/;  
    if(uadd.value.match(letters)){  
    return true;  
    }  
    else{  
    alert('User address must have alphanumeric characters only');  
    return false;  
    }  
}
 
function countrySelect(ucountry){  
    if(ucountry.value == "Default"){  
        alert('Select your country from the list');    
        return false;  
    }  
    else{  
        return true;  
    }  
}

function allNumeric(uzip){   
    var numbers = /^[0-9]+$/;  
    if(uzip.value.match(numbers)){  
        return true;  
    }  
    else{  
        alert('ZIP code must have numeric characters only');    
        return false;  
    }  
} 
function ValidateEmail(uemail){  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(uemail.value.match(mailformat)){  
        return true;  
    }  
    else{  
        alert("You have entered an invalid email address!");  
        return false;  
    }  
}
function validSex(umsex,ufsex){  
    x=0;  
      
    if(umsex.checked){  
        x++;  
    } 
    if(ufsex.checked){  
        x++;   
    }  
    if(x==0){  
        alert('Select Male/Female');  
        return false;  
    }  
    else{  
        alert('Form Succesfully Submitted');   
        return true;  
    }  
} 

function formValidation(){  
    var uid = document.registration.userid;  
    var passid = document.registration.passid;  
    var uname = document.registration.username;  
    var uadd = document.registration.address;  
    var ucountry = document.registration.country;  
    var uzip = document.registration.zip;  
    var uemail = document.registration.email;  
    var umsex = document.registration.msex;  
    var ufsex = document.registration.fsex;
    
    if(userIdValidation(uid,5,12)){  
        if(passIdValidation(passid,7,12)){  
            if(allLetter(uname)){  
                if(alphaNumeric(uadd)){   
                    if(countrySelect(ucountry)){  
                        if(allNumeric(uzip)){  
                            if(ValidateEmail(uemail)){  
                                if(validSex(umsex,ufsex)){  
                                }  
                            }   
                        }  
                    }   
                }  
            }  
        }  
    }  
    return false;     
}*/
var emailCount = 1;
var phnCount = 1;

function createField(type, ph, nam, teid){
       var typeAttribute = type;
       var placeholderAttribute = ph;
       var nameAttribute = nam;
       var targetElementId = teid;
    
        var liNode = document.createElement("LI");
        var inputTag = document.createElement("INPUT");
        inputTag.setAttribute("type", typeAttribute);
        inputTag.setAttribute("placeholder", placeholderAttribute);
        inputTag.setAttribute("name", nameAttribute);

        liNode.appendChild(inputTag);
        console.log(liNode.appendChild(inputTag));
        var targetElement = document.getElementById(targetElementId);
        targetElement.appendChild(liNode); 
}
function userIdValidation(uid,mx,my){  
    var uidLen = uid.value.length;  
    if (uidLen == 0 || uidLen >= my || uidLen < mx){  
    document.getElementById("userIdNotice").innerHTML = "*User Id should not be empty / length be between "+mx+" to "+my;
    document.getElementById("userIdNotice").style.color = "red";
    return false;  
    }  
    return true;  
}
function uidSubmit(){  
    var uid = document.registration.userid;
     if(userIdValidation(uid,5,12)){
         
     }
     return false;
}
function passIdValidation(passid,mx,my){  
    var passidLen = passid.value.length;  
    if (passidLen == 0 ||passidLen >= my || passidLen < mx){  
        document.getElementById("passNotice").innerHTML = "*Password should not be empty / length be between "+mx+" to "+my;
        document.getElementById("passNotice").style.color = "red";
        return false;  
    }  
    return true;  
}
function passSubmit(){
    var passid = document.registration.passid;
    if(passIdValidation(passid,7,12)){
         
     }
     return false;
}
function allLetter(uname){   
    var letters = /^[A-Za-z]+$/;  
    if(uname.value.match(letters)){  
        return true;  
    }  
    else{  
        document.getElementById("usrNamNotice").innerHTML = "*Username must have alphabet characters only";
        document.getElementById("usrNamNotice").style.color = "red";
        return false;  
    }  
}
function userNam(){
    var uname = document.registration.username;  
     if(allLetter(uname)){
         
     }
     return false;
}
function alphaNumeric(uadd){   
    var letters = /^[0-9a-zA-Z]+$/;  
    if(uadd.value.match(letters)){  
    return true;  
    }  
    else{  
    document.getElementById("usrAddNotice").innerHTML = "*User address must have alphanumeric characters only";
    document.getElementById("usrAddNotice").style.color = "red";
    return false;  
    }  
}
function userAdd(){
    var uadd = document.registration.address; ;  
    if(alphaNumeric(uadd)){
         
     }
     return false;
}
function ValidateEmail(uemail){  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(uemail.value.match(mailformat)){  
        return true;  
    }  
    else{  
        document.getElementById("emailNotice").innerHTML = "*You have entered an invalid email address!"; 
        document.getElementById("emailNotice").style.color = "red";
        return false;  
    }  
}
function userMail(){
    var uemail = document.registration.email;
    if(ValidateEmail(uemail)){
         
     }
     return false;
}
function formValidation(){  
    var uid = document.registration.userid;  
    var passid = document.registration.passid;  
    var uname = document.registration.username;  
    var uadd = document.registration.address;  
    var ucountry = document.registration.country;  
    var uzip = document.registration.zip;  
    var uemail = document.registration.email;  
    var umsex = document.registration.msex;  
    var ufsex = document.registration.fsex;
    
    if(userIdValidation(uid,5,12)){  
        if(passIdValidation(passid,7,12)){  
            if(allLetter(uname)){  
                if(alphaNumeric(uadd)){   
                    if(countrySelect(ucountry)){  
                        if(ValidateEmail(uemail)){  

                        }    
                    }   
                }  
            }  
        }  
    }  
    return false;     
}









/*function onfocusFunction(){
    var x = document.getElementsByClassName("userId");
    var i;
    for (i = 0; i < x.length; i++){
        x[i].style.backgroundColor = "#F2F1EF";
    }
}
function onblurFunction(){
    var x = document.getElementsByClassName("userId");
    var i;
    for (i = 0; i < x.length; i++){
        x[i].style.backgroundColor = "";
    }
}*/

 
  

