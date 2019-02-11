function random (min,max){
    return Math.round(Math.random()*(max-min)+min)
}

Resource.type =[
    {
    type:'soldar',
    maxHealth:100,
    maxDistance:5,
    },
    {
    type: 'Horse',
    maxHealth:1001,
    maxDistance:51,
    },
    {
    type: 'cars',
    maxHealth:10002,
    maxDistance:502,
    }
]

function Resource(){
    this.units = [];
}

Resource.prototype.add = function (j){
    for(var i = 0; i<j ; i++){
        var r = random (0,2)
        this.units.push({
        Resource: Resource.type[r],
        name: Resource.type[r].type + ' ' +[i],
        health: random(0,Resource.type[r].maxHealth),
        distance: random(0,Resource.type[r].maxDistance)
    });}
}

Resource.prototype.isReadyToMove = function (distance){
    for (var i = 0; i < this.units.length; i++){
        if (distance > this.units[i].distance)
            console.error( this.units[i].name + ' Tired(')
    }
}

Resource.prototype.isReadyToFight = function (damage){
    for (var i = 0; i<this.units.length; i++)
        if (this.units[i].health < damage)
            console.error(this.units[i].name + ' NOT READY') 

}

Resource.prototype.restoreHealth = function (i){
    this.units[i].health = this.units[i].Resource.maxHealth
}

Resource.prototype.restoreDistance = function (i){
    this.units[i].distance = this.units[i].Resource.maxDistance
}

Resource.prototype.clone = function (j) {
        var readyResource = [];
        for ( var i = 0; i < this.units.length; i++)
            if (j < this.units[i].distance)
                readyResource.push(this.units[i])
        return readyResource;
}

