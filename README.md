## Game Info

URL to game - https://rinathilm.github.io/tic-tac-toe/

Tic-tac-toe is a simple game where two players, usually designated with X and O, take turns on a 3x3 grid to place three of their marks in a row. This can be done horizontally, vertically, or diagonally (or as I like to say 'diagon-ally'). The player who does this first wins the game.

This game was made during my fall 2017 Web Development Immersive program through General Assembly in Boston. It was our first indiviual project.

## Technologies Used
- HTML
- CSS
- Bootstrap
- jQuery
- JavaScript
- Ajax

## Planning Process
First, I built the tic-tac-toe board in HTML/CSS then tackled the game logic and how to present it in a UI. Once that was complete, I added the authentication pieces and the HTML/CSS with it. Then the remaining time, I worked on the AJAX piece to call the API that was built for our class to track the games played by each user.

The project was difficult for the most part for me. Building out the actual game logic in JavaScript then connecting it to the cells selected on the UI took a huge chunk of time. It was difficult to write out the functions and have it connect to what was happening on the UI tic-tac-toe board. Designing the UI was difficult too, I used the jQuery methods of show and hide to manipulate what I wanted to display at different instances and it was frustrating tracking all the different buttons and what elements had to be displayed or hidden. The AJAX was the newest piece of technology we learned so it was a lot of trial and error and looking at the console logs to see what was being sent. It was definitely hard to find the specific answer you needed online since some solutions had code and solutions that I didn't understand the syntax of.

So overall, the whole project was a challenging one, but a great learning experience.

## Wireframes
Initial draft - https://drive.google.com/file/d/0By5LPJuxCHaEM0F5UlRqQ1lwZW8/view?usp=sharing

## User Stories
- As a user, I want to be able to log into the game with my username and password
- As a user, I want to be able to change my password
- As a user, I want to see a cumulative report on the games I've played so far so I could track my progress
- As a user, I want to be able to start a new game even if my current game is not done

## Issues & Enhancements
- Currently only counting total games played, future enhancement to count number of wins, losses and ties
- Minor changes to UI (turn off hover effect when cells are no longer clickable)
