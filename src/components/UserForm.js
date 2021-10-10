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
    country1code: '',
    country2: 'Country',
    country2code: '',
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
      country1code: '',
      country2: 'Country',
      country2code: '',
    })
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  handleCountry1Change = (e, input) => {
    if(typeof input === 'undefined'){
      return
    }
    this.setState({country1: input.name});
    this.setState({country1code: input.code});
  }

  handleCountry2Change = (e, input) => {
    if(typeof input === 'undefined'){
      return
    }
    this.setState({country2: input.name});
    this.setState({country2code: input.code});
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, company, country1, country2, country1code, country2code } = this.state;
    const values = { firstName, lastName, email, company, country1, country2, country1code, country2code };

    switch(step) {
      case 1:
        return (
          <Country
            nextStep = {this.nextStep}
            handleCountry1Change = {this.handleCountry1Change}
            handleCountry2Change = {this.handleCountry2Change}
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
