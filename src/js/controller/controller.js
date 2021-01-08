const $btnShowMoreOptionsLogin = document.getElementById(
  "js_show-more-options"
);
const $optionsLogin = document.getElementById("js_options-login");
$btnShowMoreOptionsLogin.addEventListener("click", (event) => {
  $optionsLogin.classList.toggle("hidden");
  event.target.style.display = "none";
});
