let submitButton = document.querySelector('button[type="submit"]');
// let sumt = document.getElementsByTagName('button');

// sumt.addEventListener("click",login,false);

// Link to fetch data
// https://api.myjson.com/bins/14x586

submitButton.addEventListener("click", login);

function login() {
  let usrname = document.getElementById("userName").value;
  let pswd = document.getElementById("pwd").value;
  let flag=0;
  fetch("https://api.myjson.com/bins/y337a")
    .then(function(response) {
      return response;
    })
    .then(function(e) {
      return e.json();
    })
    .then(function(data) {
      console.log(data);
		for (let i in data) {
        	if (usrname == data[i].usrName && pswd == data[i].passWord) {
          		flag=1;
         		if (data[i].admin) {
            		alert("Welcome Admin");
            		break;
          		} else {
            		alert("Welcome");
            		break;
          		}
        	} else {
        		flag=0;
          		continue;
        	}
      	}
      	if(!flag){
      		alert("Invalid Credentials..");
      	}

    });
}
