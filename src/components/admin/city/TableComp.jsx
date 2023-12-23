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
import UserContext from '../../../context/UserContext';

function createData(id, city, avgprice, troughcurrent, peakcurrent, last12, last3, lastmonth, yearonyear) {
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
    id: ' Update & Delete',
    numeric: true,
    disablePadding: false,
    label: ' Update & Delete',
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

        {headCells.map((headCell, index) => (
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









function TableComp({ handleDeleteRequest, refresh, cityName }) {

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('avgprice');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(500);
  const [rows, setRows] = useState([])
  const { updateTable, setUpdateTable, setTableData } = useContext(UserContext)

  useEffect(() => {
    const getApi = async () => {
      await axios.get('/api/admin/table').then((response) => {


        response.data.data.map((item, index) => {
          setRows(response?.data?.data)
        })
        setTimeout(() => {
          setOrder("asc")
          setOrderBy("city")
        }, 3000);
      }).catch(err => { console.log(err); })
    }

    getApi();
  }, [refresh])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');


    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      Table
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };






  // Avoid a layout jump when reaching the last page with empty rows.
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
  const hadnleupdate = (name, parent, id) => {

    setUpdateTable(!updateTable)
    setTableData({
      id: id,
      ParentCity: parent,
      cityName: name
    })
  }

  return (
    <>

      <div className=''>

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

                      return row?.ParentCity === cityName ? (

                        <TableRow key={index} >

                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                            className=' border-l-2'
                          >

                            <a href="" className='font-semibold '>
                              <div className='flex items-center'>
                                <div className='flex items-center hover:text-blue-900 text-[#177bff] hover:underline'>
                                  <SvgIcon component={ShowChartOutlinedIcon} sx={{
                                    color: 'blue', '&:hover': {
                                      color: 'rgb(30, 58, 138)',
                                    }
                                  }} className='ml-1 mr-3 flex-grow-0' />
                                  {row.cityName}
                                </div>
                              </div>
                            </a>


                          </TableCell>
                          <TableCell className='font-medium border-l-2 border-r-2 ' align="left">€ {row.averagePrice}</TableCell>
                          { }
                          <TableCell className='font-medium border-l-2 border-r-2 ' align="left" > {row.troughCurrent} %</TableCell>
                          <TableCell className='font-medium border-l-2 border-r-2 ' align="left">{row.peakCurrent
                          }%</TableCell>
                          <TableCell className='font-medium border-l-2 border-r-2 ' align="left">{row.last12Month}%</TableCell>
                          <TableCell className='font-medium border-l-2 border-r-2 ' align="left">{row.last3Month
                          }%</TableCell>
                          <TableCell className='font-medium border-l-2 border-r-2 ' align="left">{row.lastMonth}%</TableCell>
                          <TableCell className='font-medium border-l-2 border-r-2 py-1' align="left">
                            <button onClick={() => { hadnleupdate(row.cityName, row.ParentCity, row._id) }} className=' border-cyan-300 bg-yellow-500 w-[100px] h-[30px] rounded-lg hover:bg-yellow-300 mb-2'>UPDATE</button>

                            <button onClick={() => { handleDeleteRequest(row.cityName) }} className=' border-cyan-300 bg-red-500 w-[100px] h-[30px] rounded-lg hover:bg-red-300'>DELETE</button>
                          </TableCell>

                        </TableRow>

                      ) : null
                    })}

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
        </div >
      </div >
    </>
  )
}

export default TableComp