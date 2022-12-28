
let title = document.querySelector("#title");
let priority = document.querySelector("#priority");
let button = document.querySelector("button");
let body = document.querySelector(".body");

let arrayList = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : [];

button.addEventListener("click", () => {
if(title.value!==''){
  arrayList.push({ title: title.value, category: priority.value });
  localStorage.setItem("data", JSON.stringify(arrayList));
  location.reload();
}
else{
  alert("Xahis olunur mətn daxil edin")
}
});

function displayItem() {
  let text = "";

  for (i = 0; i < arrayList.length; i++) {
    text += `
    <div class="box">
            <div class="left">
              <textarea disabled>${arrayList[i].title}</textarea>
              <p>${arrayList[i].category}</p>
              <div class="buttons">
                <button class="cancel">Cancel</button>
                <button class="save">Save</button>
              </div>
            </div>
            <div class="right">
              <img class="edit" src="./images/Vector.png" alt="" />
              <img class="delete" src="./images/Vector (1).png" alt="" />
            </div>
          </div>
    `;
  }

  body.innerHTML += text;

  deleteItem();
  editItem();
  cancelEdit();
  saveEdit();
}

window.onload = function () {
  displayItem();
};

const deleteItem=()=>{
  let deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach((item, i) => {
    item.addEventListener("click", () => {
      arrayList.splice(i, 1);
      localStorage.setItem("data", JSON.stringify(arrayList));
      location.reload();
    });
  });
}


const editItem=()=>{
  let editBtn = document.querySelectorAll(".edit");
  let buttons = document.querySelectorAll(".buttons");
  let textArea = document.querySelectorAll(".left textarea");
  editBtn.forEach((item, i) => {
    item.addEventListener("click", () => {
      buttons[i].style.display = "block";
      textArea[i].disabled = false;
    });
  });
}

const saveEdit=()=>{
  const saveBtn = document.querySelectorAll(".save");
  let textArea = document.querySelectorAll(".left textarea");

  saveBtn.forEach((item, i) => {
    item.addEventListener("click", () => {
      arrayList[i].title=textArea[i].value
      localStorage.setItem("data", JSON.stringify(arrayList));
      location.reload();
    });
  });
}


const cancelEdit=()=>{
  let cancelBtn=document.querySelectorAll('.cancel')
  let textArea = document.querySelectorAll(".left textarea");
  let buttons = document.querySelectorAll(".buttons");

  cancelBtn.forEach((item,i)=>{
    item.addEventListener('click', ()=>{
      buttons[i].style.display="none"
      textArea[i].disabled=true

    })
  })
}

