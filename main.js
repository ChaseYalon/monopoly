class Property {
    constructor(name, color, price, housePrice, mortgageValue, rent, houses, mortgaged = false, ownedBy = null) {
        this.name = name;
        this.color = color;
        this.price = price;
        this.housePrice = housePrice;
        this.mortgageValue = mortgageValue;
        this.houses = houses;
        this.rent = rent[houses];
        this.mortgaged = mortgaged;
        this.ownedBy = ownedBy;
    }

    changeOwner(newOwner) {
        this.ownedBy = newOwner;
    }

    addHouses(number) {
        this.houses += number;
        this.rent = this.rent[this.houses];
    }

    sellHouses(number) {
        this.houses -= number;
        this.rent = this.rent[this.houses];
    }

    mortgage() {
        if (!this.mortgaged) {
            this.mortgaged = true;
            this.rent = 0;
        } else {
            console.log('Property is already mortgaged');
        }
    }

    unmortgage() {
        if (this.mortgaged) {
            this.mortgaged = false;
            this.rent = this.rent[this.houses];
        } else {
            console.log('Property is not mortgaged');
        }
    }
}

class Railroad extends Property {
    constructor(name, price, mortgageValue, mortgaged = false, ownedBy = null) {
        super(name, 'Railroad', price, null, mortgageValue, [25, 50, 100, 200], 0, mortgaged, ownedBy);
    }

    decideRent(railroadsOwned) {
        this.rent = Math.min(25 * Math.pow(2, railroadsOwned - 1), 200);
    }

    mortgage() {
        if (!this.mortgaged) {
            this.mortgaged = true;
            this.rent = 0;
        } else {
            console.log('Property is already mortgaged');
        }
    }

    unmortgage() {
        if (this.mortgaged) {
            this.mortgaged = false;
        } else {
            console.log('Property is not mortgaged');
        }
    }
}

class Utility extends Property {
    constructor(name, price, mortgageValue, mortgaged = false, ownedBy = null) {
        super(name, 'Utility', price, null, mortgageValue, [], 0, mortgaged, ownedBy);
    }

    decideRent(utilitiesOwned) {
        this.rentMultiplier = utilitiesOwned === 1 ? 4 : 10;
    }

    mortgage() {
        if (!this.mortgaged) {
            this.mortgaged = true;
            this.rentMultiplier = 0;
        } else {
            console.log('Property is already mortgaged');
        }
    }

    unmortgage() {
        if (this.mortgaged) {
            this.mortgaged = false;
        } else {
            console.log('Property is not mortgaged');
        }
    }
}


class Bot {
    constructor(cash = 1500, properties = [], location = 0, bankrupt = false) {
        this.cash = cash;
        this.properties = properties;
        this.location = location;
        this.bankrupt = bankrupt;
    }

    changeMoney(amount) {
        this.cash += amount;
    }
    changeLocation(roll) {
        this.location = (this.location + roll) % board.length;
        if (this.location + roll >= board.length) {
            this.cash += 200; // Pass Go
        }
    }
    roll(){
        return Math.floor(Math.random() * (6 - 1 + 1) + 1)+Math.floor(Math.random() * (6 - 1 + 1) + 1)
    }
    goBankrupt() {
        this.bankrupt = true;
        this.cash = 0;
        this.properties = [];
        this.location = null;
    }
    willBuyPropertey(/*HOW*/){
        console.error('you need to write the methods for the bot class')
    }
    willBuyHouse(/*HOW*/){
        //make sure you check it is not a utility or a railroad
        console.error('you need to write the methods for the bot class')
    }
    buyHouse(cost,propertey){
        console.error('you need to write the methods for the bot class')
    }
}

let bot1 = new Bot(1500, [], 0, false);
let bot2 = new Bot(1500, [], 0, false);
let bot3 = new Bot(1500, [], 0, false);
let bot4 = new Bot(1500, [], 0, false);

let turnBot = bot1; // For example, assign turnBot to bot1 to start with
var turnCount = 0;

var chances=[]
var communityChests=[]

function moveToNearest(bot, railroad) {
    if (railroad === true) {
        if (bot.location > 35 || bot.location < 5) {
            bot.changeLocation((5 - bot.location + 40) % 40);
        } else if (bot.location > 5 && bot.location < 15) {
            bot.changeLocation((15 - bot.location) % 40);
        } else if (bot.location > 15 && bot.location < 25) {
            bot.changeLocation((25 - bot.location) % 40);
        } else {
            bot.changeLocation((35 - bot.location) % 40);
        }
    } else {
        if (bot.location > 28 || bot.location < 12) {
            bot.changeLocation((12 - bot.location + 40) % 40);
        } else {
            bot.changeLocation((28 - bot.location) % 40);
        }
    }
}

