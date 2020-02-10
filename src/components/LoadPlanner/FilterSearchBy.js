import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    root: {
    },
}));

const FilterSearchBy = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div className='classes.root'>
            Filter Search by
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Ship To
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Mill 2 - API</MenuItem>
                <MenuItem onClick={handleClose}>Mill 2 - API</MenuItem>
                <MenuItem onClick={handleClose}>Mill 3 - API</MenuItem>
            </Menu>
        </div>   
    )
}

export default FilterSearchBy;