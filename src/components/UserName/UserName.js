/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

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

import { fetchMillsList } from '../../api.js';

import './UserName.scss'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 190,
  },
}));
  
const UserName = (props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // -------api call -----
  
let [prefListState, setPrefListState] = useState([{fetchMillsList}]);
  useEffect(() => {
    axios
      .get('http://ms00015080d:7050/api/userpreferences/mill/fhenao')
      .then(response => setPrefListState(response.data));
  }, []);

  return (
    <div className='root'>
      <IconButton
        onMouseOver={handleClick}
        size='small'
        aria-controls='fade-menu' 
        aria-haspopup='true' 
        onClick={handleClick}
      >
        <ArrowDropDownIcon 
          color='primary' 
        />
        <h5 className="user-name-style">
          {prefListState.userName}
        </h5> 
      </IconButton> 
      <Menu
        keepMounted
        id='fade-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>
          <FormControl className={classes.formControl}>
            <InputLabel  className="inputLabel">Units</InputLabel>
            <NativeSelect>
              <option value="" />
              <option value="prefListState.units">
                {prefListState.units}
              </option>
              <option>Metric</option>
            </NativeSelect>
          </FormControl>
        </MenuItem>

        <MenuItem>
          <FormControl className={classes.formControl}>
            <InputLabel>Language</InputLabel>
            <NativeSelect>
              <option value="" />
              <option value={prefListState.language}>
              {prefListState.language}
              </option>
              <option value="French">French</option>
              <option value="Portuguese">Portuguese</option>
            </NativeSelect>
          </FormControl>
        </MenuItem>

        <MenuItem>
          <FormControl className={classes.formControl}>
            Include AdviseCase:  
            {prefListState.include_advisecase ? "True" : "False"}
          </FormControl>
        </ MenuItem>
        
        <FormControl className={classes.formControl}>
          <MenuItem >
            Web Role:  
            {prefListState.web_role}
          </ MenuItem>
        </FormControl>
      </ Menu>
    </div>
  )
}

export default UserName;
