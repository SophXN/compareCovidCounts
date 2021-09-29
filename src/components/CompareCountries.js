import * as React from 'react';
import { Component } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import countries from '../countrydata';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Button from '@mui/material/Button';

export class Country extends Component {
  state = {
    validation: ''
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
    const { handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Compare COVID 19 Data Between Countries" />

          <div style={styles.text}>Select First Country</div>
          <Autocomplete
          disablePortal
          id="combo-box-demo"
          style={styles.dropdown}
          options={countries}
          onChange={handleChange('country1')}
          // value={values.country1}
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
          onChange={handleChange('country2')}
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