import React from 'react';

function MapIncome({income, deleting}){
    return(
        income.map((item, index) =>{
            return(
                <div key={item.id} className="d-flex justify-content-between">
                    <div className="d-flex">
                        <button className="deleteBtn" onClick={() => deleting(index)}>X</button>
                        <h5 className="ml-3 mt-1">{item.name}</h5>
                    </div>
                    <h5>${item.amount}</h5>
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
            <MapIncome income={props.income} deleting={props.deleting}/>
        </div>
        <div className="card-footer d-flex justify-content-between">
            <h3>Total</h3>
            <ReduceIncome income={props.income}/>
        </div>
    </div>
    )
}

export default Income;
