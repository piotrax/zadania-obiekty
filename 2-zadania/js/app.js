const spaceShip = {
    name: "Enterprise",
    currentLocation: "Earth",
    flyDistance: 0,
    flyTo(place, distance){
      this.currentLocation = place;
      this.flyDistance += distance;
    },
    showInfo(){
      console.log("Informacje o statku:\n--------------------\nStatek " + this.name);
      console.log("doleciał do miejsca " + this.currentLocation);
    },
    meetClingon(){
        let x = 0;
        for(let i = 0; i < 100; i++){
          x += Math.floor((Math.random() * 2));
        }
        if (x>50){
          console.log("Statek " + this.name + " będący w okolicy " + this.currentLocation + " zwycięsko wyszedł ze spotkania z Klingonami")

        } 
        else {
          console.log("Statek " + this.name + " będący w okolicy " + this.currentLocation + " został pokonany przez Klingonów")
        } 
  }
}

function skrypt(){
    spaceShip.showInfo();
    spaceShip.meetClingon();
  }
  
