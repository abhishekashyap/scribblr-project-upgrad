const deleteIconList = document.getElementsByClassName("trash-icon");

const deletePostModal = document.getElementById("delete-confirmation-modal");
const deleteDialogNoBtn = document.getElementById("no-btn");

deleteDialogNoBtn.addEventListener("click", function deleteDialogHandler() {
  closeModal(deletePostModal);
});

window.addEventListener("click", function deletePostHandler(event) {
  if (event.target == deletePostModal) {
    closeModal(deletePostModal);
  }
});

function deletePost(post) {
  openModal(deletePostModal);
}

for (let i = 0; i < deleteIconList.length; i++) {
  const element = deleteIconList[i];
  element.setAttribute("onclick", "deletePost(this)");
}
