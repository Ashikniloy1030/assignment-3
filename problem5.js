function analyzeText(str) {
    // Step 1: Input validation
    if (typeof str !== 'string' || str.trim() === '') {
        return "Invalid";
    }

    // Step 2: Split text into words
    const words = str.split(' ');

    // Step 3: Find the longest word
    let longwords = words[0]; // start with first word
    for (let word of words) {
        if (word.length > longwords.length) {
            longwords = word;
        }
    }

    // Step 4: Count total characters without spaces
    const token = str.split(' ').join('').length;

    // Step 5: Return result as object
    return { longwords, token };
}