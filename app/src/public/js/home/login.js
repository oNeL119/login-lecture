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
    

    fetch("/login", {
        method : "POST",

        //JSON타입이라고 알려준다.
        headers : {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body :JSON.stringify(req),
    })
    .then((res) => res.json())
    .then(console.log);
    //{

            // if(res.success) {
            //     location.href = "/";
            // } else{
            //     alert(res.msg);
            // }
   // })
        // .catch((err) => {
        //     console.error("로그인 에러");
        // });
}
