function gonoVote(array) {
    if (Array.isArray(array) === false) {
    return 'Invalid';
    }
    let haVote = 0;
    let naVote = 0;

    for (let vote of array) {
        if (vote === "ha") haVote = haVote + 1;
        else if (vote === "na") naVote= naVote + 1;
    }

   if (haVote > naVote) return true;
    else if (haVote < naVote) return false;
    else return 'equal';
}