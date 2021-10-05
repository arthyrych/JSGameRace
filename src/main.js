// returns a random number between min and max (both included)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};


// creating a class
function Car (x, y, id) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.draw();
};


// creating a draw method
Car.prototype.draw = function () {

    // taking location of the car img
    let carHtml = '<img src="../gameRace/img/car.png">';

    this.carElement = $(carHtml);

    this.carElement.css({
        position : 'absolute',
        left: this.x,
        top : this.y
    })

    // appearing the car img on the page
    $('body').append(this.carElement);
};


// creating a moving object right method
Car.prototype.moveRight = function () {

    // moving for a random number between inputs
    this.x += getRndInteger(0, 5);

    this.carElement.css({
    left : this.x,
    top : this.y
    });


    // stopping the race if any car crossed the finish
    if (this.x >= 1385) {
        stopRace();
        alert('The car ' + this.id + ' has won!');
    }
};


// creating cars and setting their positions (x and y) on the page
let firstCar = new Car(20, 130, 1);
let secondCar = new Car (20, 230, 2);


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

        firstCarInterval = setInterval(() => {
        firstCar.moveRight();
        }, 15);

        secondCarInterval = setInterval(() => {
        secondCar.moveRight();
        }, 15);
    }
};
    

// stopping a race between cars and reloading the page
function stopRace () {
    clearInterval(firstCarInterval);
    clearInterval(secondCarInterval);
    location.reload();
    return false;
};
