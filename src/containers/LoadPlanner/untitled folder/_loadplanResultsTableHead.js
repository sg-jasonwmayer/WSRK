import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'LoadPlan Name' },
    { id: 'batchid', numeric: true, disablePadding: false, label: 'Batch Id' },
    { id: 'shipto', numeric: false, disablePadding: false, label: 'Ship To' },
    { id: 'mode', numeric: false, disablePadding: false, label: 'Mode' },
    { id: 'submitedBy', numeric: false, disablePadding: false, label: 'Submited By' },
    { id: 'approvedBy', numeric: false, disablePadding: false, label: 'Approved By' },
    { id: 'action', numeric: false, disablePadding: false, label: 'Action' },
  ];
  
const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: 'darkgrey',
      color: theme.palette.common.white,
    },
   
  }))(TableCell);

function LoadPlanResultsTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = property => event => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          <StyledTableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </StyledTableCell>
          {headCells.map(headCell => (
            <StyledTableCell 
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={order}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </StyledTableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  LoadPlanResultsTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
 

  export default LoadPlanResultsTableHead;