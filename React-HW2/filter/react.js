
const arrOfString = ['Python', 'Java', 'C', 'C++', 'JavaScript', 'C#', 'R', 'PHP'];

let Filter = React.createClass({

    displayName: 'Filter',

    getInitialState: function() {
        return {
            stateArrOfString: this.props.arrOfString,
            stateSortString: this.props.arrOfString,
            userText: null,
         }
    },

    search: function(e) {
        this.setState( {userText: e.target.value} );
    },


    sort: function() {
        let sortString = []
        this.state.stateArrOfString.map( (item) => 
            sortString.sort().push(item),
        )
        this.setState( {stateSortString: sortString} );
    },

    reset: function() {
        this.setState( {stateSortString: this.props.arrOfString} );
        this.setState( {userText: null} );
        document.querySelector('.InputText').value = '';
        document.querySelector('.Checkbox').checked = false;
    },


    render: function() {
        let displayString =[];
        if(!document.querySelector('.Checkbox') || !document.querySelector('.Checkbox').checked){
            displayString = this.state.stateArrOfString.map( (item) =>
            (item.toLowerCase().includes(this.state.userText) || !this.state.userText)
            ?React.DOM.p( {key: item, className: 'String'}, item)
            :null
            );
        }else if(document.querySelector('.Checkbox').checked){
            displayString = this.state.stateSortString.map( (item) =>
            (item.toLowerCase().includes(this.state.userText) || !this.state.userText)
            ?React.DOM.p( {key: item, className: 'String'}, item)
            :null
            );
        }
        

        return React.DOM.div( {className: 'Filter'},
            React.DOM.div( {className: 'InputContainer'},
                React.DOM.input( {className: 'Checkbox', type: 'checkbox', onChange: this.sort} ),
                React.DOM.input( {className: 'InputText', type: 'text', onChange: this.search} ),
                React.DOM.button( {className: 'ResetBtn', onClick: this.reset}, 'Сброс'),
            ),
            React.DOM.div( {className: 'FilterString'} ),
                React.DOM.div( {className: 'StringContainer',}, displayString ),
        );
    },
});


ReactDOM.render(
    React.createElement(Filter, {arrOfString: arrOfString}),
    document.querySelector('.container')
);