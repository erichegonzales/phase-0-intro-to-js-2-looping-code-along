// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped a ${gifts[i]} and added a bow!`)
    }
    return gifts;
}

wrapGifts(gifts);

const arrayMessages = [];

function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        const message = `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
        arrayMessages.push(message);
    }
    return arrayMessages;
};

function countDown(count) {
    while (count > -1) {
        console.log(count);
        count--;
    }
}



