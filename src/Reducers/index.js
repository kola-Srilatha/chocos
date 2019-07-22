import {combineReducers} from 'redux'
import brandReducer from './BrandReducer'
import chocosReducer from './ChocoReducer'
import loginReducer from './loginReducer'
import signupReducer from './signupReducer'

const rootReducer = combineReducers({
    brandReducer, 
    chocosReducer,
    loginReducer,
    signupReducer
})

export default rootReducer