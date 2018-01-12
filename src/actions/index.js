import types from './types';
import axios from 'axios';

const BASE_URL = "http://api.reactprototypes.com";
const API_KEY = '?key=aliciathegreat';

export function addItem(item){

    const request = axios.post(BASE_URL + '/todos' + API_KEY, item);

    return {
        type: types.ADD_ITEM,
        payload: request
    }
}

export function getItems(){
    const request = axios.get(BASE_URL + '/todos' + API_KEY);

    return {
        type: types.GET_ITEMS,
        payload: request
    }
}

export function getSingleItem(id){
    const request = axios.get(BASE_URL + '/todos/' + id + API_KEY);

    return {
        type: types.GET_SINGLE_ITEM,
        payload: request
    }
}

/*

axios.delete('http://api.reactprototypes.com/todos/[id number]?key=[your API key]

axios.put('http://api.reactprototypes.com/todos/[id number]?key=[your API key]: toggle completeness.

Display all info for each item.  Format time codes properly.  Make a button for toggling completeness, which displays time, and a button for deleting.  Redirect back to home page like add button.

 */