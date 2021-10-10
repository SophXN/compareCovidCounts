import * as React from 'react';
import { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from './NavBar';

export class Summary extends Component {
  state = {
    isLoading1: false,
    isLoading2: false,
    country1data: null,
    country2data: null
  }

  reset = e => {
    e.preventDefault();
    this.setState({isLoading1: false});
    this.setState({isLoading2: false});
    this.props.resetStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  componentDidMount() {
    const { country1code, country2code } = this.props.values;
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.io)"
     }

     fetch(`https://covid-api.mmediagroup.fr/v1/cases?ab=${country1code}`, {
       method: "GET",
       headers: headersList
     }).then((response) => {
       return response.json();
     }).then((data) => {
       this.setState({country1data: data.All});
       this.setState({isLoading1: true});
     }).catch(err => console.log(err));

     fetch(`https://covid-api.mmediagroup.fr/v1/cases?ab=${country2code}`, {
       method: "GET",
       headers: headersList
     }).then((response) => {
       return response.json();
     }).then((data) => {
       this.setState({country2data: data.All});
       this.setState({isLoading2: true});
     }).catch(err => console.log(err));
  }

  render() {
    const { values } = this.props;
    const { isLoading1, isLoading2, country1data, country2data } = this.state;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <NavBar />

          <div style={styles.text}>COVID 19 Data Comparison</div>

          <Card sx={{ maxWidth: 345 }} style={styles.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {values.country1}
                </Typography>
                {isLoading1 &&
                  <Typography variant="body2" color="text.secondary">
                  Confirmed Cases : {country1data.confirmed}
                  <br/>
                  Deaths :{country1data.deaths}
                  <br/>
                  Population :{country1data.population}
                  </Typography>
                }
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Button size="small" color="primary" >
                Change Country
              </Button> */}
            </CardActions>
          </Card>
          <br/>
          <br/>


          <Card sx={{ maxWidth: 345 }} style={styles.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {values.country2}
                </Typography>
                {isLoading2 &&
                  <Typography variant="body2" color="text.secondary">
                  Confirmed Cases : {country2data.confirmed}
                  <br/>
                  Deaths :{country2data.deaths}
                  <br/>
                  Population :{country2data.population}
                  </Typography>
                }
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Button size="small" color="primary" onClick={this.back}>
                Change Country
              </Button> */}
            </CardActions>
          </Card>


          <Button
            label="Reset"
            primary={true}
            style={styles.button}
            onClick={this.reset}
            >Reset
          </Button>
      </React.Fragment>
      </MuiThemeProvider>
  )}
};

const styles = {
  button: {
    margin: 15
  },
  card: {
    margin: '0 auto',
    display: 'flex',
    padding: '1.5em'
  },
  text: {
    margin: 15
  }
}

export default Summary;