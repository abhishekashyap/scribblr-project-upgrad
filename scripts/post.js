const editBtn = document.getElementById("edit-btn");
const saveBtn = document.getElementById("save-btn");
const likeBtn = document.getElementById("like-btn");
const commentBtn = document.getElementById("comment-btn");
const postTitleData = document.getElementById("post-title-data");
const postContent = document.getElementById("post-content-data");

function createCommentNode(value) {
  const commentNode = document.createElement("div");
  commentNode.className = "comment";
  commentNode.innerHTML = value;
  return commentNode;
}

editBtn.addEventListener("click", function editBtnHandler() {
  postTitleData.setAttribute("contenteditable", true);
  postContent.setAttribute("contenteditable", true);
  postTitleData.className = "border-pink";
  postContent.className = "border-blue";
  postContent.focus();
  editBtn.style.display = "none";
  saveBtn.style.display = "block";
});

saveBtn.addEventListener("click", function saveBtnHandler() {
  postTitleData.setAttribute("contenteditable", false);
  postContent.setAttribute("contenteditable", false);
  postTitleData.classList.remove("border-pink");
  postContent.classList.remove("border-blue");
  saveBtn.style.display = "none";
  editBtn.style.display = "block";
});

likeBtn.addEventListener("click", function likeBtnHandler() {
  const likeBtnText = document.getElementById("like-btn-text");
  const likeBtnHelperText = document.getElementById("like-btn-helper-text");
  likeBtnText.innerText = "Liked!";
  likeBtnHelperText.innerText = "1 person likes this!";
});

commentBtn.addEventListener("click", function commentHandler() {
  const commentValue = document.getElementById("comment");
  const commentListContainer = document.getElementById("comment-list");
  let commentText;
  if (commentValue) {
    commentText = commentValue.value;
  }

  if (commentText) {
    const commentNode = createCommentNode(commentText);
    commentListContainer.appendChild(commentNode);
    commentValue.value = "";
  } else {
    alert("Please enter a valid comment");
  }
});
