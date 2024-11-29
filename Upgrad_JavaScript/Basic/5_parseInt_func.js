
function parseInt(string, radix) {
    // The radix argument is optional, and if not provided,
    // the default radix is 10.
    radix = radix || 10;
  
    // Check if the string is a valid number.
    if (!/^[0-9]+$/.test(string)) {
      return NaN;
    }
    //The regular expression !/^[0-9]+$/.test(string) checks if the string string consists 
    //only of digits. The ^ character matches the beginning of the string, the $ character
    // matches the end of the string, and the [0-9] character class matches any digit. 
    //The ! character in front of the ^ character means that the match is not successful 
    //if the string starts with a digit. The .test() method returns true if the string matches 
    //the regular expression, and false otherwise.

    // Convert the string to a number.
    var number = 0;
    for (var i = 0; i < string.length; i++) {
      number += string[i] * radix**(string.length - i - 1);
    }
    // Return the number.
    return number;
}