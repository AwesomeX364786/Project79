name_of_friend_array = [];

function submit()
{

var name_1 = document.getElementById("name_of_my_friend_1").value;
var name_2 = document.getElementById("name_of_my_friend_2").value;
var name_3 = document.getElementById("name_of_my_friend_3").value;
var name_4 = document.getElementById("name_of_my_friend_4").value;

name_of_friend_array.push(name_1);
name_of_friend_array.push(name_2);
name_of_friend_array.push(name_3);
name_of_friend_array.push(name_4);

document.getElementById("display_name").innerHTML = name_of_friend_array;
document.getElementById("button_submit").style.display = "none";
document.getElementById("button_sort").style.display = "inline-block";

}

function sorting()
{

name_of_friend_array.sort();
console.log(name_of_friend_array);
document.getElementById("display_name").innerHTML = name_of_friend_array;

}