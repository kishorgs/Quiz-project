function Register() {
		var R_name = document.getElementById("R_name").value;
		var register_num = document.getElementById("register_num").value;
		var parents_num = document.getElementById("parents_num").value;
		var class_id = document.getElementById("class_id").value;
		var student_id = document.getElementById("student_id").value;

		if (parents_num.length < 10) {
			alert("Mobile number must be 10 digets");
			return false;
		}

		if (student_id.length < 8) {
			alert("Student id must be more than 8 digets");
			return false;
		}

		alert("Succesfully registered");

		localStorage.setItem("Regester_name",R_name);
		localStorage.setItem("Regester_reg_no",register_num);
		localStorage.setItem("Regester_ph_no",parents_num);
		localStorage.setItem("Regester_class_id",class_id);
		localStorage.setItem("Regester_std_id",student_id);
	}