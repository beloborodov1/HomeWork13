function Squad(){
    this.units = [];
}

Squad.prototype.combineResources = function (arr){
    this.units = arr.concat(this.units)
}

Squad.prototype.isReadyToMove = function (distance){
    for (var i = 0; i < this.units.length; i++){
        if (distance > this.units[i].distance)
            console.log( this.units[i].name + ' is looser')
    }
}

Squad.prototype.isReadyToFight = function (damage){
    for (var i = 0; i<this.units.length; i++)
        if (this.units[i].health < damage)
            console.log(this.units[i].name + ' NOT READY') 
}

Squad.prototype.restoreHealth = function (i){
    this.units[i].health = this.units[i].Resource.maxHealth
}

Squad.prototype.restoreDistance = function (i){
    this.units[i].distance = this.units[i].Resource.maxDistance
}

Squad.prototype.isReadyToFight = function (damage){
    for (var i = 0; i<this.units.length; i++)
        if (this.units[i].health < damage)
            console.log(this.units[i].name + ' NOT READY')
}

Squad.prototype.restoreHealthAndDistance = function (i){
    this.units[i].health = this.units[i].Resource.maxHealth
    this.units[i].distance = this.units[i].Resource.maxDistance
}

//как понял так и сделал
Squad.prototype.getReadyToMoveResources = function (i,j){
    var temp = this.units[0];    
    this.units[0] = this.units[i];
    this.units[i] = temp;
    var temp = this.units[1];
    this.units[1] = this.units[j];
    this.units[j] = temp;
}

Squad.prototype.clone = function (){
    var temp = [];
    for (var i = 0; i < this.units.length; i++)
        temp[i] = this.units[i];
    return temp;
}
