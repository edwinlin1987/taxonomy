var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.job = 'make honey';
HoneyMakerBee.prototype.honeyPot = 0;

HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot--;
}

