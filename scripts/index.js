const createPostModal = document.getElementById("create-post-modal");
const createPostBtn = document.getElementById("create-post");
const closeCreatePostModalBtn = document.getElementsByClassName("close")[2];

createPostBtn.addEventListener("click", function createPostDialogOpenHandler() {
  openModal(createPostModal);
});

closeCreatePostModalBtn.addEventListener(
  "click",
  function createPostDialogCloseHandler() {
    closeModal(createPostModal);
  }
);

window.addEventListener("click", function createPostHandler(event) {
  if (event.target == createPostModal) {
    closeModal(createPostModal);
  }
});
