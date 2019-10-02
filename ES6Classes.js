// ES6 Classes

class Character {
  static count = 0;

  constructor(
    xPosition = Math.floor(Math.random() * 10),
    yPosition = Math.floor(Math.random() * 10)
  ) {
    // Check to see if the class being created is "Character"
    if (new.target === Character)
      throw TypeError("New of abstract class Character");
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    Character.count++;
    console.log("Character created");
  }

  getLocation() {
    console.log(
      `Your character is at X: ${this.xPosition} and Y: ${this.yPosition}`
    );
  }

  setLocation(x, y) {
    try {
      if (x < 1 || y < 1 || x > 10 || y > 10) throw "Location out of bounds";
      else {
        this.xPosition = x;
        this.yPosition = y;
      }
    } catch (err) {
      console.log(err);
    }
  }

  static getCharacterCount() {
    console.log(Character.count);
  }
}

class PlayerCharacter extends Character {
  constructor(xPosition, yPosition) {
    super(xPosition, yPosition);
  }
}

class NonPlayerCharacter extends Character {
  constructor(xPosition, yPosition) {
    super(xPosition, yPosition);
  }
}
