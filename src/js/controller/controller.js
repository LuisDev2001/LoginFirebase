(() => {
  const titlePage = document.title;
  const objAuth = new Autentication();
  if (titlePage === "Login") {
    const $btnShowMoreOptionsLogin = document.getElementById(
      "js_show-more-options"
    );
    const $optionsLogin = document.getElementById("js_options-login");
    const $btnGoogle = document.getElementById("js_google");
    const $btnFacebook = document.getElementById("js_facebook");
    const $btnTwitter = document.getElementById("js_twitter");
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
    const $userSection = document.getElementById("js_user-information");
    const $itemUserInformation = document.querySelector(".menu-item.user");
    const getObjInformation = JSON.parse(localStorage.getItem("infoUser"));
    $itemUserInformation.classList.remove("hidden");
    $userSection.innerHTML += `
      <div class="header-user-avatar">
        <img src="${getObjInformation.img}" alt="Avatar" />
      </div>
      <div class="header-user-information">
        <span><b>Nombre: </b>${getObjInformation.nombre}</span>
        <span><b>Correo: </b>${getObjInformation.correo}</span>
      </div>
      <div class="header-user-singOut"><i class="fas fa-chevron-down"></i></div>
      <div class="header-user-singOut-text hidden">
        <span><i class="fas fa-sign-out-alt"></i> Cerrar sesión</span>
      </div>
    `;
    const singOutDropDown = document.querySelector(".header-user-singOut");
    console.log(singOutDropDown);
  }
})();