var go = {
    bot1: true,
    bot2: true,
    bot3: true,
    bot4: true,
    propertey: function(turnBot) {
        if (turnCount === 0) {
    
        } else {
            turnBot.cash += 300;
        }
    }
};

var mediterranean = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('Mediterranean Avenue', 'Brown', 60, 50, 30, [2, 10, 30, 90, 160, 250], 0)
};

var communityChest1 = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: pickCard(false)
};

var baltic = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('Baltic Avenue', 'Brown', 60, 50, 30, [4, 20, 60, 180, 320, 450], 0)
};

var incomeTax = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: function() {
        chargeTax(200, turnBot);
    }
};

var reading = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Railroad('Reading Railroad', 200, 100)
};

var oriental = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('Oriental Avenue', 'Light Blue', 100, 50, 50, [6, 30, 90, 270, 400, 550], 0)
};

var chance1 = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: pickCard(true)
};

var vermont = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('Vermont Avenue', 'Light Blue', 100, 50, 50, [6, 30, 90, 270, 400, 550], 0)
};

var connecticut = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('Connecticut Avenue', 'Light Blue', 120, 50, 60, [8, 40, 100, 300, 450, 600], 0)
};

var jail = {
    justVisiting: {
        bot1: false,
        bot2: false,
        bot3: false,
        bot4: false,
    },
    inJail: {
        bot1: false,
        bot2: false,
        bot3: false,
        bot4: false,
    }
};

var stCharles = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('St. Charles Place', 'Pink', 140, 100, 70, [10, 50, 150, 450, 625, 750], 0)
};

var electric = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Utility('Electric Company', 150, 75)
};

var states = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('States Avenue', 'Pink', 140, 100, 70, [10, 50, 150, 450, 625, 750], 0)
};

var virginia = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('Virginia Avenue', 'Pink', 160, 100, 80, [12, 60, 180, 500, 700, 900], 0)
};

var pennsylvaniaRail = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Railroad('Pennsylvania Railroad', 200, 100)
};

var stJames = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('St. James Place', 'Orange', 180, 100, 90, [14, 70, 200, 550, 750, 950], 0)
};

var tennessee = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('Tennessee Avenue', 'Orange', 180, 100, 90, [14, 70, 200, 550, 750, 950], 0)
};

var newYork = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('New York Avenue', 'Orange', 200, 100, 100, [16, 80, 220, 600, 800, 1000], 0)
};

var freeParking = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: function(bot) {
        bot.cash += freeParkingPot;
        freeParkingPot = 500;
    }
};

var kentucky = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('Kentucky Avenue', 'Red', 220, 150, 110, [18, 90, 250, 700, 875, 1050], 0)
};

var chance2 = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: pickCard(true)
};

var indiana = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('Indiana Avenue', 'Red', 220, 150, 110, [18, 90, 250, 700, 875, 1050], 0)
};

var illinois = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('Illinois Avenue', 'Red', 240, 150, 120, [20, 100, 300, 750, 925, 1100], 0)
};

var bNo = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Railroad('B. & O. Railroad', 200, 100)
};

var atlantic = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('Atlantic Avenue', 'Yellow', 260, 150, 130, [22, 110, 330, 800, 975, 1150], 0)
};

var vetnor = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('Ventnor Avenue', 'Yellow', 260, 150, 130, [22, 110, 330, 800, 975, 1150], 0)
};

var water = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Utility('Water Works', 150, 75)
};

var marvin = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('Marvin Gardens', 'Yellow', 280, 150, 140, [24, 120, 360, 850, 1025, 1200], 0)
};

var goToJail = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: function() {
        if (turnBot === bot1) {
            sendToJail(bot1);
        } else if (turnBot === bot2) {
            sendToJail(bot2);
        } else if (turnBot === bot3) {
            sendToJail(bot3);
        } else if (turnBot === bot4) {
            sendToJail(bot4);
        }
    }
};


var pacific = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('Pacific Avenue', 'Green', 300, 200, 150, [26, 130, 390, 900, 1100, 1275], 0)
};

var northCarolina = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('North Carolina Avenue', 'Green', 300, 200, 150, [26, 130, 390, 900, 1100, 1275], 0)
};

var communityChest3 = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: pickCard(false)
};

var pennsylvania = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('Pennsylvania Avenue', 'Green', 320, 200, 160, [28, 150, 450, 1000, 1200, 1400], 0)
};

var short = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Railroad('Short Line', 200, 100)
};

var chance3 = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: pickCard(true)
};

var park = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('Park Place', 'Blue', 350, 200, 175, [35, 175, 500, 1100, 1300, 1500], 0)
};

var luxury = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: function() {
        chargeTax(75, turnBot);
    }
};

var boardw = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    propertey: new Property('Boardwalk', 'Blue', 400, 200, 200, [50, 200, 600, 1400, 1700, 2000], 0)
};
communityChests = [
    function() { onSquare(turnBot, board[0]); },
    function() { turnBot.changeMoney(200); },
    function() { chargeTax(-50, turnBot); },
    function() { turnBot.changeMoney(50); },
    function() { turnBot.changeMoney(50); },
    function() { sendToJail(turnBot); },
    function() { turnBot.changeMoney(100); },
    function() { turnBot.changeMoney(20); },
    function() { turnBot.changeMoney(30); },
    function() { turnBot.changeMoney(100); },
    function() { chargeTax(-100, turnBot); },
    function() { chargeTax(-50, turnBot); },
    function() { turnBot.changeMoney(25); },
    function() { turnBot.changeMoney(-40 * turnBot.houses); },
    function() { turnBot.changeMoney(10); },
    function() { turnBot.changeMoney(100); },
];

chances = [
    function() { onSquare(turnBot, board[39]); },
    function() { onSquare(turnBot, board[0]); },
    function() { onSquare(turnBot, board.indexOf(illinois)); },
    function() { onSquare(turnBot, board.indexOf(stCharles)); },
    function() { moveToNearest(turnBot, true); },
    function() { moveToNearest(turnBot, true); },
    function() { moveToNearest(turnBot, false); },
    function() { turnBot.changeMoney(-50); },
    function() { turnBot.changeMoney(50); },
    function() { turnBot.location -= 3; },
    function() { goToJail(turnBot); },
    function() { turnBot.changeMoney(-40 * turnBot.houses); },
    function() { chargeTax(15, turnBot); },
    function() { onSquare(turnBot, board.indexOf(reading)); },
    function() { chargeTax(150, turnBot); },
    function() { turnBot.changeMoney(150); },
];
console.log(chances)

console.log(communityChests);

// Ensure pickCard function is defined after the chances and communityChests arrays
function pickCard(chance) {
    if (chance === true) {
        // Use the length of the chances array to ensure the index is within bounds
        return chances[Math.floor(Math.random() * chances.length)];
    } else {
        // Use the length of the communityChests array to ensure the index is within bounds
        return communityChests[Math.floor(Math.random() * communityChests.length)];
    }
}
board = [
    go,
    mediterranean,
    communityChest1,
    baltic,
    incomeTax,
    reading,
    oriental,
    chance1,
    vermont,
    connecticut,
    jail,
    stCharles,
    electric,
    states,
    virginia,
    pennsylvaniaRail,
    stJames,
    tennessee,
    newYork,
    freeParking,
    kentucky,
    chance2,
    indiana,
    illinois,
    bNo,
    atlantic,
    vetnor,
    water,
    marvin,
    goToJail,
    pacific,
    northCarolina,
    communityChest3,
    pennsylvania,
    short,
    chance3,
    park,
    luxury,
    boardw
];
function sendToJail(bot) {
    onSquare(bot, jail.inJail);
}


function chargeTax(amount, bot) {
    freeParkingPot += amount;
    bot.cash -= amount;
}
function onSquare(bot, square) {
    if (square != null) {
        square.bot = false;
        bot.location = board.indexOf(square);
        square.bot = true;
    }
}
// Define the communityChests array before the chances array




function doTurn(turnBot) {
    /* 
    PHASE 1: 
    Bot(will buy propertey (bolean)){
        let bot buy propertey it is on
    }
    Bot(willBuyHouses(bolean)){
        let bot by houses or sell houses on propertey it is on
    }
    Bot(let bot pay to get out of jail(bolean)){
        you can pay 50 to get out of jail
    }
    */
   if(turnBot.willBuyPropertey()===true){
        turnBot.cash-=turnBot.location.propertey.price
        turnBot.properties+=turnBot.location.propertey
   }
   if(turnBot.willBuyHouse){
        if(turnBot.location.houses>=5){

        }else{
            //
            turnBot.cash-=turnBot.location.propertey.housePrice
            console.error('figure out how to spread the houses across the color group')
        }
   }//FIGURE OUT HOW TO DO JAIL
   //I think that roll system sucks, fix it later
   var roll=turnBot.roll()
   onSquare(turnBot,turnBot.location+roll)
   /*
    PHASE 2:
    Bot(roll){
        let bot roll (if doubles){
            (if in jail){
                bot out of jail, advace roll spaces, roll again
            } else {
                bot advaces roll spaces and rolls again
            } also {
                go to jail if 3 doubles
            }
        }
        else {
            advance roll spaces, if it is go to jail, go to jail, draw and execute chance/community chest, collect free parking
        }
        ALSO PAY RENT
        end
    }
    */
}


