import React from 'react';

function ReduceArrays({totalMoneyIncome, totalMoneySavings}){
    const income = totalMoneyIncome.reduce((prev, next) => {
        return(
            prev + next)} , 0
    );

    const savings = totalMoneySavings.reduce((prev, next)=>{
        return(
            prev + next)}, 0
    );

    return(
        <h5>{income - savings}</h5>
    )

}

function TotalMoney(props){
    return(
        <div className="text-center mb-5">
            <h1>Cash Avaliable</h1>
            <ReduceArrays totalMoneyIncome={props.totalMoneyIncome} totalMoneySavings={props.totalMoneySavings}/>
        </div>
    )

}

export default TotalMoney;