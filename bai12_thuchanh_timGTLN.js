let numbers = [-3, 5, 1, 8, 9, 4];
let max = numbers[0];
let index = 0;
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > max){
        max = numbers[i];
        index = i;
    }
}
alert("max: " + max + "at position" + index);