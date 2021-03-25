const signUpModal = document.getElementById("signup-modal");
const signInModal = document.getElementById("signin-modal");
const createPostModal = document.getElementById("create-post-modal");
const signInBtn = document.getElementById("signin");
const signUpBtn = document.getElementById("signup");
const createPostBtn = document.getElementById("create-post");
const signUpSwitchBtn = document.getElementById("sign-up-switch");
const closeSignUpModalBtn = document.getElementsByClassName("close")[0];
const closeSignInModalBtn = document.getElementsByClassName("close")[1];
const closeCreatePostModalBtn = document.getElementsByClassName("close")[2];

function closeModal(modal) {
  modal.style.display = "none";
}

function openModal(modal) {
  modal.style.display = "block";
}

signInBtn.onclick = function () {
  openModal(signInModal);
};

signUpBtn.onclick = function () {
  openModal(signUpModal);
};

createPostBtn.onclick = function () {
  openModal(createPostModal);
};

signUpSwitchBtn.onclick = function () {
  closeModal(signInModal);
  openModal(signUpModal);
};

// X btn to close the modal
closeSignUpModalBtn.onclick = function () {
  closeModal(signUpModal);
};

closeSignInModalBtn.onclick = function () {
  closeModal(signInModal);
};

closeCreatePostModalBtn.onclick = function () {
  closeModal(createPostModal);
};

// Handle outside modal click
window.onclick = function (event) {
  if (event.target == signUpModal) {
    closeModal(signUpModal);
  }
  if (event.target == signInModal) {
    closeModal(signInModal);
  }
  if (event.target == createPostModal) {
    closeModal(createPostModal);
  }
};
