import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {btnClickEvents} from './events';


class MobileClient extends React.PureComponent {

    editUserInfo = (e) => {
        btnClickEvents.emit('btnEditClicked', e.target);
    }

    userDel = (e) => {
        btnClickEvents.emit('btnDelClicked', e);
    }


    render() {
        console.log('рендер MobileClient id:' + this.props.clientInfo.code)
        return(
            <tr id={this.props.clientInfo.code} >
               <td className='tdSurname'>{this.props.clientInfo.surname}</td>
               <td className='tdName'>{this.props.clientInfo.name}</td>
               <td className='tdPatronymic'>{this.props.clientInfo.patronymic}</td>
               <td className='tdBalance'>{this.props.clientInfo.balance}</td>
               <td className={this.props.clientInfo.balance > 0 ? 'tdStatus' : 'tdStatus redBackground'}>
                  {this.props.clientInfo.balance > 0 ? 'active' : 'blocked'}
               </td>
               <td className='tdEdit'><button onClick={this.editUserInfo}>Редактировать</button></td>
               <td className='tdDelete'><button onClick={this.userDel}>Удалить</button></td>
            </tr>
        )
    }
}

export default MobileClient;