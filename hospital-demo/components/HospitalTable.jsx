import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';


export default function HospitalTable({ hospitals, setDeleteId, deleteId, deleteHospital}) {
  console.log(deleteId, 'hospitaltable')
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hospitals</TableCell>
            <TableCell>State</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Staff Count</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hospitals?.map((h) => (
            <TableRow
              key={h.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {h.name}
              </TableCell>
              <TableCell>{h.state}</TableCell>
              <TableCell>{h.city}</TableCell>
              <TableCell>{h.staff}</TableCell>
              <TableCell
                align="left"
              >
                {
                  deleteId === h.id ?
                  (<>
                    <CancelIcon style={{cursor: "pointer", marginRight: "0.5em"}} onClick={() => setDeleteId(null)} />
                    <CheckIcon style={{cursor: "pointer"}} onClick={() => deleteHospital.mutate(h.id)} />
                  </>) :
                (<DeleteIcon 
                  style={{cursor: "pointer", marginRight: "1.5em"}}
                  // style={{ paddingLeft: "2em", cursor: "pointer" }} 
                    onClick={() => setDeleteId(h.id)}
                />)
}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
