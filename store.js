import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    currentStep : 0,
    userPoint : 0 
}

export const StepCounter = (state = initialState,action) => {

    console.log(state)

    switch (action.type) {
        case 'SHOW_CURRENT_STEP':
          return { ...state, currentStep : action.payload.currentStepCount }
        case 'USER_POINT':
          return { ...state, userPoint : action.payload.score }
        case 'ADD_USER_BONUS_POINT':   // hav't create this case -> just draf this action
          return { ...state, userPoint : state.userPoint + action.payload.score}
        default:
          return state;
          
    }

}


export default createStore(
    StepCounter, 
    applyMiddleware(thunk)
);