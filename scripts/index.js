const createPostModal = document.getElementById("create-post-modal");
const createPostBtn = document.getElementById("create-post");
const closeCreatePostModalBtn = document.getElementsByClassName("close")[2];

createPostBtn.onclick = function () {
  openModal(createPostModal);
};

closeCreatePostModalBtn.onclick = function () {
  closeModal(createPostModal);
};

