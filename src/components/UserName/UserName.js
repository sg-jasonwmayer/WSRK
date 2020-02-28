import React, {useState} from 'react';

import { 
  IconButton, 
  Menu, 
  MenuItem,
  FormControl,
  InputLabel,
  NativeSelect
} from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';

import './UserName.scss'

const fhenao = 'http://ms00015080d:7050/api/userpreferences/mill/fhenao';

let userName = '';

axios.get(fhenao).then((res) => {
  userName = res.data.userName;
})
  .catch((err) => {
      console.log(err);
  })
  // console.log(userName);

  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 190,
    },
  }));
  
const UserName = () => {
  const classes = useStyles();

  const [ userPrefState, setUserPrefState ] = useState({
    UserPreferences: [
      {userName: "fhenao"},
      {lX_UserFullName: "fhenao"},
      {language: "English"},
      {units: "Imperial"},
      {mill_group: "Panther"},
      {web_role: "Admin"},
      {lx_role: "Admin"},
      {include_advisecase: false},
      {lx_system: "Mill"}
    ]
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [unitState, setUnitState] = React.useState({
    type: '',
  });

  const handleUnitChange = type => event => {
    setUnitState({
      ...unitState,
      [type]: event.target.value,
    });
  };

  const [languageState, setLanguageState] = React.useState({
    language: '',
  });

  const handleLanguageChange = language => event => {
    setLanguageState({
      ...languageState,
      [language]: event.target.value,
    });
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='root'>
      <IconButton
          size='small'
          aria-controls='fade-menu' 
          aria-haspopup='true' 
          onClick={handleClick}
      >
        <ArrowDropDownIcon 
          color='primary' 
        />
        <h5>
          {userName}
        </h5> 
      </IconButton> 
      <Menu
        keepMounted
        id='fade-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem 
        onClick={handleClose}
        >
          Include AdviseCase:  
          {userPrefState.UserPreferences[7].include_advisecase.toString()}
          
        </ MenuItem>
        <MenuItem 
        >
          <FormControl className={classes.formControl} error>
            <InputLabel htmlFor="name-native-error" className="inputLabel">Units</InputLabel>
            <NativeSelect
              value={unitState.type}
              onChange={handleUnitChange('type')}
              name="name"
              inputProps={{
                id: 'name-native-error',
              }}
            >
              <option value="" />
              <option value="English">
                {userPrefState.UserPreferences[3].units}
              </option>
              <option>Metric</option>
            </NativeSelect>
          </FormControl>
        </MenuItem>

        <MenuItem 
        >
          <FormControl className={classes.formControl} error>
            <InputLabel htmlFor="name-native-error">Language</InputLabel>
            <NativeSelect
              value={languageState.mode}
              onChange={handleLanguageChange('language')}
              name="name"
              inputProps={{
                id: 'name-native-error',
              }}
            >
              <option value="" />
              <option value="English">
              {userPrefState.UserPreferences[2].language}
              </option>
              <option value="French">French</option>
              <option value="Portuguese">Portuguese</option>
            </NativeSelect>
          </FormControl>
        </MenuItem>
      </ Menu>
    </div>
  )
}

export default UserName;
