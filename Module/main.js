const Tiger = require('./Tiger');
const Wolf = require('./Wolf');

const fight = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
        return tiger.growl();
    }
    if (wolf.strength > tiger.strength) {
        return wolf.howl();
    }
    return 'Harimau dan serigala sama-sama kuat!';
};

const myTiger = new Tiger();
const myWolf = new Wolf();

const result = fight(myTiger, myWolf);