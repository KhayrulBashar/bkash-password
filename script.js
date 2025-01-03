var inputValue = document.getElementById('inputVaue');
var updateMessage = document.getElementById('updateMessage');
var errorMessage = document.getElementById('errorMessage');
var getPass = document.getElementById('btn');

getPass.addEventListener('click', () => {
    let result = inputValue.value;

    // Clear previous messages
    errorMessage.textContent = '';
    updateMessage.textContent = '';

    // Validation checks
    if (!result || isNaN(result)) {
        errorMessage.textContent = 'Input must be a numeric value.';
        return;
    }

    if (result <= 0) {
        errorMessage.textContent = 'Input cannot be negative or zero.';
        return;
    }

    if (!Number.isInteger(Number(result))) {
        errorMessage.textContent = 'Input cannot be a fractional number.';
        return;
    }

    if (result.length < 8 || result.length > 9) {
        errorMessage.textContent = 'Input must be an 8 or 9 digit number.';
        return;
    }

    if (result % 1020 !== 0) {
        errorMessage.textContent = 'Input must be a multiple of 1020.';
        return;
    }

    // Successful validation
    var password = result/1020;
    updateMessage.innerHTML = `Valid input received!<br>Your Password is: ${password}`;
    console.log('Input:', result);
});
