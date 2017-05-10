var json2csv = require('json2csv');
var fs = require('fs');
var fields = ['car', 'price', 'color'];
var myCars = [
  {
    "car": "Audi",
    "price": 40000,
    "color": "blue"
  }, {
    "car": "BMW",
    "price": 35000,
    "color": "black"
  }, {
    "car": "Porsche",
    "price": 60000,
    "color": "green"
  }
];
var element ={};

element.price=1;
element.car=20;
myCars.push(element);
console.log(myCars);

element.price=2;
myCars.push({car:3});

console.log(myCars);
console.log(myCars.length);
var csv = json2csv({ data: myCars, fields: fields });
 
fs.writeFile('file.csv', csv, function(err) {
  if (err) throw err;
  console.log('file saved');
});