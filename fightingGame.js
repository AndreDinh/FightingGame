
var fighter = function(name,block,damage,health){
  this.name = name;
  this.block = block;
  this.damage = damage;
  this.health = health;

  this.report = function(){
    return this.name+ " has "+this.health+" hp ";
};
  this.fight = function() {
    if(this.block > (Math.random() * 10)) {
      this.health -= this.damage;
      console.log(this.name + " was damaged!")
    }else{
    console.log(this.name + " blocked!!!")
  }
};
}
var dead = 0,
    player1 = new fighter("Ryu",9.5,3,60),
    player2 = new fighter("Ken",20,3,32);

while (player1.health >= dead && player2.health >= dead){
  player1.fight();
  player2.fight();
}
if(player1.health > player2.health){
  loser = player2.name;
}else{
  loser = player1.name;
}

console.log(loser);
console.log(player1.report());
console.log(player2.report());
