import React,{useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';

import  WebApiCall  from '../../actions/webapicalls';
import { populateSearchResults } from '../../actions/loadplanner/SearchResults';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300,
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(0)
    },
    button: {
        marginTop:theme.spacing(3),
        marginLeft: theme.spacing(2),
      },
}));


export default function UncontrolledTextField() {
    const classes = useStyles();
    const [loadplanname, setLoadPlanName] = React.useState('');
    const [mill,loadplans,loadplanDispatch,progressDispatch] = React.useState('');
    const [mode, setMode] = React.useState('AllModes');
    const [mills, setMill] = React.useState('2');
    const [searchcondition, setSearchCondition] = React.useState('contains');
    
    
  
    // useEffect(()=>{
    //     if(!loadplans) return;
    //     if(loadplans.loadplanname)
    //         setLoadPlanName(loadplans.loadplanname)
    //     if(loadplans.mode)
    //         setMode(loadplans.mode)
    //     if(loadplans.mill)
    //         setMill(loadplans.mill)
    //     if(loadplans.searchcondition)
    //         setSearchCondition(loadplans.searchcondition)

    //     async function InvokeAsync(){
    //         const jsonResponse = await WebApiCall(`Query/SearchLoadPlans/${mode}/${mill}/${searchcondition}/${loadplanname}`,progressDispatch)
    //         loadplanDispatch(populateSearchResults(jsonResponse))
    //   }

    //     InvokeAsync();
            

    // },[]);

    const handleModeChange = event => {
        setMode(event.target.value);
        
    };
    const handleMillChange = event => {
        setMill(event.target.value);
    };
    const handleSearchCondition = event =>{
        setSearchCondition(event.target.value);
    } 
    const handleReset = ()=>{
        setLoadPlanName('');
        setMode('AlModes');
        setMill('2');
    }

    const handleLoadPlanNameChange = (event)=>{
        setLoadPlanName(event.target.value);
    }

    const handleSearchLoadPlans =()=>{
        async function InvokeAsync(){
            const jsonResponse = await WebApiCall(`Query/SearchLoadPlans/${mode}/${mill}/${searchcondition}/${loadplanname}`,progressDispatch)
            loadplanDispatch(populateSearchResults(jsonResponse))
        }
        InvokeAsync();
        //loadplanDispatch(populateSearchCriteria({loadplanname,mode,mill,searchcondition}));
    }

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <div>
               <FormControl className={classes.formControl}>
                   <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        Search Criteria
                   </InputLabel>
                    <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={searchcondition}
                        onChange={handleSearchCondition}
                        displayEmpty
                        className={classes.selectEmpty}
                    >
                        <MenuItem value='contains'>
                            <em>Contains</em>
                        </MenuItem>
                        <MenuItem value={'begins'}>Begins With</MenuItem>
                        <MenuItem value={'ends'}>Ends With</MenuItem>
                    </Select>
                    <FormHelperText>(For LoadPlan Name)</FormHelperText>
                </FormControl>
                <TextField
                    id="standard-search"
                    label="Search LoadPlan"
                    type="search"
                    value={loadplanname}
                    onChange={handleLoadPlanNameChange}
                    className={classes.textField}
                    margin="normal"
                />
         
                <FormControl className={classes.formControl}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        Mode
                   </InputLabel>
                    <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={mode}
                       onChange={handleModeChange}
                        displayEmpty
                        className={classes.selectEmpty}
                    >
                        <MenuItem value='AllModes'>
                            <em>All Modes</em>
                        </MenuItem>
                        <MenuItem value={'Rail'}>Rail</MenuItem>
                        <MenuItem value={'Truck'}>Trailer</MenuItem>
                        <MenuItem value={'Piggyback'}>Piggyback</MenuItem>
                    </Select>
                    <FormHelperText>(Transport Modes)</FormHelperText>
                </FormControl>
            
                    <FormControl className={classes.formControl}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        Mills
                   </InputLabel>
                    <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        displayEmpty
                    
                        onChange={handleMillChange}
                        className={classes.selectEmpty}
                    >
                
                    <MenuItem value="Id">MillName</MenuItem>
                                        
                
                       
                       </Select>
                    <FormHelperText>(Mills)</FormHelperText>
                </FormControl>
                )
            </div>
            <div>
               <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={handleSearchLoadPlans}
                    startIcon={<SearchIcon />}
                >
                    Search
                </Button>  
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={handleReset}
                    startIcon={<DeleteIcon />}
                >
                    Reset
                </Button>  
            </div>
        </form>
    );
}