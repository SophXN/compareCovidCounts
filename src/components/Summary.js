import * as React from 'react';
import { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Summary extends Component {
  state = {
    isLoading1: false,
    isLoading2: false,
    country1data: 100,
    country2data: 100
  }
  continue = e => {
    e.preventDefault();
    this.props.resetStep();
  }

  componentDidMount() {
    const { country1, country2 } = this.props.values;
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.io)"
     }

     fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country1}`, {
       method: "GET",
       headers: headersList
     }).then((response) => {
       return response.json();
     }).then((data) => {
       this.setState({country1data: data.All});
       this.setState({isLoading1: true});
     }).catch(err => console.log(err));

     fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country2}`, {
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
          <AppBar title="Compare COVID 19 Data Between Countries" />

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
                  Recovered Cases :{country1data.recovered}
                  <br/>
                  Deaths :{country1data.deaths}
                  <br/>
                  Population :{country1data.population}
                  </Typography>
                }
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" >
                Change Country
              </Button>
            </CardActions>
          </Card>

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
                  Recovered Cases :{country2data.recovered}
                  <br/>
                  Deaths :{country2data.deaths}
                  <br/>
                  Population :{country2data.population}
                  </Typography>
                }
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" >
                Change Country
              </Button>
            </CardActions>
          </Card>


          <Button
            label="Reset"
            primary={true}
            style={styles.button}
            onClick={this.continue}
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
    padding: 15
  },
  text: {
    margin: 15
  }
}

export default Summary;