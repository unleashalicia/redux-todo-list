import types from '../actions/types';

const DEFAULT_STATE = {
    list: [
        {
            title: 'Make to do list',
            details: 'Build it in react with redux'
        },
        {
            title: 'Be cool',
            details: 'OMG, the coolest'
        },
        {
            title: 'Wear pink',
            details: 'On Wednesdays'
        },
    ]
};

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.ADD_ITEM:
            return {list: [action.payload, ...state.list]};
        default:
            return state;
    }
}

