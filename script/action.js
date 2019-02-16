class app {
  constructor(dataB) {
    this.el = document.getElementById("Sdata");
    this.dataB = dataB;
  }
  count = data => {
    let el = document.getElementById("counter");
    let name = "student";
    if (data) {
      if (data > 1) {
        name = "Students";
      }
      el.innerHTML = `${data} ${name}`;
    } else {
      el.innerHTML = `No ${name}`;
    }
    return el;
  };

  fetchAll = () => {
    let data = "";
    if (this.dataB.length > 0) {
      for (let i = 0; i < this.dataB.length; i++) {
        data += `<tr>`;
        data += `<td><button onclick="Delete(${i})">Delete</button></td>`;
        data += `<td>  ${this.dataB[i].userName} </td>`;
        data += `<td>  ${this.dataB[i].EmailId} </td>`;
        data += `</tr>`;
      }
    }

    this.count(this.dataB.length);
    return (this.el.innerHTML = data);
  };
}
// CloseInput = () => {
//   document.getElementById("spoiler").style.display = "none";
// };
Add = () => {
  let usr = document.getElementById("add-username");
  let email = document.getElementById("add-email");

  let user = usr.value;
  let Email = email.value;

  if (user && Email) {
    //Add the new value
    let assign = {
      userName: user.trim(),
      EmailId: Email.trim()
    };

    console.log(Assigned);
    Assigned.push(assign);
    new Storage("Assigned").setData(Assigned);

    //Reset input value

    usr.value = "";
    email.value = "";
    new app(Assigned).fetchAll();
    console.log(Assigned);
  }
};
Delete = item => {
  Assigned.splice(item, 1);
  new Storage("Assigned").setData(Assigned);
  new app(Assigned).fetchAll();
};
let Assigned = [];
Assigned = new Storage("Assigned").fetchData();
localStorage.setItem("Assigned", JSON.stringify(Assigned));
new app(Assigned).fetchAll();
