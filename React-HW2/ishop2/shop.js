
let ShopBlock = React.createClass({

    displayName: 'ShopBlock',

    propTypes: {
        name: React.PropTypes.string.isRequired,
        colName: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            code: React.PropTypes.number.isRequired,
            price: React.PropTypes.string.isRequired,
            photo: React.PropTypes.string.isRequired,
            inStock: React.PropTypes.string.isRequired,
            del: React.PropTypes.string.isRequired,
        }),
    },


    getInitialState: function() {
        return {
            stateColName: this.props.colName,
         }
    },


    render: function(){
        let tableBody = [];

        let colName =
        React.DOM.tr( {key: this.state.stateColName.code, className: 'ProductName'}, 
            React.DOM.td( {className: 'NameCol ColName'}, this.state.stateColName.name ),
            React.DOM.td( {className: 'PriceCol ColName'}, this.state.stateColName.price ),
            React.DOM.td( {className: 'PhotoCol ColName'}, this.state.stateColName.photo ),
            React.DOM.td( {className: 'InStockCol ColName'}, this.state.stateColName.inStock ),
            React.DOM.td( {className: 'DelCol ColName'}, this.state.stateColName.del ),
            );
        tableBody.push(colName);
 
      return React.DOM.table( {className:'ShopBlock'}, 
        React.DOM.caption( {className: 'TableName'},this.props.name ),
        React.DOM.tbody( {className: 'TableBody'}, tableBody ),
        React.createElement(ProductsBlock, {products: this.props.products})
        );
    },
});