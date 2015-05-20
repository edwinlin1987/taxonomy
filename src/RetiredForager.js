var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.color = 'grey';
  this.treasureChest = [];
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
RetiredForagerBee.prototype.job = 'gamble';
RetiredForagerBee.prototype.canFly = false;
RetiredForagerBee.prototype.forage = function () {
  return 'I am too old, let me play cards instead';
}
RetiredForagerBee.prototype.gamble = function (value) {
  this.treasureChest.push('treasure');
  console.log(this.treasureChest);
};





