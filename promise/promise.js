function divide(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject(new Error("We can't perform the division by zero"));
        } else {
            resolve(num1 / num2);
        }
    });
}

async function performDivision() {
    try {
        const result = await divide(10, 0);
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

performDivision();
