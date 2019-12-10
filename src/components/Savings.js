import React from 'react';



function Savings(props){
    return(
    <div className="card mx-5">
        <div className="card-header d-flex justify-content-between">
            <h3>Savings</h3>
            <button className="addBtn" onClick={props.modal}>+</button>
        </div>
        <div>
        <div className="card-body">
        {props.savings.map(item =>{
            return(
                <div className="d-flex justify-content-between">
                <p>{item.name}</p>
                <p>{item.amount}</p>
                </div>
            )
        })}          
        </div>
        </div>
    </div>
    )
}

export default Savings;
