import Navbar from "../Components/Navbar";
import PatientApt from "../Components/Patient-Apt";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, date, time) {
  return { name, date, time };
}

const rows = [
  createData("Patient xyz", "8 March 2023", "10Am - 11Am"),
  createData("Patient xyz", "8 March 2023", "10Am - 11Am"),
  createData("Patient xyz", "8 March 2023", "10Am - 11Am"),
  createData("Patient xyz", "8 March 2023", "10Am - 11Am"),
  createData("Patient xyz", "8 March 2023", "10Am - 11Am"),
  createData("Patient xyz", "8 March 2023", "10Am - 11Am"),
  createData("Patient xyz", "8 March 2023", "10Am - 11Am"),
  createData("Patient xyz", "8 March 2023", "10Am - 11Am"),
  createData("Patient xyz", "8 March 2023", "10Am - 11Am"),
  createData("Patient xyz", "8 March 2023", "10Am - 11Am"),
  createData("Patient xyz", "8 March 2023", "10Am - 11Am"),
  
];

const Appointments = () => {
  return (
    <div>
      <Navbar />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Patient Name</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.name} 
                </TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.time}</TableCell>
                <TableCell align="center"><button>Mark As Done </button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Appointments;
