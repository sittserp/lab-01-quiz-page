// take an input starting with Y and return boolean true

export function countAsYes(userInput) {
    return userInput.charAt(0).toUpperCase() === 'Y'; 
}