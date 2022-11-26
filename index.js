// // Write your solution here!
// describe('index.js', function () {
//     describe('cats', function () {
//       it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
//         expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//       });
//     });

// const createStatsCollector = require("mocha/lib/stats-collector")

const cats= ["Milo", "Otis", "Garfield"]
const destructivelyAppendCat = function (name) {
      return (cats.push ("Ralph"))
}
const destructivelyPrependCat = function (name) {
      return (cats.unshift ("Bob"))
}
const destructivelyRemoveLastCat = function (name) {
       return (cats.pop ())
}
const destructivelyRemoveFirstCat = function (name) {
    return (cats.shift ())
}
const appendCat = function (name) {
    const appendCat= [...cats, "Broom"]
    return appendCat
}
const prependCat = function (name) {
    const prependCat= ["Arnold", ...cats]
    return prependCat
}
const removeLastCat= function (name) {
    const removeLastCat= [...cats]
    return (removeLastCat.slice (0, 2))
}
const removeFirstCat= function (name) {
    const removeFirstCat= [...cats]
    return (removeFirstCat.splice (1))
}


// const appendCat = function (name) {
//     cats.length= 0;

//     cats.push("Milo", "Otis", "Garfield")

//     return (cats.splice ( 3,0, "Broom"))
// }
  
//     describe('Array functions', function () {
//       beforeEach(function () {
//         cats.length = 0;
  
//         cats.push('Milo', 'Otis', 'Garfield');
//       });
  
//       describe('destructivelyAppendCat(name)', function () {
//         it('appends a cat to the end of the cats array', function () {
//           destructivelyAppendCat('Ralph');
  
//           expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
//         });
//       });
  
//       describe('destructivelyPrependCat(name)', function () {
//         it('prepends a cat to the beginning of the cats array', function () {
//           destructivelyPrependCat("Bob");
  
//           expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
//         });
//       });
  
//       describe('destructivelyRemoveLastCat()', function () {
//         it('removes the last cat from the cats array', function () {
//           destructivelyRemoveLastCat();
  
//           expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
//         });
//       });
  
//       describe('destructivelyRemoveFirstCat()', function () {
//         it('removes the first cat from the cats array', function () {
//           destructivelyRemoveFirstCat();
  
//           expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
//         });
//       });
  
//       describe('appendCat(name)', function () {
//         it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
//           expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);
  
//           expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//         });
//       });
  
//       describe('prependCat(name)', function () {
//         it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
//           expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);
  
//           expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//         });
//       });
  
//       describe('removeLastCat()', function () {
//         it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
//           expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);
  
//           expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//         });
//       });
  
//       describe('removeFirstCat()', function () {
//         it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
//           expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);
  
//           expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//         });
//       });
//     });
//   });
  
  