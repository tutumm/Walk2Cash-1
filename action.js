
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

const redeemVoucher = (productDetail) => {
    return (dispatch) => {
        // console.log(productDetail)
        dispatch( { type : 'VOUCHER_REDEEM',payload : { productDetail : productDetail }})        
    }
}

export { getStepCount,getUserPoint,getBonusPoint,redeemVoucher }   