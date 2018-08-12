export class User{

    constructor(public name:string ,public email:string,public password:string, public contactno:number, public favbook:string){
        this.name = name;
        this.email = email;
        this.password = password;
        this.contactno = contactno; 
        //this.favbook=favbook;    
    }

}