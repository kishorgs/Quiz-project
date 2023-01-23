
function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    let id = document.getElementById("studentid").value;
    let Register_name = localStorage.getItem("Regester_name");
    let Register_std_id = localStorage.getItem("Regester_std_id");

    localStorage.setItem("Test_user", name);
    localStorage.setItem("id", id);
    
    if (name == "kishor" && id == 12345678) {
        location.href = "../quiz_files/classList.html";
    }else if(name != Register_name){
    	alert("Invalid user name");
        return false;
    }else if(id != Register_std_id){
    	alert("Invalid student id");
        return false;
    }else{
		location.href = "../quiz_files/classList.html";
     }
 }