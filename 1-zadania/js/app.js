const prod1 = {
  name: "XYZ",
  price: 10,
  weight: 3.3
}

const prod2 = {
  name: "ABC",
  price: 22,
  weight: 1.4
}

const currentUser = {
  name: "Jan",
  surname: "Kowalski",
  email: "jankowalski@email.com",
  www: "www.jkowalski.pl",
  userType: "user",
  show(){
    console.log("Imię: " + this.name);
    console.log("Nazwisko: " + this.surname);
    console.log("email: " + this.email);
    console.log("www: " + this.www);
    console.log("typ użytkownika: " + this.userType);
  }
}

const book = {
  title: "W pustyni i w puszczy",
  author: "Henryk Sienkiewicz",
  pageCount: 345,
  publisher: "Wydawnictwo Edytor",
  showDetails: function(){
    for(let prop in book){
      propValue = book[prop]
      console.log(prop + ": " + propValue);
    }
  }
}

Object.defineProperty(book, 'showDetails', { enumerable: false });

function skrypt(){
  document.getElementById("prod1").textContent = prod1.name;
  document.getElementById("prod2").textContent = prod2.name;
  document.getElementById("suma").textContent = prod1.price + prod2.price;
  document.getElementById("waga").textContent = (prod1.weight + prod2.weight).toFixed(1)
  currentUser.show();
  book.showDetails();
}


