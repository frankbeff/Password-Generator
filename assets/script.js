
//// This section defines the arrays that includes all output characters for the passwords. 



var caseArray = [];


var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];


var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];




//This tells js to generate a password


function generatePassword() {




    var passwordString = "";




    // This is where you ask user's input


    var useLowerCase = confirm("Do you want to include lowercase characters?");


    var useUpperCase = confirm("Do you want to include uppercase characters?");


    var useNumeric = confirm("Do you want to include numeric characters?");


    var useSpecial = confirm("Do you want to include special characters?");




    //rloop to check variables are flase or true if false go back until true


    while (useLowerCase == false && useUpperCase == false && useNumeric == false && useSpecial == false) {


        alert("Please select one type of character");


        useLowerCase = confirm("Do you want to include lowercase characters?");


        useUpperCase = confirm("Do you want to include uppercase characters?");


        useNumeric = confirm("Do you want to include numeric characters?");


        useSpecial = confirm("Do you want to include special characters?");


    }




    // while loop to check for password length. If number less than 8 or over 128, or if input is a string or NaN, user is asked for input again




    var passwordLength = parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 150 characters."));


    while (passwordLength < 8 || passwordLength > 150 || typeof (passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {


        alert("Please choose a number that is more than 8 and less than 128 characters");


        passwordLength = parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));


    }


    //// if character type is selected, the array name is stored into a group array




    if (useLowerCase == true) {


        caseArray.push(lowerCaseChar);





    }


    if (useUpperCase == true) {


        caseArray.push(upperCaseChar)





    }


    if (useNumeric == true) {


        caseArray.push(numericChar)





    }


    if (useSpecial == true) {


        caseArray.push(specialChar)


    }




    //// a loop is run for the length of the password




    for (let i = 0; i < passwordLength; i++) {




        let randomCharArrayNum;


        let selectedCharArray;


        let randomCharNum;


        let randomChar;




        //// a random number is generated for the group array (length of group array)





        randomCharArrayNum = parseInt(Math.floor(Math.random() * caseArray.length)); //random number based on length of case array





        //// a random number is generated for the character array (length of character array)




        selectedCharArray = caseArray[randomCharArrayNum]; //variable that stores selected array from case array





        randomCharNum = Math.floor(Math.random() * selectedCharArray.length);
  




        randomChar = selectedCharArray[randomCharNum];




        passwordString += randomChar;


        //return passwordString;





    }




    passwordEntry.textContent = passwordString;


}





let generateButton = document.getElementById("generateButton");


let passwordEntry = document.getElementById("passwordEntry");


generateButton.onclick = generatePassword;