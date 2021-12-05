import {createStore} from "redux";
 import {allReducers} from "./MyReducers";




export default createStore(

    allReducers,{}

)
