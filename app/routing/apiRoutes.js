// Establish required dependencies
var path = require('path');

// Import celebrity data
var celebrities = require('../data/celebrities.js');

module.exports = function (app) {

	// Celebrity Data
	app.get('/api/celebrities', function (req, res) {
		res.json(celebrities);
	});

	// Add new celebrity entry
	app.post('/api/celebrities', function (req, res) {
		// Capture the user input object
		var userInput = req.body;
		// console.log('userInput = ' + JSON.stringify(userInput));

		var userResponses = userInput.scores;
		// console.log('userResponses = ' + userResponses);

		// Compute best celebrity match
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000; // Make the initial value big for comparison

		// Examine all existing celebrities in the list
		for (var i = 0; i < celebrities.length; i++) {
			// console.log('celebrity = ' + JSON.stringify(celebrities[i]));

			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(celebrities[i].scores[j] - userResponses[j]);
			}
			// console.log('diff = ' + diff);

			// If lowest difference, record the celebrity match
			if (diff < totalDifference) {
				// console.log('Closest match found = ' + diff);
				// console.log('celebrity name = ' + celebrities[i].name);
				// console.log('celebrity image = ' + celebrities[i].photo);

				totalDifference = diff;
				matchName = celebrities[i].name;
				matchImage = celebrities[i].photo;
			}
		}

		// Add new user
		celebrities.push(userInput);

		// Send appropriate response
		res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });
	});
};
