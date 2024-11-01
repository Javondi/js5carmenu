

//class car
    //make
    //model
class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
}

//class menu
class Menu{
    constructor(){
        this.cars = [];
    }

    //menu to show
    showMainMenu(){
        return prompt(`
        main menu:
        ----------
        0) Exit menu
        1) Add car
        2) Delete car
        3) View all cars
        `)
    }


    //add car
    addCar(){
        let carMake = prompt("enter car make");
        let carModel = prompt("enter car model");
        this.cars.push(new Car(carMake, carModel));
    }

    //delete cars
    deleterCar(){
        let carIndex = prompt("enter car index to delete");
        this.cars.splice(carIndex, 1);}

        //view cars
    viewCars(){
        let displayCars = '';
        for (let i= 0; i < this.cars.length; i++){
            displayCars += `
            ${i}${this.cars[i].make} ${this.cars[i].model}`
        }

        alert(`car inventory:
            ${displayCars}`);
    }

    //menu pop up

    showMainMenu(){
        return prompt(`
        main menu:
        ----------
        0) Exit menu
        1) Add car
        2) Delete car
        3) View all cars
        `)
    }

    start(){
        let selection = this.showMainMenu();
        while(selection !== 0){
            switch(selection){
                case "1": this.addCar();
                break;
                case "2": this.deleterCar();
                break;
                case "3": this.viewAllCars();
                break;
                default: selection = 0;
        }
        selection = this.showMainMenu();
    }
    alert("exiting menu")
    }



};

//menu and invoke the start method

let menu = new Menu();

menu.start();
