import {User} from "../models/userModel.js";

let userList = [];

// Essa função registra um usuário comum

function userRegister(name, email, password, username){
    let newUser = new User(name, email, password, username);
    userList.push(newUser);
    return newUser;
}

// Essa função utiliza do encapsulamento para exportar a lista de usuários para outros arquivos. Sendo assim, ela não poderá ser diretamente editada, mas seus dados serão encontrados.

function exportUserList(){
    return userList
}

export {userRegister , exportUserList};