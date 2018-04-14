const OrderedDeck = [
    {name: 'underwear', id: 0}, {name: 'underwear', id: 0}, {name: 'underwear', id: 0}, {name: 'underwear', id: 0},
    {name: 'mittens', id: 1}, {name: 'mittens', id: 1}, {name: 'mittens', id: 1}, {name: 'mittens', id: 1},
    {name: 'socks', id: 2}, {name: 'socks', id: 2}, {name: 'socks', id: 2}, {name: 'socks', id: 2},
    {name: 'shorts', id: 3}, {name: 'shorts', id: 3}, {name: 'shorts', id: 3}, {name: 'shorts', id: 3},
    {name: 'shirt', id: 4}, {name: 'shirt', id: 4}, {name: 'shirt', id: 4}, {name: 'shirt', id: 4},
    {name: 'pants', id: 5}, {name: 'pants', id: 5}, {name: 'pants', id: 5}, {name: 'pants', id: 5},
    {name: 'jacket', id: 6}, {name: 'jacket', id: 6}, {name: 'jacket', id: 6}, {name: 'jacket', id: 6},
    {name: 'hat', id: 7}, {name: 'hat', id: 7}, {name: 'hat', id: 7}, {name: 'hat', id: 7},
    {name: 'sweater', id: 8}, {name: 'sweater', id: 8}, {name: 'sweater', id: 8}, {name: 'sweater', id: 8},
    {name: 'scarf', id: 9}, {name: 'scarf', id: 9}, {name: 'scarf', id: 9}, {name: 'scarf', id: 9},
    {name: 'towel', id: 10}, {name: 'towel', id: 10}, {name: 'towel', id: 10}, {name: 'towel', id: 10},
    {name: 'swimsuit', id: 11}, {name: 'swimsuit', id: 11}, {name: 'swimsuit', id: 11}, {name: 'swimsuit', id: 11},
    {name: 'dress', id: 12}, {name: 'dress', id: 12}, {name: 'dress', id: 12}, {name: 'dress', id: 12}
];

function newDeck () {
    let newDeck = Array.of(...OrderedDeck);
    shuffleDeck(newDeck);
    return newDeck;


    /**
     * Randomize array element order in-place.
     * Using Durstenfeld shuffle algorithm.
     */
    function shuffleDeck(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
}

module.exports = {
    newDeck: newDeck()
};
