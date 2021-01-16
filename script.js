//homework 2

// 1 
// comment for me : checked
function evenlySpacedNumsArray(a, b, num) {
    // im bad in math hope i wrote correct formula
    let space = (b - a) / (num - 1);
    let res = [];
    let currentNum = a;

    for (let i = 0; i < num; i++) {
        res.push(+currentNum.toFixed(2));
        currentNum += space;
    }

    return res;
}

console.log(evenlySpacedNumsArray(1, 5, 6),"hhh");

// 2
// comment for me : checked
function secondMaximumElementIndex(arr) {
    if (arr.length < 2) {
        return "no second element in arr";
    }
    let sortedArr = arr.slice();
    return arr.indexOf(sortedArr.sort((a,b) => b - a)[1]);
}

console.log(secondMaximumElementIndex([-60, 2, 43, -18, 5, -19, 36, 7, 56 ]),"eee");

// 2 variant 2
// comment for me : checked
function secondMaximumElementIndex2(arr) {
    if (arr.length < 2) {
        return "no second element in arr";
    }
    
    let maxElementInArr = Math.max(...arr);
    let secondMaxElementInArr = -Infinity;
    let secondMaxElementIndexInArr = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > secondMaxElementInArr && arr[i] !== maxElementInArr) {
            secondMaxElementInArr = arr[i];
            secondMaxElementIndexInArr = i;
        }
    }

    return secondMaxElementIndexInArr;
}

console.log(secondMaximumElementIndex2([23, -98, 0, -456, 12, 8]),"fff");

// 3
// comment for me : checked
function padAndRepeatArray(arr,padAmount,padRepeatCount) {
    if (padAmount > arr.length) {
        return "Invalid padding amount";
    }
    
    let padLeftElements = arr.slice(0,padAmount);
    let padRightElements = arr.slice(-padAmount);
    let padLeft = [];
    let padRight = [];

    for (let i = 0; i < padRepeatCount; i++) {
        padLeft = padLeft.concat(padLeftElements);
        padRight = padRight.concat(padRightElements);
    }

    return padLeft.concat(arr,padRight);
}

console.log(padAndRepeatArray([1,2,3,4], 1, 3));

// 4
// comment for me : checked
function numbersLargerThanTarget(arr, target) {
    let numbersLargerThanTarget =  arr.filter(e => e > target);
    return numbersLargerThanTarget.length ? numbersLargerThanTarget : "Such values do not exist.";
}

console.log(numbersLargerThanTarget([10, 25, 16, -5, 30, 15, 24], 16));

// 5
// comment for me : checked
function findNumbersWithEvenDigitsInRange(rangeA,rangeB) {
    let res = [];
    for (let i = rangeA; i <= rangeB; i++) {
        let isEven = true;
        let j = i;
        while (j) {
            
            let lastDigit = j % 10;
            if (lastDigit % 2 !== 0) {
                isEven = false;
            }
            
            j = Math.floor(j / 10);
        }

        if (isEven) {
            res.push(i);
        }
    }

    return res.length ? res.join(",") : "Such numbers does not exist.";
}

console.log(findNumbersWithEvenDigitsInRange(19, 42));

