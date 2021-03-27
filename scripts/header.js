const signUpModal = document.getElementById("signup-modal");
const signInModal = document.getElementById("signin-modal");

const signInBtn = document.getElementById("signin");
const signUpBtn = document.getElementById("signup");

const signUpSwitchBtn = document.getElementById("sign-up-switch");

const closeSignUpModalBtn = document.getElementsByClassName("close")[0];
const closeSignInModalBtn = document.getElementsByClassName("close")[1];

signInBtn.addEventListener("click", function signInBtnHandler() {
  openModal(signInModal);
});

signUpBtn.addEventListener("click", function signUpBtnHandler() {
  openModal(signUpModal);
});

signUpSwitchBtn.addEventListener("click", function signUpSwitchBtnHandler() {
  closeModal(signInModal);
  openModal(signUpModal);
});

// X btn to close the modal
closeSignUpModalBtn.addEventListener(
  "click",
  function closeSignUpModalHandler() {
    closeModal(signUpModal);
  }
);

closeSignInModalBtn.addEventListener(
  "click",
  function closeSignInModalHandler() {
    closeModal(signInModal);
  }
);

// Handle outside modal click
window.addEventListener("click", function headerFunctionsHandlerevent(event) {
  if (event.target == signUpModal) {
    closeModal(signUpModal);
  }
  if (event.target == signInModal) {
    closeModal(signInModal);
  }
});
