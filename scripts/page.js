function showWindowNewPost () {

}

function showDiscover () {
    window.location.href='https://www.mickael-martin-nevot.com/'
}

function showFriends () {

}

function showSurprise () {
    window.location.href='../assets/y2k/rick_test_2.mp4'
}

function showWindowWriteSomething () {

}

function showCreditpage(){
    window.location.href='../credit-page/credit.html'

}

const button = document.getElementById("button_change");
const themeLink = document.getElementById("theme");

let currentTheme = "y2k";

button.addEventListener("click", () => {
  if (currentTheme === "y2k") {
    themeLink.href = "../y2k/emo_ordi.css";
    currentTheme = "emo";
  } else {
    themeLink.href = "../y2k/y2k_ordi.css";
    currentTheme = "y2k";
  }
});


 /*
function changerTheme() {
  const theme = document.getElementById("theme");

  if (theme.getAttribute("href") === "light.css") {
    theme.setAttribute("href", "dark.css");
  } else {
    theme.setAttribute("href", "light.css");
  }
}
*/

