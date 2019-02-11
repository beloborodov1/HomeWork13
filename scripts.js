var resource = new Resource;
var stock = new Resource;
var army = new Squad;

stock.add(8)
stock = stock.clone(10);

resource.add(6)
resource.restoreHealth(0);
resource.restoreDistance(0);
resource.isReadyToMove(10);
resource.isReadyToFight(100);
resource = resource.clone(10);


army.combineResources(stock);
army.combineResources(resource);
army.isReadyToMove(10);
army.isReadyToFight(1000);
army.getReadyToMoveResources(2,3);
armyClone = army.clone();

console.log(armyClone);
console.log(army);