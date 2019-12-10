import React from 'react';



function Income(props){
    return(
    <div className="card mx-5 mb-4">
        <div className="card-header d-flex justify-content-between">
            <h3>Income</h3>
            <button className="addBtn" onClick={props.modal}>+</button>
        </div>
        <div>
        <div className="card-body">
        {props.income.map(item =>{
            return(
                <div className="d-flex justify-content-between">
                <h5>{item.name}</h5>
                <h5>{item.amount}</h5>
                </div>
            )
        })}          
        </div>
        </div>
    </div>
    )
}

export default Income;
