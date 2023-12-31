import { useEffect, useState, useMemo, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { SvgIcon } from '@mui/material';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import Recharts from './Recharts';
import UserContext from '../../../context/UserContext';


function createData(id, district, avgprice, troughcurrent, peakcurrent, last12, last3, lastmonth, yearonyear) {
  return {
    id,
    district,
    avgprice,
    troughcurrent,
    peakcurrent,
    last12,
    last3,
    lastmonth,
    yearonyear,

  };
}

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
    id: 'district',
    numeric: false,
    disablePadding: true,
    label: 'District',
  },
  {
    id: 'avgprice',
    numeric: true,
    disablePadding: true,
    label: 'Average price',
  },
  {
    id: 'troughcurrent',
    numeric: true,
    disablePadding: true,
    label: 'Trough-current',
  },
  {
    id: 'peakcurrent',
    numeric: true,
    disablePadding: true,
    label: 'Peak-current',
  },
  {
    id: 'last12',
    numeric: true,
    disablePadding: true,
    label: 'Last 12 month',
  },
  {
    id: 'last3',
    numeric: true,
    disablePadding: true,
    label: 'Last 3 month',
  },
  {
    id: 'lastmonth',
    numeric: true,
    disablePadding: true,
    label: 'Last month',
  },
  {
    id: 'yearonyear',
    numeric: true,
    disablePadding: true,
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
    <TableHead className=''>
      <TableRow>

        {headCells.map((headCell, index) => (
          <TableCell
            key={index}
            align={'left'}
            padding={'none'}
            sortDirection={orderBy === headCell.id ? order : false}
            className='justify-between text-[0.81rem] font-normal text-gray-500  my-5 px-2 py-3'
          >
            {headCell.label}
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              className=''
            >
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
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

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('avgprice');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(500);
  const [rows, setRows] = useState([])
  const { Avm, setAvm, setCityData } = useContext(UserContext)
  const [avgAp, setAvgAp] = useState()
  const [avgTrough, setAvgTrough] = useState()
  const [avgPeak, setAvgPeak] = useState()
  const [avgL12, setAvg12] = useState()
  const [avgL3, setAvg3] = useState()
  const [avgL, setAvgL] = useState()

  useEffect(() => {
    const getApi = async () => {
      await axios.get('api/admin/table').then((response) => {


        setRows(response?.data?.data)
        setCityData(response?.data?.data)
        setTimeout(() => {
          setOrder("asc")
          setOrderBy("troughCurrent")
        }, 3000);
      }).catch((err) => {console.log(err);})
    }

    getApi();
  }, [])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');

  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  const checkcolor = (value) => {
    if (value >= 20) {
      return { backgroundColor: '#9ecbb2' }
    }
    else if (value > 10) {
      return { backgroundColor: '#b0e2c6' }
    }
    else if (value > 5) {
      return { backgroundColor: '#dbf1e4' }
    }
    else if (value <= -20) {
      return { backgroundColor: '#faab9e' }
    }
    else if (value < -10) {
      return { backgroundColor: '#fcc5bc' }
    }
    else if (value <= -5) {
      return { backgroundColor: '#fee4e0' }
    }
  }

  useEffect(() => {
    let sum1 = 0
    let sum2 = 0
    let sum3 = 0
    let sum4 = 0
    let sum5 = 0
    let sum6 = 0
    let count = 0
    rows.forEach((item) => {
      if (item.ParentCity == Avm) {
        sum1 += item.averagePrice;
        sum2 += item.troughCurrent
        sum3 += item.peakCurrent
        sum4 += item.last12Month
        sum5 += item.last3Month
        sum6 += item.lastMonth
        count++
      }
    })
    setAvgAp(sum1 / count)
    setAvgTrough(sum2 / count)
    setAvgPeak(sum3 / count)
    setAvg12(sum4 / count)
    setAvg3(sum5 / count)
    setAvgL(sum6 / count)

  }, [Avm])


  return (
    <>
      <div className='bg-white'>

        <div className='container mt-20'>
          <Box sx={{ width: '100%' }} className='border-0 sm:ml-0 ml-2'>
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
               
                      return row?.ParentCity === Avm ? (
                        <TableRow key={index}>

                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                            margin="none"
                            className=' border-l-2'
                          >


                            <div className='flex pr-2 items-center font-semibold'>
                              <div className='flex items-center hover:text-blue-900 text-blue-500'>
                                <SvgIcon component={ShowChartOutlinedIcon} sx={{
                                  color: 'blue', '&:hover': {
                                    color: 'rgb(96 165 250)',
                                  }
                                }} className='ml-1 my-0 py-0 mr-3 flex-grow-0' />
                                {row.cityName}
                              </div>
                            </div>



                          </TableCell>
                          <TableCell padding="none" margin="none" className='font-medium border-l-2 border-r-2 px-2 py-3' style={{padding: "0px 8px"}}  align="left">€ {row.averagePrice?.toFixed(2)}</TableCell>
                          {/* <TableCell padding="none" margin="none" style={checkcolor(row.troughCurrent)} className='font-medium border-l-2 border-r-2 px-2' style={{padding: "0px 8px" }} align="left">{row.troughCurrent?.toFixed(2)}%</TableCell> */}
                          <TableCell padding="none" margin="none" style={{...checkcolor(row.troughCurrent), padding: "0px 8px"}} className='font-medium border-l-2 border-r-2 px-2' align="left">{row.troughCurrent?.toFixed(2)}%</TableCell>
                          <TableCell padding="none" margin="none" style={{...checkcolor(row.peakCurrent), padding: "0px 8px"}} className='font-medium border-l-2 border-r-2 px-2'  align="left">{row.peakCurrent?.toFixed(2)}%</TableCell>
                          <TableCell padding="none" margin="none" style={{...checkcolor(row.last12Month), padding: "0px 8px"}} className='font-medium border-l-2 border-r-2 px-2'  align="left">{row.last12Month?.toFixed(2)}%</TableCell>
                          <TableCell padding="none" margin="none" style={{...checkcolor(row.last3Month), padding: "0px 8px"}} className='font-medium border-l-2 border-r-2 px-2' align="left">{row.last3Month?.toFixed(2)}%</TableCell>
                          <TableCell padding="none" margin="none" style={{...checkcolor(row.lastMonth), padding: "0px 8px"}} className='font-medium border-l-2 border-r-2 px-2'  align="left">{row.lastMonth?.toFixed(2)}%</TableCell>
                          <TableCell padding="none" margin="none" className='font-medium border-l-2 border-r-2' align="left"><Recharts values={row.yearOnYear} /></TableCell>
                        </TableRow>
                      ) : null
                    })}
                    <TableRow className='border-t-4 border-[#e6d4d4] '>

                      <TableCell
                        component="th"
                        scope="row"
                        margin="none"
                        padding="none"
                        className='bg-[#e9f5fe] font-semibold px-2 p-0 m-0 border-l-2'
                        style={{fontWeight:'600',padding: "0px 8px"}}
                      >
                        {Avm}
                      </TableCell>
                      <TableCell margin="none" padding="none" style={{padding: "0px 8px",fontWeight: '600' }} className='font-semibold border-l-2 border-r-2 px-2 py-3 bg-[#e9f5fe]' align="left">€ {avgAp?.toFixed(2)}</TableCell>
                      <TableCell margin="none" padding="none" style={{padding: "0px 8px",fontWeight: '600' }} className='font-semibold border-l-2 border-r-2 px-2 bg-[#e9f5fe]' align="left">{avgTrough?.toFixed(2)}%</TableCell>
                      <TableCell margin="none" padding="none" style={{padding: "0px 8px",fontWeight: '600' }} className='font-semibold border-l-2 border-r-2 px-2 bg-[#e9f5fe]' align="left">{avgPeak?.toFixed(2)}%</TableCell>
                      <TableCell margin="none" padding="none" style={{padding: "0px 8px",fontWeight: '600' }} className='font-semibold border-l-2 border-r-2 px-2 bg-[#e9f5fe]' align="left">{avgL12?.toFixed(2)}%</TableCell>
                      <TableCell margin="none" padding="none" style={{padding: "0px 8px",fontWeight: '600' }} className='font-semibold border-l-2 border-r-2 px-2 bg-[#e9f5fe]' align="left">{avgL3?.toFixed(2)}%</TableCell>
                      <TableCell margin="none" padding="none" style={{padding: "0px 8px",fontWeight: '600' }} className='font-semibold border-l-2 border-r-2 px-2 bg-[#e9f5fe]' align="left">{avgL?.toFixed(2)}%</TableCell>
                      <TableCell margin="none" padding="none" style={{fontWeight: '600' }} className='font-semibold border-l-2 border-r-2  bg-[#e9f5fe] ' align="left"><Recharts values={[5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5]} /></TableCell>
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