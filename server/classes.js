class laundryCards {
    constructor() {
        this.cards = [];
        this.cards['socks'] = 0;
        this.cards['underwear'] = 0;
        this.cards['mittens'] = 0;
        this.cards['shorts'] = 0;
        this.cards['shirt'] = 0;
        this.cards['pants'] = 0;
        this.cards['jacket'] = 0;
        this.cards['hat'] = 0;
        this.cards['sweater'] = 0;
        this.cards['scarf'] = 0;
        this.cards['towel'] = 0;
        this.cards['swimsuit'] = 0;
        this.cards['dress'] = 0;
    }
};

class hand {
    constructor(name) {
        this.player = name;
        this.laundryCards = new laundryCards();
        this.score = 0;
    }
};

class user {
    constructor(id, name, socket) {
        this.id = id;
        this.name = name;
        this.socket = socket;

        this.game = -1;
        this.active = false;
        this.avatar = -1;
    }
};

class game {
    constructor(id) {
        this.game_id = id;
        this.players = filter(users, { game: toString(id) });
        this.gameOn = false;
        this.hands = new Array(4);
    }
};

module.exports = { laundryCards, hand, user, game };
