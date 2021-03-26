const deleteIconList = document.getElementsByClassName("trash-icon");

function deletePost(post) {
  console.log("object");
}

for (let i = 0; i < deleteIconList.length; i++) {
  const element = deleteIconList[i];
  element.setAttribute("onclick", "deletePost(this)");
}
