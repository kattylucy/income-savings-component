import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';


function AddModal(props){
    return(
        <Modal isOpen={props.open} toggle={props.openEvent}>
       <ModalHeader toggle={props.openEvent} className="modalHeader">Add New Item</ModalHeader>
        <ModalBody>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name Item</label>
                    <input type="text" id="name" className="form-control" placeholder="e.g. Salary" onChange={props.getInputValue}/>
                </div>
                <div>
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input type="number" id="amount" className="form-control" placeholder="$" onChange={props.getAmountValue}/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="modal-select">Category</label>
                    <select className="custom-select" id="modal-select" onChange={props.getSelectValue}>
                        <option defaultValue>Choose...</option>
                        <option value="income">Income</option>
                        <option value="savings">Savings</option>
                        <option value="expenses">Recurrent Expenses</option>
                        <option value="otherexpenses">Other Expenses</option>
                    </select>
                </div>
            </form>
          
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.addItems}>Save</Button>{' '}
          <Button color="secondary" onClick={props.openEvent}>Cancel</Button>
        </ModalFooter>

      </Modal>
    );
}

export default AddModal;