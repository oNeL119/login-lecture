"use strict";

const user = {
    id : ["kjy95613", "oNeL"],
    pwd : ["1234", "123456"],
};

const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    
    login : (req, res) => {
        res.render("home/login");
    },
}

const process = {
    login : (req, res) =>{
        const id = req.body.id,
            pwd = req.body.pwd;

            if(user.id.includes(id)){
                const idx = user.id.indexOf(id);
                if(user.pwd[idx] === pwd){
                    return res.json({
                        success: true,
                    });
                }
            }
            return res.json({
                success: false,
                msg: "로그인에 실패하셨습니다.",
            });
    },
};

//컨트롤러


module.exports = {
    output,
    process,
}