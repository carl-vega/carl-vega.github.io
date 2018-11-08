# Spock-Rock-Paper-Scissors-Lizard

## Description

This is a variation of the Rock, Paper, Scissors game that includes Spock and Lizard gestures as part of the player options. Since this is a less used version I have included a image that shows which gestures win over which other gestures. There is also a chat functionality with message pop-ups to opposite player.

## Usage

The game is used for entertainment with another player. The game begins with players enter there name.
[User Input](assets/images/markdown-images/User-Name.png)
Next, there is the game area with gestures options to be selected. [Playmap](assets/images/markdown-images/Playmap.png)
There is a message area is opened via a message icon. [Chat Bubble](assets/images/markdown-images/Chat-Bubble.png)
Once the chat bubble is clicked the message area opens. [Message Area](assets/images/markdown-images/Message-Area.png)
When messages are sent to player with chat area closed, the message can be seen from as a popup. [Popup Message](assets/images/markdown-images/Popup-Message.png)

## Design

### Frontend

The design simplistic, with material design implementation via Materialize CSS plugin. A modal is used to take in user name input. The main game area is a card with an image that also displays which options win against the other options.

The text area at the top of the card is cycled to show the necessary message needed for the moment. Messages are slightly player specific by design. Second player does not need to see "waiting on another player."

The message area is a sidenav with a scrolling messages. Just like before the player that sends messages does not need to see popup message if they have sent it.

Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

License
For open source projects, say how it is licensed.

Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
