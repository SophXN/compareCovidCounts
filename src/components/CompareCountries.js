import * as React from 'react';
import { Component } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import countries from '../countrydata2';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@mui/material/Button';
import NavBar from './NavBar';

export class Country extends Component {
  state = {
    validation: '',
    value: {}
  }

  checkCountries = () => {
    const { country1, country2 } = this.props.values;
    let error = '';
    if(country1 === 'Country' || country2 === 'Country') {
      error = 'Please select two countries to compare.'
    }
    return error;
  }

  continue = e => {
    e.preventDefault();
    const errors = this.checkCountries();
    if (errors !== '') {
      this.setState({validation: errors});
      return;
    }
    this.props.nextStep();
  }


  render() {
    const { handleCountry1Change, handleCountry2Change } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <NavBar />

          <div style={styles.text}>Select First Country</div>
          <Autocomplete
          disablePortal
          id="combo-box-demo"
          style={styles.dropdown}
          options={countries}
          onChange={(e, newValue) => {
            handleCountry1Change(e, newValue);
          }}
          getOptionLabel={(option) => {
            if (option.hasOwnProperty('name')) {
              return option.name;
            }
            return option;
          }}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params}
          label="Country" />}
        />
        <br/>

        <div style={styles.text}>Select Second Country</div>
          <Autocomplete
          disablePortal
          id="combo-box-demo"
          style={styles.dropdown}
          options={countries}
          onChange={(e, newValue) => {
            handleCountry2Change(e, newValue);
          }}
          getOptionLabel={(option) => {
            if (option.hasOwnProperty('name')) {
              return option.name;
            }
            return option;
          }}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params}
          label="Country"
          />}
        />

          <Button
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
            >Continue
          </Button>

          <div style={styles.error}>{this.state.validation}</div>
      </React.Fragment>
      </MuiThemeProvider>
  )}
};

const styles = {
  button: {
    margin: 15
  },
  dropdown: {
    margin: '0 auto',
    display: 'flex'
  },
  text: {
    margin: 15
  },
  error: {
    color: 'red'
  }
}

export default Country;