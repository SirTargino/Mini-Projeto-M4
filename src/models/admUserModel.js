import {User} from "./userModel.js";

class Adm extends User{
    constructor(name, email, password, username, adm){
        super(name, email, password, username);
        this.adm = adm;
    }
}

export {Adm}