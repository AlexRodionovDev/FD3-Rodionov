import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/UsersBlock.css';
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
      btnClickEvents.addListener('btnSaveEditClicked', this.saveEditing);
      btnClickEvents.addListener('btnSaveNewUserClicked', this.saveNewUser);
      btnClickEvents.addListener('btnCancelClicked', this.btnCancelClicked);
   }

   componentWillUnmount = () => {
      btnClickEvents.removeListener('btnAllClicked', this.all);
      btnClickEvents.removeListener('btnActiveClicked', this.active);
      btnClickEvents.removeListener('btnBlockedClicked', this.blocked);
      btnClickEvents.removeListener('btnSaveEditClicked', this.saveEditing);
      btnClickEvents.removeListener('btnSaveNewUserClicked', this.saveNewUser);
      btnClickEvents.removeListener('btnCancelClicked', this.btnCancelClicked);
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

   userDel = (e) => { // 2 РАЗА СРАБАТЫВАЕТ РЕНДЕР?!
      let users = [...this.state.usersArr];
      
      users.forEach((elem, i) => {
         if(elem.code == e.target.parentElement.parentElement.id) {
            users.splice(i,1);
         }
      });
      this.setState( {usersArr: users},this.render );
   }

   editUserInfo = (e) => {
      
      this.state.usersArr.forEach((elem) => {
         if(elem.code == e.target.parentElement.parentElement.id) {
            this.setState( {selectEditUser: elem}) ;
            btnClickEvents.emit('btnEditClicked', elem);
         }
      });
      this.setState( {cardMode: 'edit'} );
   }

   saveNewUser = (newUserData) => {
      let savedData = [...this.state.usersArr];
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
      let savedData = [...this.state.usersArr];

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
      this.setState( {cardMode: ''} );;
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
            let users = 
            <tr key={elem.code} id={elem.code} >
               <td className='tdSurname'>{elem.surname}</td>
               <td className='tdName'>{elem.name}</td>
               <td className='tdPatronymic'>{elem.patronymic}</td>
               <td className='tdBalance'>{elem.balance}</td>
               <td className={elem.balance > 0 ? 'tdStatus' : 'tdStatus redBackground'}>
                  {elem.balance > 0 ? 'active' : 'blocked'}
               </td>
               <td className='tdEdit'><button onClick={this.editUserInfo}>Редактировать</button></td>
               <td className='tdDelete'><button onClick={this.userDel}>Удалить</button></td>
            </tr>
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