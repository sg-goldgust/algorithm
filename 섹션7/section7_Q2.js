let solution = () => {
    let answer = arr;
    for (let i = 0; i < arr.length -1 ; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j + 1] < arr[j]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return answer;
}
arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));