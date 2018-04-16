const OrderedDeck = [
    {name: 'shoe', id: 0}, {name: 'shoe', id: 0}, {name: 'shoe', id: 0}, {name: 'shoe', id: 0},
    {name: 'mitten', id: 1}, {name: 'mitten', id: 1}, {name: 'mitten', id: 1}, {name: 'mitten', id: 1},
    {name: 'sock', id: 2}, {name: 'sock', id: 2}, {name: 'sock', id: 2}, {name: 'sock', id: 2},
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

module.exports = () => {
    let newDeck = OrderedDeck.map(card => ({...card})); // This creates a deep copy of the above deck
    shuffleDeck(newDeck);
    return newDeck;
};

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
