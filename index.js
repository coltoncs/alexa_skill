'use strict';
var Alexa = require("alexa-sdk");
var counter;

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    console.log('alexa initialized.');
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello');
        counter = 0;
    },
    'StartIntent': function () {
        this.emit(':ask','Hi, Welcome to the 2017 Partner NEXT Event ' +
                    "I'm going to ask you a series of yes or no questions, are you ready?", "May I begin?");
    },
    'YesIntent': function(){
        counter++;
        switch (counter){
            case 1:
                this.emit(":ask", "Do you have a mobile presence?");
                break;
            case 2:
                this.emit(":ask", "Great! Do you have a web presence?");
                break;
            case 3:
                this.emit(":ask", "Do you have a social presence?");
                break;
            case 4:
                this.emit(":ask", "Do you have a strategy for chatbots?")
                break;
            case 5:
                this.emit(":ask", "Do you currently have a multi-channel strategy?");
                break;     
            default:
                this.emit(":tell", "There was an error somewhere! Let's start over.");
                this.emit("StartIntent");
                break;
        }
    },
    'NoIntent': function(){
        counter++;
        switch (counter){
            case 1:
                this.emit(":ask", "Do you have a mobile presence?");
                break;
            case 2:
                this.emit(":ask", "Great! Do you have a web presence?");
                break;
            case 3:
                this.emit(":ask", "Do you have a social presence?");
                break;
            case 4:
                this.emit(":ask", "Do you have a strategy for chatbots?")
                break;
            case 5:
                this.emit(":ask", "Do you currently have a multi-channel strategy?");
                break;
            default:
                this.emit(":tell", "There was an error somewhere! Let's start over.");
                break;
        }
    },
    'StopIntent': function () {
        this.emit(':ask','Are you sure?');
    },
    Unhandled() {
        this.emit(':ask', "Sorry, I couldn't understand that.", "What was that?");
    },
    "SessionEndedRequest": function () {
        console.log("Session ended in help state: " + this.event.request.reason);
    }
};

//----------------------Start State Handlers-------------------

//----------------------Game State Handlers--------------------

//----------------------Help State Handlers--------------------