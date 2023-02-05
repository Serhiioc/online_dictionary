import {ADD_WORD} from './word.action';

export const initialState = {
    words: [
        {
            eng: 'apple',
            ukr: 'яблуко'
        },
        {
            eng: 'spoon',
            ukr: 'виделка'
        },
        {
            eng: 'familly',
            ukr: `сім'я`
        },
        {
            eng: 'man',
            ukr: 'чоловік'
        },
        {
            eng: 'cat',
            ukr: 'кішка'
        },
        {
            eng: 'candy',
            ukr: 'цукерка'
        },
        {
            eng: 'cup',
            ukr: 'кружка'
        },
        {
            eng: 'car',
            ukr: 'авто'
        },
        {
            eng: 'door',
            ukr: 'двері'
        },
        {
            eng: 'window',
            ukr: 'вікно'
        },
        {
            eng: 'sky',
            ukr: 'небо'
        },
        {
            eng: 'dog',
            ukr: 'собака'
        }
    ]

}

const wordReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORD:
            return {
                ...state,
                words: state.words.concat(action.payload.wordsData) 
            };
        default:
            return state
    }
};

export default wordReducer;