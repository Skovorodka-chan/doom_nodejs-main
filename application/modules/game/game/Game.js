const Gamer = require('./entities/Gamer');

class Game {

    constructor({ callbacks, db, name, id } = {}) {
        this.db = db;
        this.name = name;
        this.id = id;
        this.gamers = {};
        const { updateCb } = callbacks;
        this.updateCb = updateCb;
        // запустить игру
        const mainInterval = setInterval(() => this.update(), 1000);
    }

    moveGamer(direction, token) {
        this.gamers[token].move(direction);
    }

    getData() {
        let gamersCount = 0;
        for (let gamer in this.gamers) {
            gamersCount++;
        }
        return {
            name: this.name,
            gamersCount
        }
    }

    joinGame(token) {
        const x = Math.random();
        const y = Math.random();
        const z = Math.random();
        this.gamers[token] = new Gamer({ x, y, z });
        this.gamers[token].setFirsTime();
        return this.getScene();
    }
    
    leaveGame(token) {
        if (token in this.gamers) {
            const time =  this.gamers[token].getTime();
            delete this.gamers[token];
            return {result: true, data: time};
        }
        return {result: false};
    }

    die(gamer) {}

    respawn(gamer) {}

    shot(user, alphaV) {}
    //jump(user) {}

    getScene() {
        return {
            gamers: this.gamers
        };
    }

    getGameData() {
        // вернуть позиции игроков и выстрелов
        return null;
    }

    update() {
        // обсчитать изменения, произошедшие на арене (движение игроков и полёт пуль)
        // выяснить, кто помер, кого ударили, в кого что попало и т.д.
        this.updateCb(this.getGameData());
    }
}

module.exports = Game;