import React from 'react';
import PropTypes from 'prop-types';
import '../styles/product.css';


class ProductsBlock extends React.Component {


    static propTypes= {
        products: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                code: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                photo: PropTypes.string.isRequired,
                inStock: PropTypes.number.isRequired,
                btnDel: PropTypes.string.isRequired,
            })
        ),
        cbBtnDelDisabled: PropTypes.number.isRequired,
        cbCardMode: PropTypes.number.isRequired,
        cbSaveСhanges: PropTypes.number.isRequired,
        prValueName: PropTypes.string.isRequired,
        prValuePrice: PropTypes.string.isRequired,
        prValueQuantity: PropTypes.string.isRequired,
        prValueUrl: PropTypes.string.isRequired,
        prNewProduct: PropTypes.shape({
            name: PropTypes.string,
            code: PropTypes.number,
            price: PropTypes.string,
            photo: PropTypes.string,
            inStock: PropTypes.string,
            btnDel: PropTypes.string,
        }),
        stFormValid: PropTypes.bool.isRequired,
        stСhangeValue: PropTypes.bool.isRequired,
    }


    state = {
        stateProducts: this.props.products,
        trClicked: 0,
        stBtnDelDisabled: false,
        
    }



   
    trDel = (e) => {
        let delElem = this.state.stateProducts;

        delElem.forEach((elem, i) => {

            if(e.target.parentElement.parentElement.id == elem.code){

                if(confirm('Удалить товар из списка')){
                    delElem.splice(i,1)
                }
            }
            this.setState( {stateProducts: delElem} );
        })
    }


    setTrClick = (e) => { 
        if(!this.props.stСhangeValue && this.props.cbCardMode !== 2){
            this.setState({trClicked: e.target.parentElement.id}, this.cbTrClicked);
            this.setState( {stCardMode:0}, this.cbSetCardMode );
        }
    }

    setEditClick = (e) => { 
        this.setState({trClicked: e.target.parentElement.parentElement.id}, this.cbTrClicked);
        this.setState( {stCardMode:1}, this.cbSetCardMode );
        this.setState( {stBtnDelDisabled: true} )
        e.stopPropagation();
    }
    

    cbTrClicked = () => { 
        this.props.cbTrClicked(this.state.trClicked)
    }

    cbSetCardMode = () => {
        this.props.setMode(this.state.stCardMode)
    }


    changeTableValue = () => {
        this.state.stateProducts.filter((elem)=> {
           
            if(this.state.trClicked == elem.code){
                if(this.props.prValueName){
                    elem.name = this.props.prValueName;
                }
                if(this.props.prValuePrice){
                    elem.price = this.props.prValuePrice;
                }
                if(this.props.prValueQuantity){
                    elem.inStock = this.props.prValueQuantity;
                }
                if(this.props.prValueUrl){
                    elem.photo = this.props.prValueUrl;
                }
            }
        })
            this.setState({stateProducts: this.state.stateProducts})
    }
   
    addNewProduct = () => {
        let newProducts = this.state.stateProducts;
        let newProd = this.props.prNewProduct;

        if(this.props.prNewProduct){
            newProducts.push(newProd);
        }
        this.setState({stateProducts: this.state.stateProducts})
    }

    delTrSelection = () => {
            this.setState( {trClicked: 0})
    }


    componentDidUpdate(prevProps) {
        if (this.props.cbSaveСhanges !== prevProps.cbSaveСhanges && this.props.cbSaveСhanges) {
          this.changeTableValue();
        }
        if (this.props.cbBtnDelDisabled !== prevProps.cbBtnDelDisabled && this.props.cbBtnDelDisabled) {
            this.setBtnDelDisabled();
            
        }
        if (this.props.prNewProduct !== prevProps.prNewProduct && this.props.prNewProduct) {
            this.addNewProduct();
        }
        if (this.props.cbCardMode !== prevProps.cbCardMode && this.props.cbCardMode === 2) {
            this.delTrSelection();
        }
      }

      setBtnDelDisabled = () => {
          this.setState( {stBtnDelDisabled: false} )
      }


    render() {

        let prodBody = [];   

        this.state.stateProducts.forEach((elem)=> {
            let productCode = 
                <tr key= {elem.code} id={elem.code} onClick={this.setTrClick} className={elem.code == this.state.trClicked ? 'BrownColor Product': 'Product'}>
                    <td className='Name tdItem'>{elem.name}</td>
                    <td className='Price tdItem'>{elem.price}</td>
                    <td className='Photo tdItem'>{elem.photo}</td>
                    <td className='InStock tdItem'>{elem.inStock}</td>
                    <td className='BtnDelContainer tdItem'>
                        <button className='BtnEdit' onClick= {this.setEditClick} disabled={this.props.stСhangeValue || this.props.cbCardMode === 2}> {elem.btnEdit} </button>
                        <button className='BtnDel' onClick= {this.trDel} disabled={this.state.stBtnDelDisabled || this.props.cbCardMode === 2}> {elem.btnDel} </button>
                    </td>
                </tr>
            prodBody.push(productCode);
        });

       return (
            <tbody className= 'TableBody'>
                {prodBody}
            </tbody>
       );
    }
}

export default ProductsBlock; 
