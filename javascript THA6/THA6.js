// var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
// console.log(Object.getOwnPropertyNames(student));


// var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
// console.log("object before deleting rollno:",student);
// delete student.rollno;
// console.log("object after deleting rollno:",student);

// var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
// { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
// { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', 
// readingStatus: false }]; 
// for (var i = 0; i < library.length; i++) 
//    {
//     var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
//     if (library[i].readingStatus) {
//       console.log("Already read " + book);
//     } else
//     {
//      console.log("You still need to read " + book);
//     }
//    }


//    function Cylinder(cyl_height, cyl_diameter) {
//     this.cyl_height = cyl_height;
//     this.cyl_diameter = cyl_diameter;
//   }
  
//   Cylinder.prototype.Volume = function () {
//     var radius = this.cyl_diameter / 2;
//     return this.cyl_height * Math.PI * radius * radius;
//   };
  
//   var cyl = new Cylinder(7, 4);
 
//   console.log('volume =', cyl.Volume().toFixed(4));



// var library = [ { title: 'The Road Ahead', author: 'Bill Gates', 
// libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
// { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

// var sort_by = function(field_name, reverse, initial){

//     var key = initial ?
//         function(x)
//               {
//                 return initial(x[field_name]);
//               } :
//         function(x) 
//               {
//                 return x[field_name];
//               };
 
//     reverse = !reverse ? 1 : -1;
 
//     return function (x, y) {
//         return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
//       } ;
//  };
 
 
//  var newobj = library.sort(sort_by('libraryID', true, parseInt));
 
//  console.log(newobj);