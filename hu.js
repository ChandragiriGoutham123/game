const hi = document.getElementById("main")
const checkbox = document.getElementById("butto");
const warning = document.getElementById("his");
const playit = document.getElementById("play");
const stopit = document.getElementById("stop");
const logoutit = document.getElementById("logout")
const warn = document.getElementById("para");
checkbox.addEventListener("click", checkboxClick, false);
playit.addEventListener("click", playthegame, false);
stopit.addEventListener("click", stopthegame, false);
logoutit.addEventListener("click", logoutthegame, false);


function checkboxClick(event) {
    event.preventDefault();
    const name = document.getElementById("exampleInput1");
    const email = document.getElementById("exampleInputName");
    const password = document.getElementById("exampleInputNumber1");
    if (name.value === "" || email.value === "" || password.value === "") {
        warning.textContent = "*Enter valid details";
    } else {
        warning.textContent = "";
        hi.classList.add("d-none")
        sub.classList.remove("d-none")
        warn.textContent = "Welcome " + name.value;



    }


}

function playthegame() {
    str.classList.add("d-none")
    gif.classList.remove("d-none")
}

function stopthegame() {
    gif.classList.add("d-none")
    str.classList.remove("d-none")
}

function logoutthegame() {
    warn.textContent = "";

    sub.classList.add("d-none");
    main.classList.remove("d-none");
    warn.textContent = "Welcome<br>" + name.value;

}
