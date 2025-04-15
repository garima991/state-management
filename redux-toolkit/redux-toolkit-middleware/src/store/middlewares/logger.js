export const logger = (store) => (next) => (action) => {
    console.log("Store: ", store);
    console.log("Next: ", next)
    console.log("Action: ", action);

    // by default middleware stops the action
    // so in order to send the action to the store we have to use next
    next(action);
}







// middlware are cuuried functions

// function logger (store) {
//     return function (next) {
//         return function (action){
//             console.log("Store: ", store);
//             console.log("Next: ", next)
//             console.log("Action: ", action);
//         }
//     }
// }