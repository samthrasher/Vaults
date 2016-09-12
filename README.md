## Vaults

### Background

VAULTS is an original puzzle game based on combination puzzles like the
Rubik's Cube, the Lights Out puzzle, and similar games. The game board consists
of overlapping rings with marbles sitting on them. By clicking on the rings,
the user can make the marbles travel along them. Some rings are linked
together so that clicking one ring causes both to rotate. The goal is to get each
marble into its designated spot.

### Functionality & MVP  

Functionality of the game includes:  

- Click on rings to rotate, shift-click to rotate in opposite direction  
- Advance to next level when puzzle is completed
- Undo button

Other features:  
- Production readme

### Wireframes

See also index.html for an animated wireframe.

![wireframes](https://github.com/samthrasher/Vaults/blob/master/assets/img/wireframe.png)


### Architecture and Technologies

VAULTS will be implemented using the following modules:
- Redux for organizing game/render logic
- React.js for DOM manipulation and dynamic element styling
- CSS animations

The Redux store will consist of two subparts, the `gameState` and the `displayState`.
The `gameState` contains `nodes` and `axes`. Each `node` represents a position
which can be occupied by a marble, and has a colour and a position number,
both of which are represented as integers. An `axis` represents a ring
around which the marbles can travel. It has a position number, a set of children
(which can be axes or nodes) and a set of linked axes. When the player
triggers an axis, that axis and all of its linked axes rotate. The `displayState`
contains extra information about the axes for the current level:
their size, position, node colours, etc.


### Implementation Timeline

**Day 1**:
Initialize project with all necessary node modules and webpack. Implement redux loop for game logic.

**Day 2**:
Finish game logic if not finished already. Begin implementing render logic, with React components for axes and nodes. Create a sample level to test the game.

**Day 3**:
Finish rendering logic and add polish, make sure animations are present and smooth.

**Day 4**:
Finish anything that is left, fix any bugs, and add more levels to the game.


### Bonus features
- Progress saved in a cookie
- 
