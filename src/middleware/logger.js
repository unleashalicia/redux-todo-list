

export default store => next => action => {

    console.log('Logger: ', action);

    const result = next(action);

    console.log("Next State: ", store.getState());

    return result;

}






/*


Long-hand translation:

export default function(store){
    return function(next){
        return function(action){
         //code goes here.
         }
     }
 }


*/