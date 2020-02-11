import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Menu,
  MenuItem
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const FilterByMode = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    // --

    const classes = useStyles();

    const [value, setValue] = React.useState('');
  
    const handleChange = event => {
      setValue(event.target.value);
    };

    return(
      <div className='classes.root'>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Filter By Mode
          <ArrowDropDownIcon 
            />
        </Button>

        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup aria-label="" name="" value={value} onChange={handleChange}>

              <StyledMenuItem>
                <FormControlLabel value="All" control={<Radio />} label="All" />
              </StyledMenuItem>

              <StyledMenuItem>
                <FormControlLabel value="Truck" control={<Radio />} label="Truck" />
              </StyledMenuItem>
              
              <StyledMenuItem>
                <FormControlLabel value="Rail" control={<Radio />} label="Rail" />
              </StyledMenuItem>

              <StyledMenuItem>
                <FormControlLabel value="Container" control={<Radio />} label="Container" />
              </StyledMenuItem>

              <StyledMenuItem>
                <FormControlLabel value="ContainerOnChasis" control={<Radio />} label="Container On Chasis" />
              </StyledMenuItem>
              
            </RadioGroup>
          </FormControl>
        </StyledMenu>
      </div>   
    )
}

export default FilterByMode;