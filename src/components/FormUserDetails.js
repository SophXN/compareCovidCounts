import * as React from 'react';
import { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Typography from '@mui/material/Typography';
import TextField from 'material-ui/TextField';
import Button from '@mui/material/Button';
import NavBar from './NavBar';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    console.log(this.props.values);
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <NavBar />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={styles.text}>
          If you'd like this data emailed to you, please fill out this contact form. Otherwise, you may simply continue.
          </Typography>

          <TextField
            hintText="Enter your First Name"
            floatingLabelText="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
            />
            <br/>
          <TextField
            hintText="Enter your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
            />
            <br/>
          <TextField
            hintText="Enter your Email"
            floatingLabelText="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
            />
            <br/>
          <TextField
            hintText="Enter your Company"
            floatingLabelText="Company"
            onChange={handleChange('company')}
            defaultValue={values.company}
            />
            <br/>

          <Button
            label="Back"
            primary={true}
            style={styles.button}
            onClick={this.back}
            >Back
          </Button>

          <Button
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
            >Continue
          </Button>

        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15
  },
  text: {
    margin: 15
  }
}

export default FormUserDetails
