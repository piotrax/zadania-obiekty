const book = {
    users: [{"name": null, "age": 0, "phone": null}],
    addUser(name, age, phone){
        let user = {
          "name": name,
          "age": age,
          "phone": phone
         }
        this.users.push(user);
    },
    showUsers(){
        console.log("Wszyscy użytkownicy w książce");
        for(let i = 1; i < this.users.length; i++){
          console.log(`imię: ${this.users[i].name} ; wiek: ${this.users[i].age} ; tel: ${this.users[i].phone}`);
        }
    },
    findByName(name){
        let user = this.users.find(user => user.name === name);
        if(user){
           console.log(`wynik wyszukiwania wg imienia:\nimię: ${user.name}, wiek: ${user.age}, tel: ${user.phone}`);
        }
        else console.log(`brak osób o imieniu ${name}`);
    },
    findByPhone(phone){
        let user = this.users.find(user => user.phone === phone);
        if(user){
          console.log(`wynik wyszukiwania wg nr tel:\nimię: ${user.name}, wiek: ${user.age}, tel: ${user.phone}`);
        }
        else console.log(`brak osób o nr tel. ${phone}`);
    },
    getCount(){
      console.log(`ilość osób w bazie: ${this.users.length - 1}`);
    }
}

function skrypt(){
 book.addUser("Anna", 22, "872328732987");
 book.addUser("Beata", 33, "87688576575");
 book.addUser("Cezary", 53, "33987587457");                 
 book.showUsers();
 book.findByName("Piotr");
 book.findByPhone("0872328732987");
 book.getCount();
}
