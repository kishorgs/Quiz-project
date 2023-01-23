let user_name = localStorage.getItem("Test_user");
let user_points = localStorage.getItem("points");
let user_time = localStorage.getItem("time");
let user_id = localStorage.getItem("id");



document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.time_taken").innerHTML = user_time;
document.querySelector("span.user_id").innerHTML = user_id;
