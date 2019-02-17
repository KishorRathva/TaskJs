class app {
  constructor(dataB, elName, countname) {
    this.el = document.getElementById(`${elName}`);
    this.dataB = dataB;
    this.countname = countname;
    console.log(this.dataB);
  }
  count = data => {
    let el = document.getElementById(`${this.countname}`);
    console.log(this.countname);
    name = this.countname;
    if (data) {
      if (data > 1) {
        name = `${name}s`;
      }
      el.innerHTML = `${data} ${name}`;
    } else {
      el.innerHTML = `0-${name}`;
    }
    console.log(el);

    return el;
  };

  fetchAll = (key1, key2) => {
    this.key1 = key1;
    this.key2 = key2;
    let data = "";
    if (this.dataB.length > 0) {
      for (let i = 0; i < this.dataB.length; i++) {
        data += `<tr>`;
        data += `<td><button   class="btn btn-danger" onclick="Delete${
          this.countname
        }(${i})">Delete</button></td>`;
        data += `<td>  ${this.dataB[i][this.key1]} </td>`;
        data += `<td>  ${this.dataB[i][this.key2]} </td>`;
        data += `</tr>`;
        console.log(this.dataB[i][this.key1]);
        console.log(this.dataB[i][this.key2]);
      }
    }
    this.count(this.dataB.length);
    return (this.el.innerHTML = data);
  };
}
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
    new app(Assigned, "Sdata", "student").fetchAll("userName", "EmailId");
    console.log(Assigned);
  }
};
AddCourse = () => {
  let course = document.getElementById("add-Coursename");
  let discription = document.getElementById("discription");

  let courseName = course.value;
  let discriptionS = discription.value;
  console.log(courseName);
  console.log(discriptionS);
  if (courseName && discriptionS) {
    //Add the new value
    let Assigncourse = {
      course: courseName.trim(),
      Discription: discriptionS.trim()
    };

    console.log(Assigncourse);
    CourseList.push(Assigncourse);
    new Storage("CourseList").setData(CourseList);

    //Reset input value

    course.value = "";
    discription.value = "";
    new app(CourseList, "Cdata", "course").fetchAll("course", "Discription");
    console.log(`CourseList:${CourseList}`);
  }
};

Deletestudent = item => {
  Assigned.splice(item, 1);
  new Storage("Assigned").setData(Assigned);
  new app(Assigned, "Sdata", "student").fetchAll("userName", "EmailId");
};
Deletecourse = item => {
  CourseList.splice(item, 1);
  new Storage("CourseList").setData(CourseList);
  new app(CourseList, "Cdata", "course").fetchAll("course", "Discription");
};

let Assigned = [];
Assigned = new Storage("Assigned").fetchData();
localStorage.setItem("Assigned", JSON.stringify(Assigned));
new app(Assigned, "Sdata", "student").fetchAll("userName", "EmailId");

let CourseList = [];
CourseList = new Storage("CourseList").fetchData();
localStorage.setItem("CourseList", JSON.stringify(CourseList));
new app(CourseList, "Cdata", "course").fetchAll("course", "Discription");
