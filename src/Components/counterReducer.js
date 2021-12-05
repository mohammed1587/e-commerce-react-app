 const counterReducer = (state = 0, action)=>{
    switch (action.type){
        case '+':
             return state+action.payload
        case '-':
            return state -action.payload
        default:
            return state
    }
 }

export default counterReducer()
