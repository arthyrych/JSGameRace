// returns a random number between min and max (both included)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};


// creating constructor
function Car (x, y) {
    this.x = x;
    this.y = y;
    this.draw();
};


// creating a draw method for our objects
Car.prototype.draw = function () {

    // taking location of the car img
    let carHtml = '<img src="../race/img/car.png">';

    this.carElement = $(carHtml);

    this.carElement.css({
        position : 'absolute',
        left: this.x,
        top : this.y
    })

    // appearing the car img on the page
    $('body').append(this.carElement);
};


// moving object right
Car.prototype.moveRight = function () {

    if (this.x >= 1390) {

        alert('The car' + this.name + 'won!');
        location.reload();
        return false;

    } else {
        // moving for a random number between inputs
        this.x += getRndInteger(0, 5);

        this.carElement.css({
        left : this.x,
        top : this.y
    });
    }
};


// creating cars and setting theirs positions x and y on the page
let firstCar = new Car(20, 130);
let secondCar = new Car (20, 230);


// var to check if the race was started
let raceIsStarted = false;


// starting a race between cars
function startRace () {

    // checking if the race was started
    if (raceIsStarted) {
        return;

    // starting if the race was not started
    } else {

        raceIsStarted = true;

        setInterval(() => {
        firstCar.moveRight();
        }, 15);

        setInterval(() => {
        secondCar.moveRight();
        }, 15);
    }
};
    

// stopping a race between cars
function stopRace () {
    location.reload();
    return false;
};