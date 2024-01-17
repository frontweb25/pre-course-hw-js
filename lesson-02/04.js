const giveMeRightCondition = (value1, value2, maximum) => {
    debugger
    if (value1 === value2 && value2 <= maximum) {
        console.log('Success!');
    } else {
        console.log('Something wrong!');
    }
}

giveMeRightCondition(100, 100, 200)