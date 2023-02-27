class Author {
constructor(name,email, gender){
        this.name = name
        this.email = email
        this.gender = gender
    }

    get name(){
      return this._name
    }

    set name(value){
     this._name = value;
    }

    get email(){
      return this._email
    }

    set email(value){
      this._email = value;
    }

    get gender(){
      return this._gender;
    }

    set gender(value){
      this._gender = value;
    }
}

let author = new Author("Gago","GAgoMail","male" );

author.name = "asd";
author.email = "dsa";
author.gender = "female";

console.log(author.name,author.gender,author.email)

