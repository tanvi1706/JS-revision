// console.log(window); window is the parent class
//console.log(document.getElementById("my-form"));

// query selector jQuery
//console.log(document.querySelector(".container"));
//console.log(document.querySelectorAll(".item"));
//console.log(document.getElementsByClassName("item"));

//const ul = document.querySelector(".items");
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = "hello";
//ul.children[1].innerText = "tanV";
//ul.lastElementChild.innerHTML = "<h1>udaye</h1>";
/*const btn = document.querySelector(".btn");
//btn.style.background = "red";
btn.addEventListener("click", (e) => {
  e.preventDefault();
  //btn.style.background = "orange";
  //console.log(e.target);
  //console.log(e.target.className);
  document.querySelector("#my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  document.querySelector(".items").lastElementChild.innerHTML =
    "<h1>hello</h1>";
});*/

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  console.log(nameInput.value);
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all the fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    userList.appendChild(li);
    //clr fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
