/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { 
  Menu, 
  MenuItem, 
  Fade, 
  Grid, 
  IconButton 
} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Link,
  Route
  //useRouteMatch
  // withRouter
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import DropButton from '../DropButton/DropButton';

import { translate } from 'react-polyglot';
import messages from './messages/en_us.json';

import clsx from 'clsx';
import axios from 'axios';

import './Location.scss'

const url = 'http://ms00015080d:7050/api/userpreferences/mill/fhenao';

const useStyles = makeStyles(theme => ({
    centerContainer: {
        display: 'flex',
        justify: 'center',
        justifyContent: 'right',
        color: '#004B87', 
        margin: '0', 
    },
    menuButton: {
        margin: '0',
        padding: '0'
    },
}));

const Location = props => {
    // let match = useRouteMatch();
    let resData = '';
    // let tempMill = '';
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const opens = Boolean(anchorEl);
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
    
const [ millState ] = useState({
  millNames: [
    {MillName: 'Hopewell Mill'},
    {MillName: 'Hodge Mill'},
    {MillName: 'Dublin Mill'},
    {MillName: 'Ferdnadina Beach Mill'},
    {MillName: 'Florence Mill'},
    {MillName: 'La Tuque Mill'},
    {MillName: 'Panama City Mill'},
    {MillName: 'Solvay Mill'},
    {MillName: 'Seminole Mill'},
    {MillName: 'Roanoke Rapids DEV'},
    {MillName: 'Stevenson Mill'},
    {MillName: 'West Point Mill'},
    {MillName: 'Tacoma Mill'}
  ]
});

const handleClose = () => {
  setAnchorEl(null);
};

  return(
    <div
      className={classes.root}
    >
      <Grid 
        item 
        xs={4} 
        className={classes.centerContainer}
      > 
        <IconButton
          size='small'
          className={clsx(classes.menuButton )}
          aria-controls="fade-menu" 
          aria-haspopup="true" 
          onClick={handleClick}
        > 
          <ArrowDropDownIcon 
            color={'primary'}
          />
          <h4 
            className={classes.centerContainer}
          >
            {millState.millNames[3].MillName}
          </ h4> 
        </IconButton>
      </ Grid>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={opens}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Router>
          <MenuItem 
            onClick={handleClose}
          >
            <Link to={millState.millNames[0].MillName}>
              <DropButton
              name={millState.millNames[0].MillName}
              />
            </ Link>
          </ MenuItem>
          <MenuItem 
            onClick={handleClose}
          >
            <Link to={millState.millNames[1].MillName}>
              <DropButton
              name={millState.millNames[1].MillName}
              />
            </ Link>
          </ MenuItem>
          <MenuItem 
            onClick={handleClose}
          >
          <Link to={millState.millNames[2].MillName}>
          <DropButton
            name={millState.millNames[2].MillName}
          />
          </ Link>
          </ MenuItem>
          <MenuItem 
            onClick={handleClose}
          >
          <Link to={millState.millNames[3].MillName}>
          <DropButton
            name={millState.millNames[3].MillName}
          />
            </ Link>
          </ MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            <Link to={millState.millNames[4].MillName}>
            <DropButton
            name={millState.millNames[4].MillName}
          />
          </ Link>
          </ MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            <Link to={millState.millNames[5].MillName}>
            <DropButton
            name={millState.millNames[5].MillName}
          />
            </ Link>
          </ MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            <Link to={millState.millNames[6].MillName}>
            <DropButton
              name={millState.millNames[6].MillName}
          />
            </ Link>
          </ MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            <Link to={millState.millNames[7].MillName}>
            <DropButton
              name={millState.millNames[7].MillName}
          />
            </ Link>
          </ MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            <Link to={millState.millNames[8].MillName}>
            <DropButton
              name={millState.millNames[8].MillName}
          />
            </ Link>
          </ MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            <Link to={millState.millNames[9].MillName}>
            <DropButton
              name={millState.millNames[9].MillName}
          />
            </ Link>
          </ MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            <Link to={millState.millNames[10].MillName}>
            <DropButton
              name={millState.millNames[10].MillName}
          />
            </ Link>
          </ MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            <Link to={millState.millNames[11].MillName}>
            <DropButton
              name={millState.millNames[11].MillName}
          />
            </ Link>
          </ MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            <Link to={millState.millNames[12].MillName}>
            <DropButton
              name={millState.millNames[12].MillName}
          />
            </ Link>
          </ MenuItem>
        </ Router>
      </ Menu>
    </ div>
  )
}

export default Location;


