var request = require('request');
var cheerio = require('cheerio');
//importar csv
var json2csv = require('json2csv');
var fs = require('fs');


request('https://news.ycombinator.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var nameCSV="lista.csv";
    var listElements=[];
    var fields =['name'];
    const lis = $('tr.athing').get();

    lis.forEach(function(tr){

    	//No se muy bien por que
    	const $tr = $(tr);
    	const nameTitle = $tr.find('a.storylink').text(); 
    	//	console.log(element)
    	listElements.push({name:nameTitle});


    });
    console.log(listElements);

	var csv = json2csv({ data: listElements, fields: fields });
	 
	fs.writeFile('file.csv', csv, function(err) {
	  if (err) throw err;
	  console.log('file saved');
	});



  }
});



