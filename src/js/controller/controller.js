(() => {
  const titlePage = document.title;
  if (titlePage === "Login") {
    const $btnShowMoreOptionsLogin = document.getElementById(
      "js_show-more-options"
    );
    const $optionsLogin = document.getElementById("js_options-login");
    const $btnGoogle = document.getElementById("js_google");
    const $btnFacebook = document.getElementById("js_facebook");
    const $btnTwitter = document.getElementById("js_twitter");
    const objAuth = new Autentication();
    //Show more options of login
    $btnShowMoreOptionsLogin.addEventListener("click", (event) => {
      $optionsLogin.classList.toggle("hidden");
      event.target.style.display = "none";
    });

    $btnGoogle.addEventListener("click", (event) => {
      event.preventDefault();
      //Exec login with google
      objAuth.authWithGoogle();
    });

    $btnFacebook.addEventListener("click", (event) => {
      event.preventDefault();
      //Exec login with facebook
      objAuth.authWithFacebook();
    });

    $btnTwitter.addEventListener("click", (event) => {
      event.preventDefault();
      //Exec login with twitter
      objAuth.authWithTwitter();
    });
  } else if (titlePage === "Home Page") {
  }
})();
