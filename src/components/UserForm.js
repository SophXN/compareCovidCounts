/* eslint-disable default-case */
import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import Country from './CompareCountries';
import Summary from './Summary';

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    country1: 'Country',
    country2: 'Country'
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  resetStep = () => {
    this.setState({
      step: 1,
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      country1: 'Country',
      country2: 'Country'
    })
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  handleCountryChange = input => e => {
    this.setState({[input]: e.target.innerHTML});
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, company, country1, country2 } = this.state;
    const values = { firstName, lastName, email, company, country1, country2 };

    switch(step) {
      case 1:
        return (
          <Country
            nextStep = {this.nextStep}
            handleChange = {this.handleCountryChange}
            values={values}
          />

        )
      case 2:
        return (
          <FormUserDetails
            nextStep = {this.nextStep}
            prevStep = {this.prevStep}
            handleChange = {this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <Summary
            resetStep = {this.resetStep}
            prevStep = {this.prevStep}
            handleChange = {this.handleChange}
            values={values}
          />
        )
    }
  }
}

export default UserForm
