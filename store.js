import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    currentStep : 0,
    userPoint : 0,
    bonusPoint : 0,
    totalPoint : 0,
    redeemPoint : 0,
    claimedVoucher : []
}

export const StepCounter = (state = initialState,action) => {
  
      console.log(state)
  
      switch (action.type) {
          case 'SHOW_CURRENT_STEP':
            return { ...state, currentStep : action.payload.currentStepCount }
          case 'USER_POINT':
            return { ...state, 
                     totalPoint : action.payload.score + state.bonusPoint - state.redeemPoint
                   }
          case 'ADD_USER_BONUS_POINT':   
            return { ...state, 
                      bonusPoint : state.bonusPoint + action.payload.score,
                      totalPoint : state.totalPoint + action.payload.score  
                    }
          case 'VOUCHER_REDEEM':
            console.log(action.payload.productDetail.brand)
            return { ...state, 
                     redeemPoint : state.redeemPoint + action.payload.productDetail.point,
                     totalPoint : state.totalPoint - action.payload.productDetail.point,
                     claimedVoucher : [ ...state.claimedVoucher,action.payload.productDetail]
                   }
          default:
            return state
            
      }
  
  }

/*
 *
 * The old logic => don't remove this part because I still use it to compare with my new optimization logic
export const StepCounter = (state = initialState,action) => {

    console.log(state)

    switch (action.type) {
        case 'SHOW_CURRENT_STEP':
          return { ...state, currentStep : action.payload.currentStepCount }
        case 'USER_POINT':
          return { ...state, 
                   userPoint : action.payload.score, 
                   totalPoint : state.userPoint + state.bonusPoint - state.redeemPoint 
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
*
*
*/


export default createStore(
    StepCounter, 
    applyMiddleware(thunk)
);