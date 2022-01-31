import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@material-ui/core';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from '../redux/actions';
import { deleteUser } from '../redux/actions';
import {useNavigate} from 'react-router-dom';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const Home = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => { return state.usersData });

    const history = useNavigate();

    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

    const handeldeleteUser = (id) => {
        if (window.confirm('are you sure to delete?')) {
            dispatch(deleteUser(id));
        }
    }
    return (
        <div>
            <ButtonGroup variant='contained' aria-label='outlined primary button group'>
                <Button color="primary" style={{marginBottom:"20px"}} onClick={()=>history("/adduser")}>Add User</Button>
            </ButtonGroup>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell >Name</StyledTableCell>
                            <StyledTableCell align="center">Address</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">contact</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <StyledTableRow key={user.id}>
                                <StyledTableCell scope="row">
                                    {user.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{user.address}</StyledTableCell>
                                <StyledTableCell align="center">{user.email}</StyledTableCell>
                                <StyledTableCell align="center">{user.contact}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <ButtonGroup variant='contained' aria-label='outlined primary button group'>
                                        <Button color="primary" onClick={()=>history(`/edituser/${user.id}`)}>Edit</Button>
                                        <Button color="secondary" style={{ marginLeft: "5px" }} onClick={() => handeldeleteUser(user.id)}>Delete</Button>
                                    </ButtonGroup>
                                </StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
export default Home;































// import React from 'react';


// const Home=()=>{
//     return (
//         <div>
//             this is a Home
//         </div>
//     )
// }
// export default Home;