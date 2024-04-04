class Grass {
    constructor(x, y) {
        this.multiply = Math.round(random(0, 8));
        this.speed = 8;
        this.x = x;
        this.y = y;
        matrix[this.y][this.x] = 1;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak() {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 0) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak());
        ////(norVandak, this.multiply);
        if (this.multiply >= this.speed && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }
}
class xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.kerac = 0;
        this.energy = 15;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(inchmangal) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == inchmangal) {
                    found.push(this.directions[i]);
                }
            }
        }
        this.energy--;
        return found;
    }
    utel(){
        var a = random(this.yntrelVandak(1));
        if(a){
            matrix[a[1]][a[0]] = 2;
            this.kerac++;
            this.energy = 5;
            matrix[this.y][this.x] = 0;
            this.x = a[0];
            this.y = a[1];
            for (var i in grassArr){
                if(grassArr[i].x == this.x && grassArr[i].y == this.y){
                    grassArr.splice(i, 1);
                }
            }
            //("utel");            
        }
        return a;
    }
    sharjvel(){
        var a = random(this.yntrelVandak(0));
        if(a && !(this.utel())){
            matrix[a[1]][a[0]] = 2;
            this.kerac = 0;
            matrix[this.y][this.x] = 0;
            this.x = a[0];
            this.y = a[1];
        }
    }
    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        if (this.kerac >= 5 && norVandak) {
            var Xotaker1 = new xotaker(norVandak[0], norVandak[1]);
            xotakerArr.push(Xotaker1);
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.kerac = 0;
            this.sovac = 0;
            //(1);
        }
    }
    mahanal(){
        if(this.energy <= 0){
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr){
                if(xotakerArr[i].x == this.x && xotakerArr[i].y == this.y){
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
            //("MAH");
        }
    }
}
class gishatich {
    constructor(x, y) {
        this.speed = Math.round(random(0,8));
        this.x = x;
        this.y = y;
        this.sovac = 0;
        this.kerac = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(inchmangal) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == inchmangal) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    utel(){
        this.speed++;
        var a = random(this.yntrelVandak(2));
        if(a && this.speed % 8 == 0){
            matrix[a[1]][a[0]] = 3;
            this.sovac = 0;
            this.kerac++;
            matrix[this.y][this.x] = 0;
            this.x = a[0];
            this.speed = 0;
            this.y = a[1];
            for (var i in xotakerArr){
                if(xotakerArr[i].x == this.x && xotakerArr[i].y == this.y){
                    xotakerArr.splice(i, 1);
                }
            }
            //("utel");            
        }
        return a;
    }
    sharjvel(){
        this.speed++;
        var a = random(this.yntrelVandak(0));
        if(a && !(this.utel()) && this.speed % 8 == 0){
            matrix[a[1]][a[0]] = 3;
            this.sovac++;
            this.kerac = 0;
            matrix[this.y][this.x] = 0;
            this.x = a[0];
            this.y = a[1];
            this.speed = 0;
        }
    }
    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        if (this.kerac >= 4 && norVandak) {
            var gishatich1 = new gishatich(norVandak[0], norVandak[1]);
            xotakerArr.push(gishatich1);
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.kerac = 0;
            this.sovac = 0;
            //(1);
        }
    }
    mahanal(){
        var Vandak = [this.x, this.y];
        if(this.sovac >= 4){
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr){
                if(gishatichArr[i].x == this.x && gishatichArr[i].y == this.y){
                    gishatichArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}
class water {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(inchmangal) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == inchmangal) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mah(){
        var arr = this.yntrelVandak(1);
        if(arr.length > 3){
            matrix[this.y][this.x] = 0;
            for (var i in waterArr){
                if(waterArr[i].x == this.x && waterArr[i].y == this.y){
                    waterArr.splice(i, 1);
                    break;
                }
            }
        }
        
    }
    utel(){
        var a = this.yntrelVandak(5);
        for(var i in a){
            matrix[a[i][1]][a[i][0]] = 4;
            for (var y in fireArr){
                if(fireArr[y].x == this.x && fireArr[y].y == this.y){
                    fireArr.splice(i, 1);
                    break;
                }
            }
            var wt = new water(a[i][0], a[i][1]);
            waterArr.push(wt);
        }
        return a;
    }
    sharjvel(){
        var a = random(this.yntrelVandak(0));
        if(a){
            matrix[a[1]][a[0]] = 4;
            this.sovac++;
            this.kerac = 0;
            matrix[this.y][this.x] = 0;
            this.x = a[0];
            this.y = a[1];
        }
    }   
}
class fire{
    constructor(x, y){
        this.energy = 3;
        this.x = x;
        this.y = y;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(inchmangal) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if(matrix[y][x] == inchmangal){
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    utel(){
        var a = this.yntrelVandak(1);
        for(var i in a){
            matrix[a[i][1]][a[i][0]] = 5;
            var fire1 = new fire(a[i][0], a[i][1]);
            fireArr.push(fire1);
            for (var y in grassArr){
                if(grassArr[y].x == a[i][0] && grassArr[y].y == a[i][1]){
                    grassArr.splice(y, 1);
                }
            }
        }
        var a = this.yntrelVandak(2);
        for(var i in a){
            matrix[a[i][1]][a[i][0]] = 5;
            var fire1 = new fire(a[i][0], a[i][1]);
            fireArr.push(fire1);
            for (var y in xotakerArr){
                if(xotakerArr[y].x == a[i][0] && xotakerArr[y].y == a[i][1]){
                    xotakerArr.splice(y, 1);
                }
            }
        }
        var a = this.yntrelVandak(3);
        for(var i in a){
            matrix[a[i][1]][a[i][0]] = 5;
            var fire1 = new fire(a[i][0], a[i][1]);
            fireArr.push(fire1);
            for (var y in gishatichArr){
                if(gishatichArr[y].x == a[i][0] && gishatichArr[y].y == a[i][1]){
                    gishatichArr.splice(y, 1);
                }
            }
        }
    }
    mah(){
        this.energy--;
        if(this.energy <= 0){
            matrix[this.y][this.x] = 0;
            for(var i in fireArr){
                if(fireArr[i].x == this.x && fireArr[i].y == this.y){
                    fireArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}



