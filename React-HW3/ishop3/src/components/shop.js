import React from 'react';
import PropTypes from 'prop-types';
import '../styles/shop.css';

import ProductsBlock from '../components/product'
import CardBlock from './card'


class ShopBlock extends React.Component {
    static propTypes= {
        name: PropTypes.string.isRequired,
        colName: PropTypes.shape({
            name: PropTypes.string.isRequired,
            code: PropTypes.number.isRequired,
            price: PropTypes.string.isRequired,
            photo: PropTypes.string.isRequired,
            inStock: PropTypes.string.isRequired,
            btnDel: PropTypes.string.isRequired,
        }),
        products: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            code: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            photo: PropTypes.string.isRequired,
            inStock: PropTypes.number.isRequired,
            btnEdit: PropTypes.string.isRequired,
            btnDel: PropTypes.string.isRequired,
        })),
    }

    state = {
        stTrClicked: null,
        stProducts: this.props.products,
        stFormValid: true,
        stСhangeValue: false,
        stCardMode: 0,
        stSelectProduct: null,
        stValueName: '',
        stValuePrice:'',
        stValueUrl:'',
        stValueQuantity: '',
        stSaveСhanges: 0,
        flagSaveClick: false,
        stBtnDelDisabled: 0,
    }

    trClicked = (data) => {
        this.setState( {stTrClicked: data}, this.setSelectProduct )
    }

    changeValue = (data) => {     
        this.setState( {stСhangeValue: data} )
    }

    setMode = (data) => {
        this.setState( {stCardMode: data} )
    }

    setValueName = (data) => {
        this.setState( {stValueName: data} )
    }

    setValuePrice = (data) => {
        this.setState( {stValuePrice: data} )
    }

    setValueUrl = (data) => {
        this.setState( {stValueUrl: data} )
    }

    setValueQuantity = (data) => {
        this.setState( {stValueQuantity: data} )
    }

    setSaveСhanges = (data) => {
        this.setState( {stSaveСhanges: data} )
    }

    setBtnDelDisabled = (data) => {
        this.setState( {stBtnDelDisabled: data} )
    }

    setSelectProduct = () => {
        this.state.stProducts.forEach((item) => {            
            if(item.code == this.state.stTrClicked){
                this.setState( {stSelectProduct: item } );
            }
        })
    }

    setNewProduct = (data) => {
        this.setState( {stNewProduct: data} )
    }
    
    render() {
        
        let colNameTr =
        
            <tr key= {this.props.colName.code} className='ProductName'>
                <td className='NameCol ColName'>{this.props.colName.name}</td>
                <td className='PriceCol ColName'>{this.props.colName.price}</td>
                <td className='PhotoCol ColName'>{this.props.colName.photo}</td>
                <td className='InStockCol ColName'>{this.props.colName.inStock}</td>
                <td className='DelCol ColName'>{this.props.colName.btnDel}</td>
            </tr>
      

        return (
            <div>
                <table className='ShopBlock'>
                    <caption className='TableName'>{this.props.name}</caption>
                    <tbody className='TableBody'>
                        {colNameTr} 
                    </tbody>
                <ProductsBlock products={this.state.stProducts} 
                cbTrClicked={this.trClicked} 
                cbCardMode={this.state.stCardMode}
                stFormValid={this.state.stFormValid}
                stСhangeValue={this.state.stСhangeValue}
                setMode={this.setMode} 
                prValueName= {this.state.stValueName}
                prValuePrice= {this.state.stValuePrice}
                prValueUrl= {this.state.stValueUrl}
                prValueQuantity= {this.state.stValueQuantity}
                cbSaveСhanges={this.state.stSaveСhanges}
                cbBtnDelDisabled={this.state.stBtnDelDisabled}
                prNewProduct = {this.state.stNewProduct}/> 
                
                </table>
                <div>
                    <CardBlock cbTrClicked={this.state.stTrClicked} 
                    selectedProduct ={this.state.stSelectProduct}
                    cbСhangeValue = {this.changeValue}
                    cbTrClicked={this.trClicked} 
                    cbCardMode = {this.state.stCardMode}
                    cbValueName= {this.setValueName}
                    cbValuePrice= {this.setValuePrice}
                    cbValueUrl= {this.setValueUrl}
                    cbValueQuantity= {this.setValueQuantity}
                    cbSaveСhanges={this.setSaveСhanges}
                    setMode={this.setMode}
                    cbBtnDelDisabled={this.setBtnDelDisabled}
                    cbProducts={this.state.stProducts}
                    cbNewProduct={this.setNewProduct} />
                </div>
            </div>
        )
    }
}

export default ShopBlock;