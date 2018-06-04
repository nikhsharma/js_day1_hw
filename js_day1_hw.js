// --------------------------
// Episode 1

var name = 'Bob';

var printName = function() {
  console.log('My name is ' + name );
};

// printName();
// This will print out 'My name is Bob' as name is a global variable
// --------------------------




// --------------------------
// Episode 2

score = 5;

var result = function() {
  var score = 3;
  return score;
};

// console.log(result());
// This will print out 3, as it's redefined within the same function that returns it.
// --------------------------




// --------------------------
// Episode 3
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

// listAnimals();
// This will print out:
// '1: ducks'
// '2: Dogs'
// '3: Lions'
// because myAnimals is redefined within the function.
// --------------------------




// --------------------------
// Episode 4
var suspectOne = 'Ally';
var suspectTwo = 'Alan';
var suspectThree = 'Upul';
var suspectFour = 'Alistair';

var allSuspects = function() {
  var suspectThree = 'Colin'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

// allSuspects();
// console.log( 'Suspect three is:' + suspectThree );
// This will print out:
// 'Suspects include: Ally, Alan, Colin, Alistair'
// 'Suspect three is: Upul'
// because 3 is redefined only within allSuspects()
// --------------------------

// --------------------------
// Episode 5

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

// console.log(detectiveInfo());
// This will print out 'Poirot' because the name is redefined within detectiveInfo(), which calls printName()
// --------------------------


// --------------------------
// Episode 6
var murderer = 'Rick';

var outerFunction = function() {
    var murderer = 'Morty';

  var innerFunction = function() {
    murderer = 'Jerry';
  }

  innerFunction();
}

outerFunction();
// console.log('the murderer is ', murderer);
// This will print out 'the murderer is Rick' because the global variable is never redefined.
// Line 103 creates a new variable with the same name, and line 106 redefines that murderer.
// Since the log is outside of these functions, the global variable prints out.
// --------------------------


// --------------------------
// Episode 7

murderer = 'Bob';

const whoIsTheMurderer = function() {
  const who1 = function() {
    var murderer = 'Ben';
    const who3 = function() {
      murderer = 'Bobo';
    }
    const who9 = function() {
      murderer = 'Sam';
    }
    who9();
  }
  const who11 = function() {
    var murderer = 'Andy';
    const who12 = function() {
      murderer = 'Robo';
    }
  }
  who11();
  const who10 =function() {
    murderer = 'Tom';
  }
  who1()
  const who2 = function() {
    murderer = 'Robo';
    const who4 = function() {
      var murderer = 'Steve';
      who2();
      murderer = 'Steve';
      const who5 = function() {
        murderer = 'Andy';
        const who6 = function() {
          var murderer = 'Bobo'
          who3();
          who1();
          who8();
          const who7 = function() {
            murderer = 'Ben'
          }
          who7();
        }
      }
      who5();
      who1();
    }
    who4();
    const who8 = function() {
      murderer = 'Tom';
      who9();
      who2();
    }
  }
  who1();
}

whoIsTheMurderer();
console.log(murderer);
// --------------------------
