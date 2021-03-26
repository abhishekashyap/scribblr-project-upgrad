const editBtn = document.getElementById("edit-btn");
const saveBtn = document.getElementById("save-btn");
const postTitleData = document.getElementById("post-title-data");
const postContent = document.getElementById("post-content-data");

editBtn.addEventListener("click", function editBtnHandler() {
  postTitleData.setAttribute("contenteditable", true);
  postContent.setAttribute("contenteditable", true);
  postTitleData.className = "border-pink";
  postContent.className = "border-blue";
  postContent.focus();
  editBtn.style.display = "none";
  saveBtn.style.display = "block";
});

saveBtn.addEventListener("click", function editBtnHandler() {
  postTitleData.setAttribute("contenteditable", false);
  postContent.setAttribute("contenteditable", false);
  postTitleData.classList.remove("border-pink");
  postContent.classList.remove("border-blue");
  saveBtn.style.display = "none";
  editBtn.style.display = "block";
});
