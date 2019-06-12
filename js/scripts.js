$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    //define roman numerals
    var one = "I";
    var five = "V";
    var ten = "X";
    var fifty = "L";
    var hundred = "C";
    var f_hundred = "D";
    var thousand = "M";
    var ray = [];
    var m, d, c, l, x, v, n;
    var result = "";
    //gather user input
    var userInput = parseInt($("input:text[name=wormhole]").val());
    var total = 0;
    console.log(userInput);
    //breakdown numbers of how many of each symbol
        m = parseInt(userInput / 1000);
        userInput = (userInput % 1000);
        total += m;
        d = parseInt(userInput / 500);
        userInput = (userInput % 500);
        total += d;
        c = parseInt(userInput / 100);
        userInput = (userInput % 100);
        total += c;
        l = parseInt(userInput / 50);
        userInput = (userInput % 50);
        total += l;
        x = parseInt(userInput / 10);
        userInput = (userInput % 10);
        total += x;
        v = parseInt(userInput / 5);
        userInput = (userInput % 5);
        total += v;
        n = parseInt(userInput / 1);
        userInput = (userInput % 1);
        total += n;
        console.log(m + " thousands");
        console.log(d + " five hundreds");
        console.log(c + " hundreds");
        console.log(l + " fifties");
        console.log(x + " tens");
        console.log(v + " fives");
        console.log(n + " ones");
        console.log(total);
        //change the numbers into a string of roman numerals stored in result
        for (i = 0; i < m; i++) {
          result += "M";
        }
        for (i = 0; i < d; i++) {
          result += "D";
        }
        for (i = 0; i < c; i++) {
          result += "C";
        }
        for (i = 0; i < l; i++) {
          result += "L";
        }
        for (i = 0; i < x; i++) {
          result += "X";
        }
        for (i = 0; i < v; i++) {
          result += "V";
        }
        for (i = 0; i < n; i++) {
          result += "I";
        }
        // if there are 4 of one numeral like CCCC convert it to CD
        if (result.includes("DDDD")) {
          result = result.replace("DDDD","CM")
        }
        if (result.includes("DCCCC")) {
          result = result.replace("DCCCC","CM")
        }
        if (result.includes("CCCC")) {
          result = result.replace("CCCC","CD")
        }
        if (result.includes("LXXXX")) {
          result = result.replace("LXXXX","XC")
        }
        if (result.includes("XXXX")) {
          result = result.replace("XXXX","XL")
        }
        if (result.includes("VIIII")) {
          result = result.replace("VIIII","IX")
        }
        if (result.includes("IIII")) {
          result = result.replace("IIII","IV")
        }




    console.log(result);
  });
});
