Sep 21, 2018

(I)How is it run?

    1. index.html  has all javascript files.
    2. instantiates game object.  Executes following 2 line:
        game.init();
        game.run();
        
II)Class diagrams usage diagrams
        
                              |----->  |--------------|
    game.js                   |        | state        |
    |-------------|   - - - - - - - >  |--------------|
    | init()      |                    | canvas       |
    |-------------|                    |--------------|
    | run()       |
    |-------------|  - - - - - - - ->  |--------------|
                                       |gamestate     |
                                       |--------------|
                            
                              |----->  |--------------|
    gamestate.js              |        | ship         |
    |-------------|   - - - - - - - >  |--------------|
    | init()      |                    | asteroid     |
    |-------------|                    |--------------|
    |generatelvl()|
    |-------------|  - - - - - - - ->  |--------------|
    |handleInputs |                    |bullets       |
    |-------------|                    |--------------|
    |Update()     |
    |-------------|
    |render()     |
    |-------------|
    
   
    ship.js
    |-------------|  - - - - - ->  |----------------|
    |             |                |  Polygon       |
    |-------------|                |----------------|
    |             |
    |             |  - - - - - ->  |----------------|
    |-------------|                | Bullet         |
                                   |----------------|
                                   
III)Class Diagram Individual  alphabetical order

asteroid.js  extends polygon
|------------------|
| init()           |  init()
|------------------|  Sets rotation velocity.
| hasPoint()       |  hasPoint()
|------------------|  Detects if a bullet is inside the asteroid.
| draw()           |  update()
|------------------|  Calculates new asteroid points.
| update()         |  draw()
|------------------|  Draws new points of polygon.
|size,x,y          |
|------------------|
|scale, rotAngle   |
|------------------|

bullet.js
|------------------|  init()
|   init()         |  Sets initial bullet location.
|------------------|  Sets initial velocity.
|   update()       |
|------------------|  update()
|   draw()         |  gets bullet's next position.
|------------------|
|  x,y,prevX,prevY |  draw()
|------------------|  Draw a line.


canvas.js
|------------------|   init()
|    init()        |   -creates canvas 
|------------------|   -appends canvas document
|   animate()      |   animate()
|------------------|   -triggers timeout every millisecond
|   canvas         |
|------------------|
|   ctx            |
|------------------|

gamestate.js extends state
|------------------|   init()
| init()           |   Gets canvas size.
|------------------|   Gets ship.
| handleInputs()   |   generate game level.
|------------------|   generatLvl()
|generteLvl()      |   Generates # of asteroids.
|------------------|   Sets the asteroids in an array.
|update()          |
|------------------|   render()
|render()          |   Draws polygons:bullets and ships
|------------------|
|ship, bullet      |   update()
|------------------|   Update all positions of asteroids.
                       Check if a bullet is inside an asteroid.
                       Splits an asteroid into halves.
                       Checks if a bullet is outside the screen.
                       
                       handleInputs()
                       Upon inputs, rotate ship, accelerate or 
                       deaccelerate.
                       Upon spacebar press, add a new bullet to bullet[].
                                                            
inputHandler.js
|------------------|   init()
| init()           |   Adds event listeners.
|------------------|
| isDown()         |
|------------------|
| isPressed()      |
|------------------|
|key, down, pressed|
|------------------|

ship.js extends polygon
|------------------|
| init()           |
|------------------|
|shoot()           |
|------------------|
|addVel()          |
|------------------|
|putBrake()        |
|------------------|
|rotate()          |
|------------------|
|update()          |
|------------------|
|draw()            |
|------------------|