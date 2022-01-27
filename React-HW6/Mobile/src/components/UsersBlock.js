import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/UsersBlock.css';
import MobileClient from '../components/MobileClient ';
import {btnClickEvents} from './events';




class UsersBlock extends React.PureComponent {

   state = {
      usersArr: [...this.props.usersArr],
      mode: 'all',
   }

   
   componentDidMount = () => {
      btnClickEvents.addListener('btnAllClicked', this.all);
      btnClickEvents.addListener('btnActiveClicked', this.active);
      btnClickEvents.addListener('btnBlockedClicked', this.blocked);
      btnClickEvents.addListener('btnEditClicked', this.editUserInfo);
      btnClickEvents.addListener('btnSaveEditClicked', this.saveEditing);
      btnClickEvents.addListener('btnSaveNewUserClicked', this.saveNewUser);
      btnClickEvents.addListener('btnCancelClicked', this.btnCancelClicked);
      btnClickEvents.addListener('btnDelClicked', this.userDel);
   }

   componentWillUnmount = () => {
      btnClickEvents.removeListener('btnAllClicked');
      btnClickEvents.removeListener('btnActiveClicked');
      btnClickEvents.removeListener('btnBlockedClicked');
      btnClickEvents.removeListener('btnEditClicked');
      btnClickEvents.removeListener('btnSaveEditClicked');
      btnClickEvents.removeListener('btnSaveNewUserClicked');
      btnClickEvents.removeListener('btnCancelClicked');
      btnClickEvents.removeListener('btnDelClicked');
   }

   all = () => {
      this.setState({mode: 'all'}, this.setUserStatus);
   }

   active = () => {
      this.setState({mode: 'active'}, this.setUserStatus);
   }

   blocked = () => {
      this.setState({mode: 'blocked'}, this.setUserStatus);
   }


   userDel = (e) => {
      let users = this.state.usersArr;

      this.state.usersArr.forEach((elem, i) => {
         if(elem.code == e.target.parentElement.parentElement.id) {
            users.splice(i,1);
         }
      });
      this.setState( {usersArr: users} );
   }


   editUserInfo = (e) => {
      this.state.usersArr.forEach((elem) => {
         if(elem.code == e.parentElement.parentElement.id) {
            this.setState( {selectEditUser: elem}) ;
            btnClickEvents.emit('btnEditClicked2', elem);
         }
      });
      this.setState( {cardMode: 'edit'} );
   }

   saveNewUser = (newUserData) => {
      let savedData = this.state.usersArr;
      let maxCode = 0;

      newUserData.code = savedData.forEach((item, i) => {
         if(item.code > maxCode){
            maxCode = item.code;
         }
      })
      newUserData.code = maxCode +1;
      savedData.push(newUserData);

      this.setState( {usersArr: savedData} );
   }
      

   saveEditing =(editData) => {
      let savedData = this.state.usersArr;

      this.state.usersArr.forEach((elem, i) => {
         if(this.state.cardMode === 'edit'){
            if(elem.code === this.state.selectEditUser.code){

                savedData.splice(i,1,editData);
                this.setState( {usersArr: savedData});
            }
         }
      })

      this.setState( {cardMode: ''} );
   }


   btnCancelClicked = () => {
      this.setState( {cardMode: ''} );
   }


   newUser = () => {
      btnClickEvents.emit('btnNewUserClicked');
      this.setState( {cardMode: 'newUser'} );
   }


   render() {
      console.log('рендер UserBlock');

      let columnName = 
         <tr key={this.props.colName.code} id={this.props.colName.code} className='colNames'>
            <td className='colName colNameSurname'>{this.props.colName.surname}</td>
            <td className='colName colNameName'>{this.props.colName.name}</td>
            <td className='colName colNamePatronymic'>{this.props.colName.patronymic}</td>
            <td className='colName colNameBalance'>{this.props.colName.balance}</td>
            <td className='colName colNameStatus'>{this.props.colName.status}</td>
            <td className='colName colNameEdit'>{this.props.colName.edit}</td>
            <td className='colName colNameDelete'>{this.props.colName.delete}</td>
         </tr>

      let allUsers = this.state.usersArr;
      let activeUsers = this.state.usersArr.filter(elem => elem.balance > 0);
      let blockedUsers = this.state.usersArr.filter(elem => elem.balance <= 0);

      let currentUsers = [];

      if(this.state.mode === 'all'){
         currentUsers = allUsers;
      }
      if(this.state.mode === 'active'){
         currentUsers = activeUsers;
      }
      if(this.state.mode === 'blocked'){
         currentUsers = blockedUsers;
      }

      let usersArrJsx = [];
      currentUsers.forEach(elem => {
            let users = <MobileClient key={elem.code}
                        clientInfo = {elem}
                        usersArr = {this.state.usersArr}/>
            usersArrJsx.push(users);
         });

      return(
         <div>
            <table className='UsersBlock'>
               <tbody>
                  {columnName}
                  {usersArrJsx}
               </tbody>
            </table>
            <p className='cardName'
            style={this.state.cardMode === 'newUser' ? {display: "block"} : {display: "none"}}
             >
               {'Добавление клиента:'}
            </p>

            <p className='cardName'
            style={this.state.cardMode === 'edit' ? {display: "block"} : {display: "none"}}
             >
               {'Редактирование клиента:'}
            </p>
            <button 
            style={this.state.cardMode === 'edit' || this.state.cardMode === 'newUser' ? {display: "none"} : {display: "block"}}
            onClick={this.newUser}>Добавить клиента</button>
         </div>
      )
   }

}

export default UsersBlock;