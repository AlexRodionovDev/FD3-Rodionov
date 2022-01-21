import React from 'react';
import PropTypes from 'prop-types';
import '../styles/card.css';


class CardBlock extends React.Component {

    static propTypes= {
        cbProducts: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                    code: PropTypes.number.isRequired,
                    price: PropTypes.number.isRequired,
                    photo: PropTypes.string.isRequired,
                    inStock: PropTypes.number.isRequired,
                    btnDel: PropTypes.string.isRequired,
            })
        ),
        selectedProduct: PropTypes.shape({
            name: PropTypes.string.isRequired,
                code: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                photo: PropTypes.string.isRequired,
                inStock: PropTypes.number.isRequired,
                btnDel: PropTypes.string.isRequired,
        }),
        cbCardMode: PropTypes.number.isRequired,
    }


    state = {
        stSelectedProduct: this.props.selectedProduct,
        trClicked: 0,
        stFormValid: true,
        stNameValid: true,
        stPriceValid: true,
        stUrlValid: true,
        stQuantityValid: true,
        stСhangeValue: false,
        stCardMode: 0,
        stValueName: '',
        stValuePrice:'',
        stValueUrl:'',
        stValueQuantity: '',
        stProducts: this.props.cbProducts,
    }


    validationName = (e) => {
        if(e.target.value === ''){
            this.setState( {stNameValid: false}, this.validationForm );
        }else{
            this.setState( {stNameValid: true}, this.validationForm );
        }
        this.setState( {stValueName: e.target.value}, this.changeValue);
    } 


    validationPrice = (e) => {
        console.log(e.target.value)
        if(e.target.value === ''){
            this.setState({stPriceValid: false}, this.validationForm);
        }else{
            this.setState({stPriceValid: true}, this.validationForm);
        }
        this.setState( {stValuePrice: e.target.value}, this.changeValue);
    }


    validationUrl = (e) => {
        if(e.target.value === ''){
            this.setState({stUrlValid: false}, this.validationForm);
        }else{
            this.setState({stUrlValid: true}, this.validationForm);
        }
        this.setState( {stValueUrl: e.target.value}, this.changeValue);
    }


    validationQuantity = (e) => {
        if(e.target.value === ''){
            this.setState( {stQuantityValid: false}, this.validationForm );
        }else{
            this.setState( {stQuantityValid: true}, this.validationForm );
        }
        this.setState( {stValueQuantity: e.target.value}, this.changeValue);
    }
    

    validationForm = () => {
        if(!this.state.stNameValid || !this.state.stPriceValid || !this.state.stUrlValid || !this.state.stQuantityValid){
            this.setState( {stFormValid: false} );
        }else{
            this.setState( {stFormValid: true} );
        }
        this.setState( {stSelectedProduct: this.props.selectedProduct} );
    }


    cbValueName = () => {
        this.props.cbValueName(this.state.stValueName)
    }

    cbValuePrice = () => {
        this.props.cbValuePrice(this.state.stValuePrice)
    }

    cbValueUrl = () => {
        this.props.cbValueUrl(this.state.stValueUrl)
    }

    cbValueQuantity = () => {
        this.props.cbValueQuantity(this.state.stValueQuantity)
    }
 

    changeValue = () => {
        if(this.props.selectedProduct){
            let defValue = this.props.selectedProduct;

            let currentValueName = this.state.stValueName || defValue.name || null;
            let currentValuePrice = this.state.stValuePrice || defValue.price || null;
            let currentValueUrl = this.state.stValueUrl || defValue.photo || null;
            let stValueQuantity = this.state.stValueQuantity || defValue.inStock || null;

            if (currentValueName !== defValue.name || currentValuePrice != defValue.price ||
                currentValueUrl !== defValue.photo || stValueQuantity != defValue.inStock){
                this.setState( {stСhangeValue: true}, this.cbChangeValue );
            }else{
                this.setState( {stСhangeValue: false}, this.cbChangeValue );
            }
        }
        this.cbValueName();
        this.cbValuePrice();
        this.cbValueUrl();
        this.cbValueQuantity();
    }


    cbChangeValue = () => {
        this.props.cbСhangeValue(this.state.stСhangeValue)
    }

    setBtnCansel = () => {
        this.setState( {stCardMode:0}, this.cbSetMode );
        this.setState( {stСhangeValue:false}, this.cbChangeValue );
        this.setState( {stBtnDelDisabled: Math.random()}, this.setBtnDelDisabled );
        this.setState( {stValueName: ''} );
        this.setState( {stValuePrice:''} );
        this.setState( {stValueUrl:''} );
        this.setState( {stValueQuantity: ''} );
        this.setState( {stFormValid: true} );
        this.setState( {stNameValid: true} );
        this.setState( {stPriceValid: true} );
        this.setState( {stUrlValid: true} );
        this.setState( {stQuantityValid: true} );
    }

    setBtnDelDisabled = () => {
        this.props.cbBtnDelDisabled(this.state.stBtnDelDisabled)
    }

    setMode2 = () => {
        this.setState( {stCardMode:2}, this.cbSetMode );
        this.setState( {stFormValid: false} );
        this.setState( {stNameValid: false} );
        this.setState( {stPriceValid: false} );
        this.setState( {stUrlValid: false} );
        this.setState( {stQuantityValid: false} );
    }

    cbSetMode = () => {
        this.props.setMode(this.state.stCardMode);
    }

    saveСhanges = () => {
        let btnClick = Math.random();
        this.setState( {stSaveСhanges: btnClick}, this.cbSavedСhanges );
        this.setBtnCansel();
    }

    cbSavedСhanges =() => {
        this.props.cbSaveСhanges(this.state.stSaveСhanges);
        // this.setState
    }

    saveNewProduct = () => {

        let newProduct = {
            "name": this.state.stValueName,
            "code": this.props.cbProducts.length+1,
            "price": this.state.stValuePrice,
            "photo": this.state.stValueUrl,
            "inStock": this.state.stValueQuantity,
            "btnEdit": "Edit",
            "btnDel": "Delete",
        }
        this.setState( {stNewProduct: newProduct}, this.cbNewProduct );
        this.setBtnCansel();
    }

    cbNewProduct =() => {
        this.props.cbNewProduct(this.state.stNewProduct);
    }
 

    render(){

            let inputs = 
            <div className='Inputs'>
                <div className='InpContainer'>
                    <span className='InpName'>Name:</span>
                    <input 
                    key= {this.props.selectedProduct ? this.props.selectedProduct.code : null}
                    defaultValue={this.props.selectedProduct ? this.props.selectedProduct.name : null} 
                    onChange={this.validationName}/>
                    <span className={this.state.stNameValid ? 'Error Display-none' : 'Error'}>Incorrect data</span>
                </div>
                <div className='InpContainer'>
                    <span className='InpName'>Price:</span>
                    <input чё
                    key= {this.props.selectedProduct ? this.props.selectedProduct.code : null}
                    defaultValue= {this.props.selectedProduct ? this.props.selectedProduct.price : null}
                    onChange={this.validationPrice}/>
                    <span className={this.state.stPriceValid ? 'Error Display-none' : 'Error'}>Incorrect data</span>
                </div>
                <div className='InpContainer'>
                    <span className='InpName'>URL:</span>
                    <input 
                    key= {this.props.selectedProduct ? this.props.selectedProduct.code : null}
                    defaultValue= {this.props.selectedProduct ? this.props.selectedProduct.photo : null} 
                    onChange={this.validationUrl}/>
                    <span className={this.state.stUrlValid ? 'Error Display-none' : 'Error'}>Incorrect data</span>
                </div>
                <div className='InpContainer'>
                    <span className='InpName'>Quantity:</span>
                    <input 
                    key= {this.props.selectedProduct ? this.props.selectedProduct.code : null}
                    defaultValue= {this.props.selectedProduct ? this.props.selectedProduct.inStock : null} 
                    onChange={this.validationQuantity}/>
                    <span className={this.state.stQuantityValid ? 'Error Display-none' : 'Error'}>Incorrect data</span>
                </div>
                <div className='BtnContainer'>
                    <button disabled={!this.state.stFormValid} onClick={this.saveСhanges} >Save</button>
                    <button onClick={this.setBtnCansel}>Cancel</button>
                </div>
            </div>;


            let inputs2 = 
            <div className='Inputs'>
                <div className='InpContainer'>
                    <span className='InpName'>Name:</span>
                    <input 
                    key= {this.props.cbProducts.length+1}
                    defaultValue='' 
                    onChange={this.validationName}/>
                    <span className={this.state.stNameValid ? 'Error Display-none' : 'Error'}>Incorrect data</span>
                </div>
                <div className='InpContainer'>
                    <span className='InpName'>Price:</span>
                    <input 
                    key= {this.props.cbProducts.length+1}
                    defaultValue='' 
                    onChange={this.validationPrice}/>
                    <span className={this.state.stPriceValid ? 'Error Display-none' : 'Error'}>Incorrect data</span>
                </div>
                <div className='InpContainer'>
                    <span className='InpName'>URL:</span>
                    <input 
                    key= {this.props.cbProducts.length+1}
                    defaultValue='' 
                    onChange={this.validationUrl}/>
                    <span className={this.state.stUrlValid ? 'Error Display-none' : 'Error'}>Incorrect data</span>
                </div>
                <div className='InpContainer'>
                    <span className='InpName'>Quantity:</span>
                    <input 
                    key= {this.props.cbProducts.length+1}
                    defaultValue=''  
                    onChange={this.validationQuantity}/>
                    <span className={this.state.stQuantityValid ? 'Error Display-none' : 'Error'}>Incorrect data</span>
                </div>
                <div className='BtnContainer'>
                    <button disabled={!this.state.stFormValid} onClick={this.saveNewProduct} >Save</button>
                    <button onClick={this.setBtnCansel}>Cancel</button>
                </div>
            </div>

        if (this.props.cbCardMode === 0){
            return(
                <div className='CardContainer'>
                    <button onClick= {this.setMode2}>New product</button>
                    <h2>{this.props.selectedProduct ? this.props.selectedProduct.name : null}</h2>
                    <p>{this.props.selectedProduct ? this.props.selectedProduct.photo : null}</p>
                    <p>{this.props.selectedProduct ? `Prise: ${this.props.selectedProduct.price}` : null}</p>
                </div>
            )
        }else if (this.props.cbCardMode === 1 || this.state.stCardMode === 'newProd') {
            return(
                <div className='CardContainer'>
                    <h2>Edit existing Product</h2>
                    <p>ID: {this.props.selectedProduct ? this.props.selectedProduct.code : null}</p>
                    {inputs}
                </div>
            );
        }else if(this.props.cbCardMode === 2){
            return(
                <div className='CardContainer'>
                    <h2>Add new Product</h2>
                    <p>ID: {this.props.cbProducts.length+1}</p>
                    {inputs2}
                </div>
            );
        }
    }
}

export default CardBlock; 