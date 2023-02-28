import React from 'react'
import { Button, Card, CardContent, Checkbox, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import './Customerlist.css'

const columns = [
    { id: "Customer_Name", label: "Customer Name" },
    { id: "Mobile_Number", label: "Mobile Number" },
    {
      id: "email",
      label: "email",
      // align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "Order_placed",
      label: "Order placed",
      // align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "Total_Sales",
      label: "Total Sales",
      // align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "status",
      label: "Status",
      format: (value) => value.toFixed(2),
    },
    {
      id: "action",
      label: "Action",
      format: (value) => value.toFixed(2),
    },
  ];
  
  function createData(Customer_Name, Mobile_Number, email,Order_placed ,Total_sales, status, action) {
    return { Customer_Name, Mobile_Number, email,Order_placed ,Total_sales, status, action};
  }
  
  const rows = [
    createData("India", "IN", 1324171354, 3287263),
    createData("China", "CN", 1403500365, 9596961),
    createData("Italy", "IT", 60483973, 301340),
    createData("United States", "US", 327167434, 9833520),
    createData("Canada", "CA", 37602103, 9984670),
    createData("Australia", "AU", 25475400, 7692024),
    createData("Germany", "DE", 83019200, 357578),
    createData("Ireland", "IE", 4857000, 70273),
    createData("Mexico", "MX", 126577691, 1972550),
    createData("Japan", "JP", 126317000, 377973),
    createData("France", "FR", 67022000, 640679),
    createData("United Kingdom", "GB", 67545757, 242495),
    createData("Russia", "RU", 146793744, 17098246),
    createData("Nigeria", "NG", 200962417, 923768),
    createData("Brazil", "BR", 210147125, 8515767),
  ];
  

const Customerlist = () => {

    const [age, setAge] = React.useState("");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
  
  return (
    <div>
    <div className="Customer_Top_container">
      <div>
        <h3>Customer List</h3>
      </div>
      <div className="Customer-Top-button">
        <Button variant="contained" color="success">
        Add Customer
        </Button>
      </div>
    </div>
    {/* Top container closed */}
    <div className="card-container">
      <Card>
        <CardContent>
          <div className="options-container">
            <TextField variant="outlined" label="search" />
            <Button variant="contained">Search</Button>
          </div>
          <Paper>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    {columns.map((column) => (
                      <TableCell key={column.id} align={column.align}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          <TableCell>
                            <Checkbox />
                          </TableCell>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </CardContent>
      </Card>
    </div>
  </div>
);
};

export default Customerlist