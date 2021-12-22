import React from 'react';
import PropTypes from 'prop-types';
import '../styles/card.css';


class CardBlock extends React.Component {

    state = {
        stateProducts: this.props.products,
        stFormValid: true,
        stNameValid: true,
        stPriceValid: true,
        stUrlValid: true,
        stQuantityValid: true,
        stСhangeValue: false,
    }


    validationName = (e) => {
        if(e.target.value === ''){
            this.setState( {stNameValid: false}, this.validationForm );
        }else{
            this.setState( {stNameValid: true}, this.validationForm );
        }
        this.changeValue(e);
    } 


    validationPrice = (e) => {
        if(e.target.value === ''){
            this.setState({stPriceValid: false}, this.validationForm);
        }else{
            this.setState({stPriceValid: true}, this.validationForm);
        }
        this.changeValue(e)
    }


    validationUrl = (e) => {
        if(e.target.value === ''){
            this.setState({stUrlValid: false}, this.validationForm);
        }else{
            this.setState({stUrlValid: true}, this.validationForm);
        }
        this.changeValue(e)
    }


    validationQuantity = (e) => {
        if(e.target.value === ''){
            this.setState( {stQuantityValid: false}, this.validationForm );
        }else{
            this.setState( {stQuantityValid: true}, this.validationForm );
        }
        this.changeValue(e);
     }

    
    changeValue = (e) => {
        if(e.target.value !== e.target.defaultValue){
            this.setState( {stСhangeValue: true}, this.props.cbСhangeValue(this.state.stСhangeValue) );
        }else{
            this.setState( {stСhangeValue: false}, this.props.cbСhangeValue(this.state.stСhangeValue) );
        }
        console.log(this.state.stСhangeValue)
        // this.props.cbСhangeValue(this.state.stСhangeValue);
    }



    validationForm = () => {
        if(!this.state.stNameValid || !this.state.stPriceValid || !this.state.stUrlValid || !this.state.stQuantityValid){
            this.setState( {stFormValid: false} );
        }else{
            this.setState( {stFormValid: true} );
        }
    }


    render(){

        console.log(this.state.stСhangeValue)

// console.log(this.state.stNameValid)
// console.log(this.state.stPriceValid)
// console.log(this.state.stUrlValid)
// console.log(this.state.stQuantityValid)

// console.log(this.qqq())
        
        return(
/*          <div>
                <button>New product</button>
                <p>{this.props.selectedProduct ? this.props.selectedProduct.photo : null}</p>
                <p>{this.props.selectedProduct ? this.props.selectedProduct.name : null}</p>
                <p>{this.props.selectedProduct ? this.props.selectedProduct.price : null}</p>
            </div> */
            <div className='CardContainer'>
                <h2>Edit existing Product</h2>
                <p>ID: {this.props.selectedProduct ? this.props.selectedProduct.code : null}</p>
                <div className='InpContainer'>
                    <span className='InpName'>Name:</span>
                    <input 
                    defaultValue= {this.props.selectedProduct ? this.props.selectedProduct.name : null} 
                    onChange={this.validationName}/>
                    <span className={this.state.stNameValid ? 'Error Display-none' : 'Error'}>Incorrect data</span>
                </div>
                <div className='InpContainer'>
                    <span className='InpName'>Price:</span>
                    <input defaultValue= {this.props.selectedProduct ? this.props.selectedProduct.price : null}
                    onChange={this.validationPrice}/>
                    <span className={this.state.stPriceValid ? 'Error Display-none' : 'Error'}>Incorrect data</span>
                </div>
                <div className='InpContainer'>
                    <span className='InpName'>URL:</span>
                    <input defaultValue= {this.props.selectedProduct ? this.props.selectedProduct.photo : null} 
                    onChange={this.validationUrl}/>
                    <span className={this.state.stUrlValid ? 'Error Display-none' : 'Error'}>Incorrect data</span>
                </div>
                <div className='InpContainer'>
                    <span className='InpName'>Quantity:</span>
                    <input defaultValue= {this.props.selectedProduct ? this.props.selectedProduct.inStock : null} 
                    onChange={this.validationQuantity}/>
                    <span className={this.state.stQuantityValid ? 'Error Display-none' : 'Error'}>Incorrect data</span>
                </div>
                <div className='BtnContainer'>
                    <button disabled={!this.state.stFormValid}>Save</button>
                    <button>Cancel</button>
                </div>
            </div>
        );
    }

   
}

export default CardBlock; 