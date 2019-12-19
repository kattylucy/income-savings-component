import React, { Component } from 'react';
import '../src/css/App.css';
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
      touched:{
        inputValue: false
      },
      button: ''
    }

    this.toggleModal = this.toggleModal.bind(this);
  }

  handleBlur = () => {
    this.setState({
      touched:{
        inputValue: true
      }
    })
  }

  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  getInputValue = (e) => {
    this.setState({
      inputValue: e.target.value,
      button: e.target.value
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
      })
    }
    else if(this.state.selectValue === 'savings'){
      this.setState({
        savings: [...this.state.savings, obj],
        isModalOpen : false,
      })
    }
  }

  deleteElementIncome = (id) => {
    const deletingIncome = [...this.state.income];
    deletingIncome.splice(id, 1);
    this.setState({
      income:deletingIncome
    })
  }

  deleteElementSavings = (id) => {
    const deletingSavings=[...this.state.savings];    
    deletingSavings.splice(id,1);
    this.setState({
      savings:deletingSavings
    })
  }




  render(){
    return(
      <div>
        <Jumbotron />
        <TotalMoney 
          income={this.state.income}
          savings={this.state.savings}
          userName={this.props.userName}
        />
        <Income 
          modal={this.toggleModal}
          income={this.state.income}
          deleting={this.deleteElementIncome}
        />
        <Savings
          modal={this.toggleModal}
          savings={this.state.savings}
          deleting={this.deleteElementSavings}
        />
        
        <AddModal 
          open={this.state.isModalOpen} 
          openEvent={this.toggleModal}
          getInputValue={this.getInputValue}
          getAmountValue={this.getAmountValue}
          getSelectValue={this.getSelectValue}
          addItems={this.addItems}
          handleBlur={this.handleBlur}
          touched={this.state.touched.inputValue}
          button={this.state.button}
          />

        
      </div>


    )
  };
}

export default App;
