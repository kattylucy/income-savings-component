import React from 'react';


function MapSavings({savings}){
    return(
        savings.map(item => {
            return(
                <div key={item.id} className="d-flex justify-content-between">
                    <h5>{item.name}</h5>
                    <h5>{item.amount}</h5>
                </div>
            );
        })
    );
}

function ReduceSavings({savings}){
    return(
        <h5>${savings.reduce(function(prev, next){
            return prev + next.amount}, 0)}
        </h5>
    );
}


function Savings(props){
    return(
    <div className="card mx-5">
        <div className="card-header d-flex justify-content-between">
            <h3>Savings</h3>
            <button className="addBtn" onClick={props.modal}>+</button>
        </div>
        <div className="card-body">
            <MapSavings savings={props.savings} />
        </div>
        <div className="card-footer d-flex justify-content-between">
            <h3>Total</h3>
            <ReduceSavings savings={props.savings}/>
        </div>
    </div>
    )
}

export default Savings;
