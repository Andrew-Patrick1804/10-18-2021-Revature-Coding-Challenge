/* 
This robot roams around a 2D grid. It starts at (0, 0) facing North. 
After each time it moves, the robot rotates 90 degrees clockwise. 
Given the amount the robot has moved each time, you have to calculate the robot's final position.

To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

20 steps North, now at (0, 20)
30 steps East, now at (30, 20)
10 steps South. now at (30, 10)
40 steps West, now at (-10, 10)
...and will end up at coordinates (-10, 10).

Examples:
trackRobot(20, 30, 10, 40) --> [-10, 10]

trackRobot() --> [0, 0]
// No movement means the robot stays at (0, 0).

trackRobot(-10, 20, 10) --> [20, -20]
// The amount to move can be negative.

Notes:
Each movement is an integer (whole number).
*/


function trackRobot(...steps){

    Robot = {
        position : [0,0],
        facingDirection : "north"
    }

    steps.forEach(step => {
        switch(Robot.facingDirection){

            case "north":
                Robot.position[1] += step;
                Robot.facingDirection = "east";
                break;

            case "east":
                Robot.position[0] += step;
                Robot.facingDirection = "south";
                break;

            case "south":
                Robot.position[1] -= step;
                Robot.facingDirection = "west";
                break;

            case "west":
                Robot.position[0] -= step;
                Robot.facingDirection = "north";
                break;
        }
    });

    console.log("[" + Robot.position[0] + ", " + Robot.position[1] + "]");
}

console.log("=====ROBOT CHALLENGE=====");
trackRobot(20, 30, 10, 40);
trackRobot();
trackRobot(-10, 20, 10);