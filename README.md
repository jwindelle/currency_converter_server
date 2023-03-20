# Server

It is a simple currency exchange API application that can be run locally, written on top of the [exchangerate.host](https://exchangerate.host/#/docs) API. I had chosen to use the exchangerate.host API because of the support for historical dates and does not have a limited time offer usage.

## Supported OS Platforms

MacOS, Windows and Linux

## Required OS Software

Please install [nodejs](https://nodejs.org/en/) first on your local machine

## Programming Language Used

NodeJS using Typescript framework

## Installation

On the root directory, open a command prompt or shell and enter the commands:
```bash
npm install
```
and
```bash
npm install --save-dev
```
## Usage

### * Unit Testing
To run the unit testing for the application, using the same command prompt or shell, enter the commands:
```bash
npm test
```
there should appear a message that the test was successful

### * Running in the browser
To run the application, using the same command prompt or shell, enter the commands:
```bash
npm start
```
a message will display that the application is now running at PORT 3000. Open a browser and type in [http://localhost:3000](http://localhost:3000). Seeing a message on the browser page means that it ran successfully. To test if an API endpoint is working, you can try to type in the browser [http://localhost:3000/currencies](http://localhost:3000/currencies), and it should be able to display a list of available currencies that it has