# Minesweeper Game

## <img src="https://raw.githubusercontent.com/antasth/images-for-readme.md/main/Minesweeper/minesweeper1.png" width="30%"></img> <img src="https://raw.githubusercontent.com/antasth/images-for-readme.md/main/Minesweeper/minesweeper2.png" width="30%"></img> <img src="https://raw.githubusercontent.com/antasth/images-for-readme.md/main/Minesweeper/minesweeper3.png" width="30%"></img> <img src="https://raw.githubusercontent.com/antasth/images-for-readme.md/main/Minesweeper/minesweeper4.png" width="30%"></img> <img src="https://raw.githubusercontent.com/antasth/images-for-readme.md/main/Minesweeper/minesweeper5.png" width="30%"></img> <img src="https://raw.githubusercontent.com/antasth/images-for-readme.md/main/Minesweeper/minesweeper6.png" width="30%"></img>

---

[Deploy](https://antasth.github.io/Minesweeper/)

---

## **About the project**

This project was developed as part of the RSSchool frontend course. [Link to task](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/minesweeper/README.md). The task was to implement a classic game [Minesweeper](<https://en.wikipedia.org/wiki/Minesweeper_(video_game)>).

## **Game rules**

`In the game, mines are scattered throughout a board, which is divided into cells. Cells have three states: unopened, opened and flagged. An unopened cell is blank and clickable, while an opened cell is exposed. Flagged cells are unopened cells marked by the player to indicate a potential mine location; some implementations make flagged cells inoperable to reduce the risk of uncovering a suspected mine. A player selects a cell to open it. If a player opens a mined cell, the game ends in a loss. Otherwise, the opened cell displays either a number, indicating the number of mines diagonally and/or adjacent to it, or a blank tile (or "0"), and all adjacent non-mined cells will automatically be opened. Players can also flag a cell, visualized by a flag being put on the location, to denote that they believe a mine to be in that place.`

## **Features**

1. Game Field  
   _At the beginning of each game, a playing field is created filled with mines. Mines are created after a player's first turn to prevent them from losing on their first turn. The player is able to click on cells to reveal them. If the cell contains a mine, the game is over. If the cell does not contain a mine, the number of mines in the surrounding cells is displayed. The game end's when the player reveals all cells that do not contain mines (win) or clicks on mine (lose). On a successful game solution, displayed the following messages: in case of win - "Hooray! You found all mines in ## seconds and N moves!" and in case of lose - "Game over. Try again"._
2. Flags  
   _The players is able to add flag on cells clicking on right mouse button to indicate that they suspect a mine is present._
3. Color coding  
   _The game is using color coding (using numbers and colors) to indicate the number of mines surrounding a revealed cell. As the result there will be 8 different colors for 8 numbers from 1 to 8._
4. Automatic opening of cells  
   _When user opens a square that does not touch any mines, it will be empty and the adjacent squares will automatically open in all directions until reaching squares that contain numbers._
5. Current game statistics  
   _The header displays the duration of the game in seconds, number of moves, number of mines remaining, and the number of unused flags._
6. Sound effects  
   _The game includes sound effects for events such as revealing a cell, flagging a cell, and game over (win and lose)._
7. Difficulty selection  
   _The player is able to select a difficulty level (easy, medium, hard) which changes the size of the game board. Also user can change the number of mines for levels other than Hell._
8. Hell level  
   _The game contains an additional level of hell difficulty, with corresponding design and soundtrack._
9. Last results statistics  
   _The latest 10 win results are saved in the high score table._
10. Game save  
    _Implemented the functionality to save the game, when player clicks on button "continue last game", he can continue playing from where he left off._
11. Theme  
    _Implemented dark/light themes of the game._

## **Stack**

- HTML5
- CSS3
- Javascript
