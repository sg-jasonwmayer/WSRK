import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Menu,
  MenuItem
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

// eslint-disable-next-line no-unused-vars
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

const OptimizedFilter = () => {
   
    const classes = useStyles();

    const [value, setValue] = React.useState('');
  
    const handleChange = event => {
      setValue(event.target.value);
    };

    return(

      <div className='classes.root'>
      <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup aria-label="" name="" value={value} onChange={handleChange}>

              <StyledMenuItem>
                <FormControlLabel value="IncludeBoth" control={<Radio />} label="Include Both" />
              </StyledMenuItem>
              <StyledMenuItem>
                <FormControlLabel value="OptimizedOnly" control={<Radio />} label="Optimized Only" />
              </StyledMenuItem> 
              <StyledMenuItem>
                <FormControlLabel value="UnOptimizedOnly" control={<Radio />} label="UnOptimized Only" />
              </StyledMenuItem>

            </RadioGroup>
          </FormControl>
      
      </div>   
    )
}

export default OptimizedFilter;