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

const switchButton = document.getElementById("switch_theme");
const themeLink = document.getElementById("theme");

let currentTheme = "emo";

switchButton.addEventListener("click", () => {
    if (currentTheme === "emo") {
        themeLink.href = "./y2k_ordi.css";
        currentTheme = "y2k";
    } else {
        themeLink.href = "./emo_ordi.css";
        currentTheme = "emo";
    }
});
