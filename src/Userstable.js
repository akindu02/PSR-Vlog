import { Paper, TableBody, TableContainer } from "@mui/material";

const Userstable = props => {
    <TableContainer component={Paper}>
        <table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               
            </TableBody>
        </table>

    </TableContainer>
}

export default Userstable;