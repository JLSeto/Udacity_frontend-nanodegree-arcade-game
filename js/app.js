var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
    this.x = -101;
    this.y = randomEnemies();
    console.log(this.y);
    this.speed = 300;
};

var randomEnemies = function() {
  var set = [41.5, 93, 124.5, 166];
  var rndm =  Math.floor(Math.random()*4);
  return set[rndm];
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed*dt;
    if(this.x>505){
      this.x=-101;
    }
    else{
      this.x++;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var player = function() {
  this.sprite = 'images/char-boy.png';
  this.x =202; //0 is first column. 101 is 2nd.
  this.y = 373.5; //41.5 is middle of a row 41.5*9
};

player.prototype = Object.create(Enemy.prototype);
player.prototype.constructor = player;
player.prototype.update = function(){
  if(this.x>404 || this.x<0 || this.y>415 ||this.y<0){
    this.x=202;
    this.y = 373.5;
  }

};
player.prototype.handleInput = function(keys){
  switch(keys){
    case 'up':
      this.y -=83;
      break;
    case 'down':
      this.y +=83;
      break;
    case 'left':
      this.x -=101;
      break;
    case 'right':
      this.x +=101;
      break;
  }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
allEnemies.push(new Enemy());
var player = new player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
