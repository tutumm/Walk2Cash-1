
const getStepCount = (currentStep) => {
    
    return (dispatch) => {
        console.log(currentStep)
        dispatch( { type : 'SHOW_CURRENT_STEP',payload : { currentStepCount : currentStep}})
    }

}

const getUserPoint = (score) => {
    return (dispatch) => {
        dispatch( { type : 'USER_POINT' ,payload : { score : score} })
    }

}   
    
const getBonusPoint = (score) => {
    return (dispatch) => {
        dispatch( { type : 'ADD_USER_BONUS_POINT',payload : { score : score }})
    }
}

export { getStepCount,getUserPoint,getBonusPoint }   