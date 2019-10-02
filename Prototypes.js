// Using Prototypes
let characterCount = 0;
function Character(
  xPosition = Math.floor(Math.random() * 10),
  yPosition = Math.floor(Math.random() * 10)
) {
  this.xPosition = xPosition;
  this.yPosition = yPosition;
  characterCount++;
  console.log("Character created");
}

Character.prototype.getLocation = function() {
  console.log(
    `Your character is at X: ${this.xPosition} and Y: ${this.yPosition}`
  );
};

Character.prototype.setLocation = function(x, y) {
  try {
    if (x < 1 || y < 1 || x > 10 || y > 10) throw "Location out of bounds";
    else {
      this.xPosition = x;
      this.yPosition = y;
    }
  } catch (err) {
    console.log(err);
  }
};

// Static method for getting Character count
Character.getCharacterCount = function() {
  console.log(characterCount);
};

// Create PlayerCharacter function
function PlayerCharacter(xPosition, yPosition) {
  Character.call(this, xPosition, yPosition);
}

// Inherit the Character prototype methods
PlayerCharacter.prototype = Object.create(Character.prototype);

// Make PlayerCharacter.prototype return PlayerCustomer()
PlayerCharacter.prototype.constructor = PlayerCharacter;

// Create NonPlayerCharacter function
function NonPlayerCharacter(xPosition, yPosition) {
  Character.call(this, xPosition, yPosition);
}

// Inherit the Character prototype methods
NonPlayerCharacter.prototype = Object.create(Character.prototype);

// Make NonPlayerCharacter.prototype return PlayerCustomer()
NonPlayerCharacter.prototype.constructor = NonPlayerCharacter;
