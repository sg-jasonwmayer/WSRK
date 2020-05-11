/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { lighten, makeStyles,withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import LoadPlanResultsTableHead from './_loadplanResultsTableHead';
import LoadPlanResultsToolBar from './_loadplanResultsToolbar';
import {stableSort,getSorting} from '../../selectors/LoadPlanResultsSorter';
//import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
//import Fab from '@material-ui/core/Fab';
//import LaunchIcon from '@material-ui/icons/Launch';
import IconButton from '@material-ui/core/IconButton';
//import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MillContext from '../../contexts/mill-context';

 
  const loadPlanResults = [];
  
  
  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }));
  
  function LoadPlanResults({handleViewLoadPlan}) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const {loadplans} = useContext(MillContext);
  
  
    const handleRequestSort = (event, property) => {
      const isDesc = orderBy === property && order === 'desc';
      setOrder(isDesc ? 'asc' : 'desc');
      setOrderBy(property);
    };
  
    const handleSelectAllClick = event => {
      if (event.target.checked) {
        const newSelecteds = loadPlanResults.map(n => n.name);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    };
  
    const handleClick = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
  
      setSelected(newSelected);
    };
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = event => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const handleChangeDense = event => {
      setDense(event.target.checked);
    };
  
    const isSelected = name => selected.indexOf(name) !== -1;
  
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, loadPlanResults.length - page * rowsPerPage);
  
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <LoadPlanResultsToolBar numSelected={selected.length} />
          <div className={classes.tableWrapper}>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
              aria-label="enhanced table"
            >
              <LoadPlanResultsTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={loadPlanResults.length}
              />
              <TableBody>
                {/* {stableSort(loadplans, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)} */}
                 {stableSort((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;
  
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            onClick={event => handleClick(event, row.name)}
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </TableCell>
                        <TableCell component="th" id={row.Id} scope="row" padding="none">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.batchID}</TableCell>
                        <TableCell align="right">{row.shipTo}</TableCell>
                        <TableCell align="right">{row.mode}</TableCell>
                        <TableCell align="right">{row.SubmitedBy}</TableCell>
                        <TableCell align="right">{row.ApprovedBy}</TableCell>
                        <TableCell align="center">
                          <IconButton 
                                aria-label="delete" 
                                className={classes.margin} 
                                onClick={()=> {
                                  handleViewLoadPlan(row.id,row.name)
                                }}
                                size="small">
                            <SearchIcon fontSize="inherit" />
                          </IconButton>
                        </TableCell>
                     </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={loadPlanResults.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'previous page',
            }}
            nextIconButtonProps={{
              'aria-label': 'next page',
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </div>
    );
  }
  
  export default LoadPlanResults;
  