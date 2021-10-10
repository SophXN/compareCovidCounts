import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const NavBar = () => {
  const [anchore1, setaAnchorE1] = React.useState(null);
  const open = Boolean(anchore1);

  const handleMenu = e => {
    setaAnchorE1(e.currentTarget);
  }

  const handleClose = () => {
    setaAnchorE1(null);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="navbar"
            anchore1={anchore1}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            open={open}
            onClose={handleClose}
            >
            <MenuItem component="a" href="https://datastudio.google.com/u/0/reporting/b4e3e11a-5c82-49d8-a3bc-6fb010e435af/page/cuYmB">Discover</MenuItem>
            <MenuItem  component="a" href="https://mmediagroup.fr/covid-19">API Source</MenuItem>
          </Menu>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Compare COVID 19 Data Between Countries
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;