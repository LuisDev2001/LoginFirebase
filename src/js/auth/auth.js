class Autentication {
  async authWithGoogle() {
    try {
      const PROVIDER = new firebase.auth.GoogleAuthProvider();
      const data = await firebase.auth();
      const information = await data.signInWithPopup(PROVIDER);
      window.location.href = "http://localhost:5500/src/views/home.html";
      return information;
    } catch (error) {
      console.error(error.message);
    }
  }

  async authWithFacebook() {
    try {
      const PROVIDER = new firebase.auth.FacebookAuthProvider();
      const data = await firebase.auth();
      const information = await data.signInWithPopup(PROVIDER);
      window.location.href = "http://localhost:5500/src/views/home.html";
      return information;
    } catch (error) {
      console.error(error.message);
    }
  }

  async authWithTwitter() {
    try {
      const PROVIDER = new firebase.auth.TwitterAuthProvider();
      const data = await firebase.auth();
      const information = await data.signInWithPopup(PROVIDER);
      window.location.href = "http://localhost:5500/src/views/home.html";
      return information;
    } catch (error) {
      console.error(error.message);
    }
  }
}