import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import Fab from '@material-ui/core/Fab';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {SERVER_URL} from '../../actions/webapicalls';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
  const StyledBreadcrumb = withStyles(theme => ({
    root: {
      backgroundColor: theme.palette.grey[100],
      height: theme.spacing(3),
      color: theme.palette.grey[800],
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: theme.palette.grey[300],
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(theme.palette.grey[300], 0.12),
      },
    },
  }))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591
  



  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }
  
  function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }
  
  function TransitionRight(props) {
    return <Slide {...props} direction="right" />;
  }
  
  function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
  }


  const serverURL = SERVER_URL;


export const LoadPlanView = ({tabData,handleTabClose,label})=>{
    const classes = useStyles();
  
    const {loadPlanName,reference,lastUpdateDate,submittedBy} = tabData;
    const [selectedVehicleIndex,setSelectedVehicleIndex] = useState(0);
    const [view,setSelectedView] = useState("threeDimensionalView");
    const [viewImagePath,setViewImagePath] = useState(serverURL+tabData.vehicles[0].images.threeDimensionalView);

    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);
   //console.log(setViewImagePath);

    function handleClick(event) {
        event.preventDefault();
    }
    
    const handleSelectVehicle = (index)=>{
        setSelectedVehicleIndex(index);
        setViewImagePath(serverURL+tabData.vehicles[index].images.threeDimensionalView);
        setSelectedView("threeDimensionalView");
    }

    const handleChangeView = (e)=>{
        const selectedvalue = e.target.value;
        setSelectedView(selectedvalue);
   
        if(selectedvalue==="threeDimensionalView"){
            setViewImagePath(serverURL+tabData.vehicles[selectedVehicleIndex].images.threeDimensionalView);
        }else if(selectedvalue==="twoDimensionalView"){
            setViewImagePath(serverURL+tabData.vehicles[selectedVehicleIndex].images.twoDimensionalView);
        }else if(selectedvalue==="twoDimWithSideAndTop"){
            setViewImagePath(serverURL+tabData.vehicles[selectedVehicleIndex].images.twoDimWithSideAndTop);
        }else if(selectedvalue==="twoDimEnlarged"){
            setViewImagePath(serverURL+tabData.vehicles[selectedVehicleIndex].images.twoDimEnlarged);
        }else if(selectedvalue==="threeDimensionalFront"){
            setViewImagePath(serverURL+tabData.vehicles[selectedVehicleIndex].images.threeDimensionalFront);
        }else if(selectedvalue==="threeDimensionalRear"){
            setViewImagePath(serverURL+tabData.vehicles[selectedVehicleIndex].images.threeDimensionalRear);
        }else{
            setViewImagePath(serverURL+tabData.vehicles[selectedVehicleIndex].images.threeDimensionalView);
        }
    }


    const handleSnackbarClick = Transition => () => {
      setTransition(() => Transition);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (

<div className={classes.root}>
      <Grid container spacing={1} justify="flex-start">
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Breadcrumbs aria-label="breadcrumb">
          <Fab 
                  size="small" 
                  color="secondary" 
                  aria-label="add"
                  onClick={()=>{
                    return handleTabClose(label)
                  }} 
                  className={classes.fab}>
                <CancelIcon />
              </Fab>
            <StyledBreadcrumb
                component="a"
                href="#"
                label={'LoadPlan: '+loadPlanName}
                icon={<HomeIcon fontSize="small" />}
                onClick={handleClick}
            />
            <StyledBreadcrumb component="a" href="#" label={'Reference : '+ reference} onClick={handleClick} />
            <StyledBreadcrumb component="a" href="#" label={'Submitted By : '+ submittedBy} onClick={handleClick} />
            <StyledBreadcrumb component="a" href="#" label={'Optimized At  : '+ lastUpdateDate} onClick={handleClick} />
            <StyledBreadcrumb component="a" href="#" label={'LoadPlanID  : '+ tabData.id} onClick={handleClick} />
            </Breadcrumbs>
           </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} justify="flex-start">
              {tabData.vehicles.map((vehicle,index)=>(
                    <Button key={vehicle.id}
                        variant="outlined" 
                        color={selectedVehicleIndex===index ?"secondary":"primary"}
                        onClick={()=>handleSelectVehicle(index)}
                        >
                        Vehicle - {index + 1}
                    </Button>
              ))
              }   
          </Paper>
        </Grid>
     

        <Grid item xs={2}>

        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Change View</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={view}
          onChange={handleChangeView}
        >
          <MenuItem value={"threeDimensionalView"}>Three Dim View</MenuItem>
          <MenuItem value={"twoDimensionalView"}>Two Dim View</MenuItem>
          <MenuItem value={"twoDimWithSideAndTop"}>Two Dim Side and Top</MenuItem>
          <MenuItem value={"twoDimEnlarged"}>Two Dim Enlarged</MenuItem>
          <MenuItem value={"threeDimensionalFront"}>Three Dim Front View</MenuItem>
          <MenuItem value={"threeDimensionalRear"}>Three Dim Rear View</MenuItem>
        </Select>
      </FormControl>

           <Paper className={classes.paper} elevation={10} style={{backgroundColor:'#e3f2fd'}}>
              Vehicle : <br />
              <u>{tabData.vehicles[selectedVehicleIndex].vehicleName}</u>
           </Paper>
           <Paper className={classes.paper}  elevation={10} style={{backgroundColor:'#f0f4c3'}}>
              Jurisdiction : <br />
              <u>{tabData.vehicles[selectedVehicleIndex].jurisdictionName}</u>
           </Paper>
           <Paper className={classes.paper}  elevation={10} style={{backgroundColor:'#e8f5e9'}}>
              Securement : <br/>
              <u>{tabData.vehicles[selectedVehicleIndex].securementName}</u>
           </Paper>
           <Paper className={classes.paper} elevation={10} style={{backgroundColor:'#f8bbd0'}}>
              <b>Weight</b> / Volume % : <br />
              <b><u>{tabData.vehicles[selectedVehicleIndex].weightPercentage}</u></b> / <u>{tabData.vehicles[selectedVehicleIndex].volumePercentage}</u>
           </Paper>
           <Paper className={classes.paper} elevation={10} style={{backgroundColor:'#fce4ec'}}>
              Pay load : <br />
              <b><u>{tabData.vehicles[selectedVehicleIndex].payLoad} lbs</u></b>
           </Paper>
           <Paper className={classes.paper} elevation={10} style={{backgroundColor:'#ff8a80'}}>
              Lost Opportunity : <br />
              <b><u>{Math.round(tabData.vehicles[selectedVehicleIndex].maxPayLoad-tabData.vehicles[selectedVehicleIndex].payLoad,2)} lbs</u></b>
           </Paper>
           <Paper className={classes.paper}  elevation={10} style={{backgroundColor:'#fce4ec'}}>
              Max Payload : <br />
              <u>{tabData.vehicles[selectedVehicleIndex].maxPayLoad} lbs</u>
           </Paper>
   
         </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <img src={viewImagePath} alt={"name"} />    
           </Paper>
        </Grid>
        <Grid item xs={2}>
        <div>
          <Button variant="contained" color="Primary" onClick={handleSnackbarClick(TransitionRight)}>Re-Optimize</Button>
          <Snackbar
            open={open}
            onClose={handleClose}
            TransitionComponent={transition}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
          message={<span id="message-id">Your LoadPlan [{tabData.loadPlanName}] is being Optimized, for more updated status see the notification window!</span>}
          />
        </div>
        </Grid>
      </Grid>
    </div>

    );
}
