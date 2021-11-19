const Direction = Object.freeze({
    Forward: 0,
    Back: 1,
    Right: 2,
    Left: 3
})



class Gamer {
    constructor({ x, y, z, hp = 100, direction = {x:0, y:0, z:0} }) {
        this.hp = hp;
        this.x = x;
        this.y = y;
        this.z = z;
        this.direction = direction;
        
        this.firstTime = 0;
        this.secondTime = 0; 
        this.date = new Date();
    }

    move(direction, speed) {
        switch (direction) {
            case Direction.Forward: {
                this.x++;
            }
            case Direction.Back: {
                this.x--;
            }
            case Direction.Right: {
                this.z++;
            }
            case Direction.Left: {
                this.z--;
            }
        }
    }

    

    setFirsTime() {
        this.firstTime = new Date;
    }

    /*firstTime() {
        this.setTime = date.getTime();
    }*/

    getTime() {
        this.secondTime = new Date;
        const time = this.secondTime - this.firstTime;
        this.secondTime = 0;
        this.firstTime = 0;
        return `${ Math.floor(time / 60000) } min ${ Math.floor(time / 1000) } sec  ${time % 1000} ms`;
    }


}

module.exports = Gamer;