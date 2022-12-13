const adj1Arr = ['Debonair', 'Enthusiastic', 'Hollow', 'Outrageous', 'Shaggy', 'Little'];
const name1Arr = ['Jacob', 'Alfie', 'Ibraheem', 'Jimmy', 'Seth', 'Shawn'];
const adj2Arr = ['tired', 'wise', 'wonderful', 'confused', 'mighty', 'voracious'];
const name2Arr = ['Penelope', 'Demi', 'Flora', 'Lexi', 'Amelia', 'Claudia'];
const placeMetArr = ['the shops', 'the pub', 'the coffee shop', 'the aquarium', 'the zoo', 'the toilets'];
const activityArr = ['play dodgeball', 'watch a movie', 'throw some shapes', 'make pottery bowls', 'build lego', 'smash avocados'];
const heWoreArr = ['bright red shoes', 'a leather vest', 'fish shaped gloves', 'a very large hat', 'fishnets', 'a tuxedo'];
const sheWoreArr = ['a sparkly skirt', 'platform boots', 'a stylish wooly jumper', 'a baseball cap', 'a mask', 'a wristwatch'];
const heDidArr = ['went bike riding', 'drank some Baileys', 'played guitar', 'watched a film', 'made a cup of tea', 'started a fire'];
const sheDidArr = ['looked at her phone', 'went horse riding', 'went swimming', 'made a cake', 'played with a puppy', 'hailed a taxi'];
const consequenceArr = ['the sun came out', 'the pasta boiled over', 'the car crashed into the wall', 'the food burnt to the pan', 'the author finished the book', 'they both won the lottery'];
const worldSaidArr = ['phew', 'I love it', 'what a time to be alive', "that's awful", "we're so happy", "that's amazing"];

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const adj1 = randomElement(adj1Arr);
const name1 = randomElement(name1Arr);
const adj2 = randomElement(adj2Arr);
const name2 = randomElement(name2Arr);
const placeMet = randomElement(placeMetArr);
const activity = randomElement(activityArr);
const heWore = randomElement(heWoreArr);
const sheWore = randomElement(sheWoreArr);
const heDid = randomElement(heDidArr);
const sheDid = randomElement(sheDidArr);
const consequence = randomElement(consequenceArr);
const worldSaid = randomElement(worldSaidArr);

console.log(`${adj1} ${name1} met ${adj2} ${name2} at ${placeMet} to ${activity}.`);
console.log(`He wore ${heWore}.`);
console.log(`She wore ${sheWore}.`);
console.log(`He ${heDid}.`);
console.log(`She ${sheDid}.`);
console.log(`And the consequence was, ${consequence}.`);
console.log(`And the world said "${worldSaid}".`);