

# Celebrity Match Pro

![Alt Text](https://media.giphy.com/media/wt0eFnCJXkA4VWDe3c/giphy.gif)

![Alt Text](https://media.giphy.com/media/mx78BsH37DQ8OmCojz/giphy.gif)

## Description

*Celebrity Match* is a web app that implements a data matching algorithm to match the user to a compatable celebrity. The results are based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree) via dropdown menus. When the survey is submitted, an existing user's data that is closest to the current user's survey responses is found and returned by the algorithm. The match for the current user is determined by the celebrity with data that is the lowest absolute difference for the ten question survey.



## Demo
	
![Alt Text](https://media.giphy.com/media/2vjOI0AGhSK45iTcbr/giphy.gif)

*Celebrity Match* is deployed to Heroku. Please check it out [here](https://celebrity-match.herokuapp.com/).

## Installation

To install the application follow the instructions below in your terminal:

	git clone git@github.com:lindsnicolewalker/celebrity-match.git
	cd celebrity-match
	npm install
	
## Running Locally

To run the application locally and access it in your browser, first set the `PORT` environment variable to the value of your choice. An example is shown below.

	export PORT=8080
	
After the `PORT` environment variable has been set, navigate to your app master directory and then run the Node.js application with the command below.

	node server.js
![Alt Text](https://media.giphy.com/media/2sYEw141AbG9R57DRd/giphy.gif)	

The application will now be running locally on `PORT`, in this case that is port 8080. You can then access it locally from your browser at the URL `localhost:PORT`by typing into your browser searchbar: `localhost:8080`.

![Alt Text](https://media.giphy.com/media/e7QOmaAA6fzxxOcGc6/giphy.gif)

## Technology

*Celebrity Match* uses [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) server on the back end and the [Materialize](http://materializecss.com/) CSS framework on the front end.

HTML
CSS
Javascript

## Code

Survey (HTML):
![Alt Text](https://media.giphy.com/media/1qfa8qFatMO5HLCu6z/giphy.gif)


`<script type="text/javascript">`
    `$(document).ready(function () {
        $('select').material_select();`

        $('.modal').modal({
            dismissible: false, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            inDuration: 300, // Transition in duration
            outDuration: 200, // Transition out duration
            startingTop: '4%', // Starting top style attribute
            endingTop: '10%' // Ending top style attribute
        });
    });

    // Activate submit button
    $('#submitButton').on('click', function (event) {
        event.preventDefault();

        // Gather user inputs
        var userInput = {
            name: $('#userName').val().trim(),
            photo: $('#userPhoto').val().trim(),
            scores: [
                $('#question1').val().trim(),
                $('#question2').val().trim(),
                $('#question3').val().trim(),
                $('#question4').val().trim(),
                $('#question5').val().trim(),
                $('#question6').val().trim(),
                $('#question7').val().trim(),
                $('#question8').val().trim(),
                $('#question9').val().trim(),
                $('#question10').val().trim()
            ]
        };

        // Add user inputs to celebrity data
        $.post('/api/celebrities', userInput)
            .done(function (data) {
				// console.log('response = ' + JSON.stringify(data));

					// Set the name and image values of celebrity match
					$('#userMatch').html(data.matchName);
					$("#userMatchImage").attr("src", data.matchImage);

					// Pop open the modal dialog
					$('#resultsModal').modal('open');
				
            });
    });
`</script>`

Style (CSS):
![Alt Text](https://media.giphy.com/media/7vAhGi5HQeDojyqHlu/giphy.gif)	

HTML Routes (JavaScript):
![Alt Text](https://media.giphy.com/media/29pUQheyWfN1vwL66N/giphy.gif)	
`// Establish required dependencies
var path = require('path');`

`// Export HTML routes`
`module.exports = function (app) {
	// console.log('___ENTER htmlRoutes.js___');`

	// Home page
	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Survey page
	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
`};`

Landing Page (HTML):
![Alt Text](https://media.giphy.com/media/5QSrI3K8EERLjdo0Ht/giphy.gif)	

Hardcoded API Array of Objects i.e. Possible Celebrity Matches (JavaScript):
![Alt Text](https://media.giphy.com/media/AhvpCJvPO0aAJf3AE7/giphy.gif)	

API Routes (JavaScript):
![Alt Text](https://media.giphy.com/media/YWoAga1BzjZXB2KyCT/giphy.gif)

`// Establish required dependencies
var path = require('path');`

`// Import celebrity data
var celebrities = require('../data/celebrities.js');`

`module.exports = function (app) {`

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
