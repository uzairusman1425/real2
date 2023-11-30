import Image from 'next/image'
import graphicon from '@/assets/graph.svg'
import Link from 'next/link'
import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { SvgIcon } from '@mui/material';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import { yellow } from '@mui/material/colors';
import PositiveAndNegativeBarChart from './PositiveAndNegativeBarChart';
import Recharts from './Recharts';

function createData(id, city, avgprice, troughcurrent, peakcurrent, last12,last3,lastmonth,yearonyear) {
    return {
      id,
      city,
      avgprice,
      troughcurrent,
      peakcurrent,
      last12,
      last3,
      lastmonth,
      yearonyear,

    };
  }
  
  const rows = [
    createData(1, 'Kaimakli', 596, 0, 0, 0,0,0,0),
    createData(2, 'Agioi Omologites', 1041, -12.2, 8.4, 0,-2.1,0,0),
    createData(3, 'Agios Andreas', 1141, -11.6, 0, 0,0,0,0),
    createData(4, 'Strovolos', 1725, -9, 8.6, 0.7,3.1,0.7,0),
    createData(5, 'Aglantzia', 1825, -0.6, 6, 0,0,0,0),
  ];
  
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  // Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
  // stableSort() brings sort stability to non-modern browsers (notably IE11). If you
  // only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
  // with exampleArray.slice().sort(exampleComparator)
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  const headCells = [
    {
      id: 'city',
      numeric: false,
      disablePadding: true,
      label: 'City',
    },
    {
      id: 'avgprice',
      numeric: true,
      disablePadding: false,
      label: 'Average price',
    },
    {
      id: 'troughcurrent',
      numeric: true,
      disablePadding: false,
      label: 'Trough-current',
    },
    {
      id: 'peakcurrent',
      numeric: true,
      disablePadding: false,
      label: 'Peak-current',
    },
    {
      id: 'last12',
      numeric: true,
      disablePadding: false,
      label: 'Last 12 month',
    },
    {
      id: 'last3',
      numeric: true,
      disablePadding: false,
      label: 'Last 3 month',
    },
    {
      id: 'lastmonth',
      numeric: true,
      disablePadding: false,
      label: 'Last month',
    },
    {
      id: 'yearonyear',
      numeric: true,
      disablePadding: false,
      label: 'Year on year',
    },
    
  ];
  
  function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
      props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          
          {headCells.map((headCell , index) => (
            <TableCell
            
              key={index}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
              className='text-center'
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
                className='text-[0.850rem]'
              >

              
              {headCell.label}
                
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden }>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  
  
  
  



function Stats() {

    const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('avgprice');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(500);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

 

  

  
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <>
    <div className='bg-white'>

        <div className='container mt-20'>
            <Box sx={{ width: '100%' }} className='border-0'>
            <Paper sx={{ width: '100%', mb: 2 }} className=' shadow-none'>
            <TableContainer>
            <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
            >
                <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
                />
                <TableBody>
                {visibleRows.map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                    <TableRow key={index}>
                        
                        <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        className=' border-l-2'
                        >
                       
                       
                        <Link href="" className='font-semibold '>
                          <div className='flex items-center'>
                            <div className='flex items-center hover:text-blue-900 text-[#177bff] hover:underline'>
                              <SvgIcon component={ShowChartOutlinedIcon} sx={{ color: 'blue', '&:hover':{
                                color: 'rgb(30, 58, 138)',
                              } }} className='ml-1 mr-3 flex-grow-0' />
                              {row.city}
                            </div>
                          </div>
                        </Link>


                        </TableCell>
                        <TableCell className='font-medium border-l-2 border-r-2 ' align="left">€ {row.avgprice}</TableCell>
                        <TableCell className='font-medium border-l-2 border-r-2 '  align="left">{row.troughcurrent}%</TableCell>
                        <TableCell className='font-medium border-l-2 border-r-2 '  align="left">{row.peakcurrent}%</TableCell>
                        <TableCell className='font-medium border-l-2 border-r-2 '  align="left">{row.last12}%</TableCell>
                        <TableCell className='font-medium border-l-2 border-r-2 '  align="left">{row.last3}%</TableCell>
                        <TableCell className='font-medium border-l-2 border-r-2 '  align="left">{row.lastmonth}%</TableCell>
                        <TableCell className='font-medium border-l-2 border-r-2 py-1 '  align="left"><Recharts/></TableCell>
                    </TableRow>
                    );
                })}
                <TableRow className='border-t-4 border-[#ed1d24] '>
                        
                        <TableCell
                        component="th"
                        scope="row"
                        padding="none"
                        className='bg-[#e9f5fe] font-semibold pl-2  border-l-2'
                        >
                          Famagusta
                        </TableCell>
                        <TableCell className='font-medium border-l-2 border-r-2 bg-[#e9f5fe]' align="left">€ 3422</TableCell>
                        <TableCell className='font-medium border-l-2 border-r-2 bg-[#e9f5fe]' align="left">-5%</TableCell>
                        <TableCell className='font-medium border-l-2 border-r-2 bg-[#e9f5fe]' align="left">4.8%</TableCell>
                        <TableCell className='font-medium border-l-2 border-r-2 bg-[#e9f5fe]' align="left">-0.3%</TableCell>
                        <TableCell className='font-medium border-l-2 border-r-2 bg-[#e9f5fe]' align="left">0%</TableCell>
                        <TableCell className='font-medium border-l-2 border-r-2 bg-[#e9f5fe]' align="left">-0.7%</TableCell>
                        <TableCell className='font-medium border-l-2 border-r-2 bg-[#e9f5fe] py-1' align="left"><Recharts/></TableCell>
                    </TableRow>
                {emptyRows > 0 && (
                    <TableRow
                    style={{
                        height: (dense ? 33 : 53) * emptyRows,
                    }}
                    >
                    <TableCell colSpan={8} />
                    </TableRow>
                )}
                </TableBody>
            </Table>
            </TableContainer>
                
            </Paper>
            </Box>
        </div>
    </div>

    </>
  )
}

export default Stats