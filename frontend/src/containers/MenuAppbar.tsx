import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MenuAppbar = () => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [item, setItem] = React.useState(null);
  const open = Boolean(anchorEl);
  const subOpen = Boolean(item);
  const history = useHistory();

  const changeHandler = (event: any) => {
    setAuth(event.target.checked);
  };

  const menuHandler = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const closeHandler = () => {
    setAnchorEl(null);
  };

  const subMenuHandler = (event: any) => {
    setItem(event.currentTarget);
  };  

  const subCloseHandler = () => {
    setItem(null);
  };  

  return (
    <div className={classes.root}>
      <FormGroup>
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={subMenuHandler} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Menu
                id="menu-appbar"
                anchorEl={item}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={subOpen}
                onClose={subCloseHandler}
              >
                <MenuItem onClick={() => {history.push('/home')}}>Home</MenuItem>                    
                <MenuItem onClick={() => {history.push('/finance')}}>Finance</MenuItem>
                <MenuItem onClick={() => {history.push('/authorization')}}>Authorization</MenuItem>
                <MenuItem onClick={() => {history.push('/users')}}>Users</MenuItem>
                <MenuItem onClick={() => {history.push('/roles')}}>Roles</MenuItem>                
                <MenuItem onClick={() => {history.push('/login')}}>Login</MenuItem> 
                <MenuItem onClick={() => {history.push('/logout')}}>Logout</MenuItem>                
                <MenuItem onClick={() => {history.push('/register')}}>Register</MenuItem>                                 
          </Menu>
          <Typography variant="h6" className={classes.title}>
            Menu
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={menuHandler}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={closeHandler}
              >
                <MenuItem onClick={closeHandler}>Profile</MenuItem>
                <MenuItem onClick={closeHandler}>My account</MenuItem>
              </Menu>
           
            </div>
          )}
              <FormControlLabel
          control={<Switch checked={auth} onChange={changeHandler} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />             
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuAppbar;