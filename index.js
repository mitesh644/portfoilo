$(document).ready(function () {
    $("#menubar").click(function () {
        $(".navigationlinkspart").slideToggle();
        // .slideToggle()
    })
    $(".btnbanner1about").click(function () {
        $("#btn").slideToggle();
        // .slideToggle()
        let btn = document.querySelector(".btnbanner1about").innerHTML = "learn more";
    })
    if (btn == "learn more") {
        $(".btnbanner1about").text("learn less")
    }
})

window.addEventListener("scroll", function () {
    console.log("page x " + window.pageXOffset)
})
let topbtn = document.getElementById("topbtn")
let topbtn2 = document.getElementById("topbtn2")
window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
        topbtn.style.opacity = "1";
        topbtn2.style.opacity = "1";
    } else {
        topbtn.style.opacity = "0";
        topbtn2.style.opacity = "0";
    }
})
function thorw(id) {
    document.getElementById(id).innerHTML = "";
}
function resetbtn() {
    document.getElementById("name").innerHTML = "";
    document.getElementById("lname").innerHTML = "";
    document.getElementById("textmessge").innerHTML = "";
}
function submitbtn() {
    let name = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;
    let email = document.querySelector("#mailinput").value;
    let number = document.querySelector("#numberinput").value;
    let text = document.querySelector("#textareainput").value;
    let value = true
    if (name == "") {
        document.querySelector("#fnameerror").innerHTML = "pelase enter your first name"
        value = false;
    }
    if (lname == "") {
        document.querySelector("#lnameerror").innerHTML = "pelase enter your last name"
        value = false;
    }
    if (email == "") {
        document.querySelector("#emailerror").innerHTML = "pelase enter your email address"
        value = false;
    }
    if (number == "") {
        document.querySelector("#numbererror").innerHTML = "pelase enter your mobile number"
        value = false;
    }
    if (text == "") {
        document.querySelector("#texterror").innerHTML = "pelase enter your  message"
        value = false;
    }
    if (value == true) {
        alert("thnaks vailde this form")
    }
}
function des(name, eduction, ...arg) {
    console.log(`hello ${name}, and ur study ${eduction} and ur marks`)
    let sum = 0;
    for (let i in arg) {
        sum += arg[i]
    }
    console.log(sum);
}
let arr = [20, 50, 30];
des("mitesh makwana", "b.com", ...arr)

class oop {
    constructor(studentname, studenteduction, studentage) {
        this.stdname = studentname;
        this.stdeduction = studenteduction;
        this.stdage = studentage;
        console.log("this is constructre method")
    }
    parth() {

        console.log(`hello ${this.stdname}and your study ${this.stdeduction} and ur age is ${this.stdage}`)

    }
    static staticMethod() {
        console.log("this is staic method")
    }
}

let kk = new oop("mitesh makwana", "B.com", 25);
kk.parth()
oop.staticMethod();
