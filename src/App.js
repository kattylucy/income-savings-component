import React, { Component } from 'react';
import './App.css';

import Jumbotron  from './components/Jumbotron';
import Income  from './components/Income';
import Savings from './components/Savings';
import AddModal from './components/Modal';


class App extends Component{
  constructor(props){
    super(props);


    this.state = {
      isModalOpen : false,
      inputValue:'',
      selectValue:'',
      amount: 0,
      income: [{
      }],
      savings: [{
      }],
    }

    this.toggleModal = this.toggleModal.bind(this);

  }

  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  getInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  getAmountValue = (e) =>{
    this.setState({
      amount : e.target.value
    })
  }

  getSelectValue = (e)=>{
    this.setState({
      selectValue : e.target.value
    })
  }

  addItems = (e) =>{
    e.preventDefault();
    let obj = {'name': this.state.inputValue, 'amount': this.state.amount}
    if(this.state.selectValue === 'income'){
      this.setState({
        income: [...this.state.income, obj],
        isModalOpen : false
      })
    }
    else if(this.state.selectValue === 'savings'){
      this.setState({
        savings: [...this.state.savings, obj],
        isModalOpen : false
      })
    }
   
  }



  render(){
    return(
      <div>
        <Jumbotron />
        <Income 
          modal={this.toggleModal}
          income={this.state.income}
        />
        <Savings
          modal={this.toggleModal}
          savings={this.state.savings}
        />
        


        <AddModal 
          open={this.state.isModalOpen} 
          openEvent={this.toggleModal}
          getInputValue={this.getInputValue}
          getAmountValue={this.getAmountValue}
          getSelectValue={this.getSelectValue}
          addItems={this.addItems}
          />

        
      </div>


    )
  };
}

export default App;
