/*
The Atbash cipher is an encryption method in which each letter of a word is replaced with
its "mirror" letter in the alphabet: A <=> Z; B <=> Y; C <=> X; etc.

Create a function that takes a string and applies the Atbash cipher to it.

Examples
atbash("apple") --> "zkkov"

atbash("Hello world!") --> "Svool dliow!"

atbash("Christmas is the 25th of December") --> "Xsirhgnzh rh gsv 25gs lu Wvxvnyvi"

Notes:
Capitalisation should be retained.
Non-alphabetic characters should not be altered.
*/

public class Atbash {

    public String atbash(String unencrypted){

        char[] characters = unencrypted.toCharArray();
        StringBuilder encrypted = new StringBuilder();

        for(char character : characters){
            /* a char is represented as an integer ASCII value
            *  if we want to convert one char to another, we can perform some addition or subtraction
            *  ASCII table: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ASCII-Table-wide.svg/875px-ASCII-Table-wide.svg.png
            * */

            //handles upper-case letters
            if(character >= 65 && character <= 90){
                char encChar;
                if(character <= 77){
                    encChar = (char) (78 + (77 - character));
                }
                else{
                    encChar = (char) (77 - (character - 78));
                }
                encrypted.append(encChar);
            }
            //handles lower-case letters
            else if(character >= 97 && character <= 122){
                char encChar;
                if(character <= 109){
                    encChar = (char) (110 + (109 - character));
                }
                else{
                    encChar = (char) (109 - (character - 110));
                }
                encrypted.append(encChar);
            }
            //do not alter non-alphabetic characters
            else{
                encrypted.append(character);
            }
        }
        return encrypted.toString();
    }
}
