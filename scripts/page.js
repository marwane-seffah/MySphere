function showWindowNewPost () {

}

function showDiscover () {
    window.location.href='https://www.mickael-martin-nevot.com/'
}

function showFriends () {

}

function showSurprise () {
    window.location.href='assets/y2k/rick_test_2.mp4'
}

function showWindowWriteSomething () {

}

function showCreditpage(){
    window.location.href='credit-page/credit.html'

}


function changerTheme() {
  const theme = document.getElementById("theme");

  if (theme.getAttribute("href") === "light.css") {
    theme.setAttribute("href", "dark.css");
  } else {
    theme.setAttribute("href", "light.css");
  }
}


