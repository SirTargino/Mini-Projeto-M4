import {Adm} from "../models/admUserModel.js";
import { exportUserList } from "./userController.js";

let admList = [
    {
        name: "João Targino",
        email: "joaotargino@gmail.com",
        password: "joao123",
        username: "joaotargino",
        adm: true
    }
];

let userList = exportUserList();

// Essa função registra os administradores. Ela só pode ser executada por um administrador

function admRegister(admemail, admpassword, name, email, password, username, adm){
    let emailsAdm = admList.map(adm => adm.email)
    let loginAdm = emailsAdm.indexOf(admemail);
    if(loginAdm == -1){
        return console.log("Os dados informados não pertencem a um administrador!")
    }else if(admList[loginAdm].password == admpassword){
        let newAdm = new Adm(name, email, password, username, adm);
        admList.push(newAdm);
        return newAdm;
    }else{
        return console.log("Senha incorreta!")
    }
}

// Essa função procura um usuário pelo seu e-mail, username ou nome. Essa rota só terá o retorno desejado se chamada por um Admin. Para isso é feita uma verificação dos dados.

function userSearch(email, password, data, value){
    let emailsAdm = admList.map(adm => adm.email)
    let loginAdm = emailsAdm.indexOf(email);
    if(loginAdm == -1){
        return console.log("Os dados informados não pertencem a um administrador!")
    }else if(admList[loginAdm].password == password){
        let dataMin = data.toLowerCase();
        let valueMin = value.toLowerCase()
        if(dataMin == "name"){
            let findUser = userList.filter(user => user.name.toLowerCase().includes(valueMin));
            return findUser;
        }else if(dataMin == "username"){
            let findUser = userList.filter(user => user.username.toLowerCase().includes(valueMin));
            return findUser;
        }else if(dataMin == "email"){
            let findUser = userList.filter(user => user.email.toLowerCase().includes(valueMin));
            return findUser;
        }else{
            return console.log("A pesquisa não encontrou resultados! Confira os dados e tente novamente. Tente procurar por name, username ou e-mail.")
        }
    }else{
        return console.log("Senha incorreta!")
    }
}

export {admRegister, userSearch};