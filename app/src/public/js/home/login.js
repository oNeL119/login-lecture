"use strict";


const id = document.querySelector('#id'),
    pwd = document.querySelector('#pwd'),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        pwd : pwd.value,
    };
    console.log(req);

    fetch("/login", {
        method : "POST",

        //JSON타입이라고 알려준다.
        headers : {
            "Content-Type": "application/json",
        },
        body :JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {

        });
}
