import React, { Component } from 'react';
import './App.css';

import Jumbotron  from './components/Jumbotron';
import TotalMoney from './components/TotalMoney';
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
      income: [],
      savings: [],
      totalMoneyIncome:[],
      totalMoneySavings:[]
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
    let number = Number(this.state.amount)
    let obj = {'name': this.state.inputValue, 'amount': number, 'id':this.state.inputValue}
    
    if(this.state.selectValue === 'income'){
      this.setState({
        income: [...this.state.income, obj],
        isModalOpen : false,
        totalMoneyIncome: [...this.state.totalMoneyIncome, number]
      })
    }
    else if(this.state.selectValue === 'savings'){
      this.setState({
        savings: [...this.state.savings, obj],
        isModalOpen : false,
        totalMoneySavings: [...this.state.totalMoneySavings, number]
      })
    }


    

  }





  render(){
    return(
      <div>
        <Jumbotron />
        <TotalMoney 
          totalMoneyIncome={this.state.totalMoneyIncome}
          totalMoneySavings={this.state.totalMoneySavings}
          />
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
