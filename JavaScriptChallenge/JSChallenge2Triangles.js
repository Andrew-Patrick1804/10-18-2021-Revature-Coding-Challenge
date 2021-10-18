/* 
Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.

Examples:
doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true

doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true

doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false

doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false

Notes:
Triangle fits if it has the same or smaller size as the hole.
The function should return false if the triangle with that dimensions is not possible.
*/

/* 
Apparently there is a Triangle Inequality Theorem that states that the sum of two sides must be greater than the third side.
It goes like this:
    a + b > c
    a + c > b
    b + c > a
    Given a, b, c
*/

function doesTriangleFit(tri1, tri2){
    //determine if they are valid triangles
    if(!isValidTriangle(tri1) || !(isValidTriangle(tri2))){
        return false;
    }
    
    //if valid, compare the sizes.  The first needs to be smaller or the same size as the second
    return (tri1[0] <= tri2[0] &&
            tri1[1] <= tri2[1] &&
            tri1[2] <= tri2[2]);
}

function isValidTriangle(tri){
    return (tri[0] + tri[1] > tri[2] &&
            tri[0] + tri[2] > tri[1] &&
            tri[1] + tri[2] > tri[0]);
}

console.log("=====TRIANGLES CHALLENGE=====");
console.log(doesTriangleFit([1, 1, 1], [1, 1, 1]));
console.log(doesTriangleFit([1, 1, 1], [2, 2, 2]));
console.log(doesTriangleFit([1, 2, 3], [1, 2, 2]));
console.log(doesTriangleFit([1, 2, 4], [1, 2, 6]));
console.log(doesTriangleFit([3, 3, 3], [3, 2, 3]));