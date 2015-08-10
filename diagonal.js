//first line describes the matrix
//n what to do with it?
//create two arrays to grab all the numbers for one diagonal
//put the numbers into an matrix?

var firstDiag = function(size, matrix) {
  var sum = 0;
  var count = 0;
  // traverse the rows
  for(var i = 0; i < size; i++) {
      sum += parseInt(matrix[i][count], 10);
      count += 1
  };
  //console.log(sum);
  return sum;
}

var secondDiag = function(size, matrix) {
  var sum = 0;
  var count = size-1;
  // traverse the rows
  for(var i = 0; i < size; i++) {
      sum += parseInt(matrix[i][count], 10);
      count -= 1
  }
  //console.log(sum);
  return sum;
}

function processData(input) {
   //save the first number as the size.
   var inputArray  = input.split("\n");
   var matrix = [];
   var currentline = 0;
   var size = parseInt(inputArray[currentline].trim(), 10);
   currentline ++;
   for(var i = currentline; i <= size; i++){
       var subArray = [];
       var line = inputArray[currentline].trim();
       currentline ++;
       line = line.split(" ");
       for(var j = 0; j < line.length; j++){
           subArray.push(parseInt(line[j], 10));
       }
       matrix.push(subArray);
   }
   //have matrix now process;
   var first = firstDiag(size, matrix);
   var second = secondDiag(size, matrix);
   var answer = Math.abs(first-second);
   process.stdout.write(""+answer+"\n");

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

