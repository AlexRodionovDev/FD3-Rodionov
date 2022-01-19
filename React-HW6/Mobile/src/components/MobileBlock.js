import React from "react";
import PropTypes from 'prop-types';
import ControlButtons from '../components/ControlButtons';
import MobileCompanies from '../components/MobileCompanies';
import UsersBlock from '../components/UsersBlock';
import EditUserBlock from '../components/editUsersBlock';



class MobileBlock extends React.PureComponent {


    cbEditNewUser = () => {
        this.setState()

    
    }

    render() {
        console.log('рендер MobileBlock');
        return(
            <div className="MobileBlock">
                <MobileCompanies/>
                <ControlButtons/>
                <UsersBlock colName = {this.props.colName} usersArr = {this.props.usersArr}/>
                <EditUserBlock usersArr = {this.props.usersArr} colName = {this.props.colName}/>
            </div>

        )

    }

}

export default MobileBlock;