import React from 'react';

function MapIncome({income}){
    return(
        income.map(item =>{
            return(
                <div key={item.id} className="d-flex justify-content-between">
                    <h5>{item.name}</h5>
                    <h5>{item.amount}</h5>
                </div>
            )
        })
    );
}

function ReduceIncome({income}){
    return(
        <h5>${income.reduce(function(prev, next){
            return prev + next.amount}, 0)}
        </h5>
    );
}



function Income(props){
    return(
    <div className="card mx-5 mb-4">
        <div className="card-header d-flex justify-content-between">
            <h3>Income</h3>
            <button className="addBtn" onClick={props.modal}>+</button>
        </div>
        <div className="card-body">
            <MapIncome income={props.income}/>
        </div>
        <div className="card-footer d-flex justify-content-between">
            <h3>Total</h3>
            <ReduceIncome income={props.income}/>
        </div>
    </div>
    )
}

export default Income;
