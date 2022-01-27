import React from "react";
import PropTypes from 'prop-types';
import {btnClickEvents} from './events'

import '../styles/editUsersBlock.css'


class EditUserBlock extends React.PureComponent {
   constructor(props) {
      super(props) 
         this.setRefSurname = React.createRef();
         this.setRefName = React.createRef();
         this.setRefPatronymic = React.createRef();
         this.setRefBalance = React.createRef();
   }

   state = {
      selectEditUser: this.props.usersArr[0],
      cardMode: 'null',
   }

   componentDidMount = () => {
      btnClickEvents.addListener('btnEditClicked2', this.setUserInfo);
      btnClickEvents.addListener('btnNewUserClicked', this.addNewUser);
   }

   componentWillUnmount = () => {
      btnClickEvents.removeListener('btnEditClicked', this.setUserInfo);
      btnClickEvents.removeListener('btnNewUserClicked', this.addNewUser);
   }


   setUserInfo = (selectEditUser) => {
      this.setState( {selectEditUser: selectEditUser}, this.setModeEdit );

      this.setRefSurname.current.value = selectEditUser.surname; 
      this.setRefName.current.value = selectEditUser.name;
      this.setRefPatronymic.current.value = selectEditUser.patronymic; 
      this.setRefBalance.current.value = selectEditUser.balance; 
   }

   setModeEdit = () => {
      this.setState( {cardMode: 'edit'} );
   }


   btnSaveClicked = () => {

      let saveUserData = {...this.state.selectEditUser};
         
      saveUserData.name = this.setRefName.current.value;
      saveUserData.surname = this.setRefSurname.current.value;
      saveUserData.patronymic = this.setRefPatronymic.current.value;
      saveUserData.balance = this.setRefBalance.current.value;

      if(this.state.cardMode === 'edit') {
         btnClickEvents.emit('btnSaveEditClicked', saveUserData);
      }
      if(this.state.cardMode === 'newUser') {
         btnClickEvents.emit('btnSaveNewUserClicked', saveUserData);
      }
      this.setState({selectEditUser: saveUserData});
      this.btnCancelClicked();
   }

   btnCancelClicked = (e) => {
      this.setRefSurname.current.value = '';
      this.setRefName.current.value = '';
      this.setRefPatronymic.current.value = ''; 
      this.setRefBalance.current.value = ''; 

      btnClickEvents.emit('btnCancelClicked');
      this.setState( {cardMode: null} );
   }

   addNewUser = () => {
      this.setState( {cardMode: 'newUser'} );
   }

   render() {
      console.log('рендер EditUsersBlock');
      
      let editUsersBlock = '';
         editUsersBlock =
            <div className="EditUsersBlock" 
            style={this.state.cardMode === 'edit' || this.state.cardMode === 'newUser' ? {display: "block"} : {display: "none"}}>
               <div>
                  <span>{this.props.colName.surname}</span>
                  <input type='text' 
                  ref={this.setRefSurname}/>
               </div>
               <div>
                  <span>{this.props.colName.name}</span>
                  <input type='text' 
                  ref={this.setRefName}/>
               </div>
               <div>
                  <span>{this.props.colName.patronymic}</span>
                  <input type='text' 
                  ref={this.setRefPatronymic}/>
               </div>
               <div>
                  <span>{this.props.colName.balance}</span>
                  <input type='text' 
                  ref={this.setRefBalance}/>
               </div>
               <div>
                  <button onClick={this.btnSaveClicked}>Сохранить</button>
                  <button onClick={this.btnCancelClicked}>Сброс</button>
               </div>
            </div>

      return(
         <div>
            {editUsersBlock}
         </div>
      )
   }
}

export default EditUserBlock;