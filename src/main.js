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

        let carHtml = '<img src="../race/img/car.png">';

        this.carElement = $(carHtml);

        this.carElement.css({
            position : 'absolute',
            left: this.x,
            top : this.y
        })

        $('body').append(this.carElement);
    };


    // moving object right
    Car.prototype.moveRight = function () {

        this.x += getRndInteger(0, 5);
        this.carElement.css({
            left : this.x,
            top : this.y
        });
    };

/*      methods with other directions


    // moving object left
    Car.prototype.moveLeft = function () {

        this.x -= getRndInteger(0, 5);

        this.carElement.css({
            left : this.x,
            top : this.y
        });
    };


    // moving object up
    Car.prototype.moveUp = function () {

        this.y -= getRndInteger(0, 5);

        this.carElement.css({
            left : this.x,
            top : this.y
        });
    };


    // moving object down
    Car.prototype.moveDown = function () {

        this.y += getRndInteger(0, 5);

        this.carElement.css({
            left : this.x,
            top : this.y
        });
    };

*/


    let firstCar = new Car(20, 100);
    let secondCar = new Car (20, 200);

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
        }, 30);

        setInterval(() => {
            secondCar.moveRight();
        }, 30);

        }

    };
    

    // stopping a race between cars
    function stopRace () {
        location.reload();
        return false;
    };