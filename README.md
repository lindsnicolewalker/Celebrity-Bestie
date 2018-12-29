

# Celebrity Match Pro

![Alt Text](https://media.giphy.com/media/wt0eFnCJXkA4VWDe3c/giphy.gif)

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

The application will now be running locally on `PORT`, in this case that is port 8080. You can then access it locally from your browser at the URL `localhost:PORT`, in this case type into your browser searchbar: `localhost:8080`.

![Alt Text](https://media.giphy.com/media/e7QOmaAA6fzxxOcGc6/giphy.gif)

##Technology


*Celebrity Match* uses [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) server on the back end and the [Materialize](http://materializecss.com/) CSS framework on the front end.