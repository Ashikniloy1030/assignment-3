function analyzeText(str) {
   if (typeof str !== 'string' || str.trim() === '') {
        return "Invalid";
    }

    const words = str.split(' ');

   
    let longwords = words[0]; 
    for (let word of words) {
        if (word.length > longwords.length) {
            longwords = word;
        }
    }
    const token = str.split(' ').join('').length;

    return { longwords, token };
}