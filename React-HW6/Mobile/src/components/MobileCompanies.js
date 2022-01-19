import React from 'react';
import PropTypes from 'prop-types';


import '../styles/MobileCompanies.css';

class MobileCompanies extends React.PureComponent {

  state ={
/*     companyVelcomName: '',
    companyMtsName: '', */
  }

  companyVelcomName = '';
  companyMtsName = '';

  setRefCompanyName = (ref) => {
    this.companyVelcomName = ref; 
  }

  setRefCompanyName2 = (ref) => {
    this.companyMtsName = ref; 
  }

  btnVelcomClicked = () => {
    this.setState({companyName: this.companyVelcomName.value})
  }

  btnMtsClicked = () => {
    this.setState({companyName: this.companyMtsName.value})
  }

  render() {
    console.log('рендер MobileCompanies');
    return (
      <div className="MobileCompanies">
        <input type="button" value="Velcom" onClick={this.btnVelcomClicked} ref={this.setRefCompanyName} />
        <input type="button" value="МТС" onClick={this.btnMtsClicked}  ref={this.setRefCompanyName2}/>
        <p>Компания: {this.state.companyName}</p>
      </div>
    )
    ;

  }

}

export default MobileCompanies;
