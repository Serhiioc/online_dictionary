export const ADD_WORD = 'ADD_WORD';

export const add = (wordsData) => {
    return {
        type: ADD_WORD,
        payload: {
            wordsData
        }
    }
}