

let submitButton = document.querySelector('button[type="submit"]');
// let sumt = document.getElementsByTagName('button');

// sumt.addEventListener("click",login,false);

// Link to fetch data
// https://api.myjson.com/bins/14x586


submitButton.addEventListener('click',login);
let usrname=document.getElementById("userName").value;
function login(){
	fetch('https://api.myjson.com/bins/y337a')
	.then(function(response){
		return response;
	})
	.then(function(e){
		return e.json();
	})
	.then(function(data){
		console.log(data);
		data.forEach(function(users){
			if(usrname == users.usrName){
				console.log(usrname);
				console.log(users.admin);
				if(users.admin){
					alert("Welcom Admin");
				}else{
					alert("Welcom");
				}
			}
		})
	})
	.catch(function(error){
			console.log(error);
	})

} 