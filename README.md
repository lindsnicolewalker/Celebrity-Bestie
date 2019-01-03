# Celebrity Match Pro

![Alt Text](https://media.giphy.com/media/mx78BsH37DQ8OmCojz/giphy.gif)

## Description

*Celebrity Match* is deployed to Heroku. Please check it out [here](https://celebrity-match.herokuapp.com/).
*Celebrity Match* is a web app that implements a data matching algorithm to match the user to a compatable celebrity. The results are based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree) via dropdown menus. When the survey is submitted, an existing user's data that is closest to the current user's survey responses is found and returned by the algorithm. The match for the current user is determined by the celebrity with data that is the lowest absolute difference for the ten question survey.



## Demo
Simply take the survey .  
![Alt Text](https://media.giphy.com/media/2vjOI0AGhSK45iTcbr/giphy.gif)

When complete, click the button and find your match!  
![Alt Text](https://media.giphy.com/media/wt0eFnCJXkA4VWDe3c/giphy.gif)


## Installation

To install the application follow the instructions below in your terminal:  

	git clone git@github.com:lindsnicolewalker/celebrity-match.git
	cd celebrity-match
	npm install
	
## Using App Locally

To run the application locally and access it in your browser, first set the `PORT` environment variable to the value of your choice. An example is shown below.

	export PORT=8080
	
After the `PORT` environment variable has been set, navigate to your app master directory and then run the Node.js application with the command below.

	node server.js
<!-- ![Alt Text](https://media.giphy.com/media/2sYEw141AbG9R57DRd/giphy.gif)	 -->

The application will now be running locally on `PORT`, in this case that is port 8080. You can then access it locally from your browser at the URL `localhost:PORT`by typing into your browser searchbar: `localhost:8080`.

## Technology

*Celebrity Match* uses [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) server on the back end and the [Materialize](http://materializecss.com/) CSS framework on the front end.

HTML
CSS
Javascript

## ---CODE---

## Survey (HTML):


    $(document).ready(function () {
        $('select').material_select();

        $('.modal').modal({
          
        });
    });

    // Activate submit button
    $('#submitButton').on('click', function (event) {
        event.preventDefault();

        // Add user inputs to celebrity data
        $.post('/api/celebrities', userInput)
            .done(function (data) {
				
				
        });
    });
`</script>`

## Landing Page (HTML):
![Alt Text](https://media.giphy.com/media/5QSrI3K8EERLjdo0Ht/giphy.gif)

## Style (CSS):
![Alt Text](https://media.giphy.com/media/7vAhGi5HQeDojyqHlu/giphy.gif)	

## HTML Routes (JavaScript):
![Alt Text](https://media.giphy.com/media/29pUQheyWfN1vwL66N/giphy.gif)     	<br>
	 	`// Export HTML routes
		module.exports = function (app) {
			// console.log('___ENTER htmlRoutes.js___');`

		`// Home page
		app.get('/', function (req, res) {
			res.sendFile(path.join(__dirname, '../public/home.html'));`
		});`

		`// Survey page
		app.get('/survey', function (req, res) {
			res.sendFile(path.join(__dirname, '../public/survey.html'));
		});`
		`};`
	

## Hardcoded API Array of Objects i.e. Possible Celebrity Matches (JavaScript):
![Alt Text](https://media.giphy.com/media/AhvpCJvPO0aAJf3AE7/giphy.gif)	

## API Routes (JavaScript):
![Alt Text](https://media.giphy.com/media/YWoAga1BzjZXB2KyCT/giphy.gif)

		// Establish required dependencies
		var path = require('path');

		// Import celebrity data
		var celebrities = require('../data/celebrities.js');

		module.exports = function (app) {

		// Celebrity Data
		app.get('/api/celebrities', function (req, res) {
			res.json(celebrities);
		});

			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(celebrities[i].scores[j] - userResponses[j]);
			}

			// If this is the lowest measured absolute difference, grab the celebrity match
			if (diff < totalDifference) {
				
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

## Author: 
Lindsey Walker