function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return console.log(newString);
}
reverseString('HOHOHOHO YOU DARE APROACH ME');