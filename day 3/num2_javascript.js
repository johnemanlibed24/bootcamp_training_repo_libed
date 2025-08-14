var num = 5;
var pattern = "";

if (num > 1) {
    var i = num;
    while (i >= 1) {
        var j = 1;
        while (j <= (num - i)) {
            pattern += "  ";
            j++;
        }
        var k = 1;
        while (k <= i) {
            pattern += "* ";
            k++;
        }
        pattern += "\n";
        i--;
    }
    console.log(pattern);
}