import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    currentStep : 0,
    userPoint : 0,
    bonusPoint : 0,
    totalPoint : 0 
}

export const StepCounter = (state = initialState,action) => {

    console.log(state)

    switch (action.type) {
        case 'SHOW_CURRENT_STEP':
          return { ...state, currentStep : action.payload.currentStepCount }
        case 'USER_POINT':
          return { ...state, 
                   userPoint : action.payload.score, 
                   totalPoint : state.userPoint + state.bonusPoint 
                 }
        case 'ADD_USER_BONUS_POINT':   
          return { ...state, 
                    bonusPoint : state.bonusPoint + action.payload.score, 
                    totalPoint : state.userPoint + state.bonusPoint + action.payload.score
                  }
        default:
          return state

    }

}


export default createStore(
    StepCounter, 
    applyMiddleware(thunk)
);