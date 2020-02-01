const getWordCount = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    return wordArray.length;
  }
  
  const getLetterCount = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    let totalLetters = 0;
    for (let word of wordArray) {
      word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      totalLetters += word.length;
    }
    return totalLetters;
  }

  const testSimpleWordCount = () => {
    const testString = 'I have four words!';
    if (getWordCount(testString) !== 4) {
        console.error('Simple getWordCount failed!');
    }
}

const testEdgeWordCount = () => {
    const testString = '             ';
    if (getWordCount(testString) !== 0) {
        console.error('Edge getWordCount failed!');
    }
}

const testSimpleLetterCount = () => {
    const testString = 'I have twenty one letters!';
    if (getLetterCount(testString) !== 21) {
        console.error('Simple getLetterCount failed!');
    }
}

const testEdgeLetterCount = () => {
    const testString = '")(&;//!!';
    if (getLetterCount(testString) !== 0) {
        console.error('Edge getLetterCount failed!');
    }
}



