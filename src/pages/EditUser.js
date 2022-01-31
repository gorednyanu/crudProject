import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux"
import { getSingleUser, updateUser } from '../redux/actions';

const EditUser = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const {user} = useSelector((state=>state.usersData));
    useEffect(()=>{
        dispatch(getSingleUser(id));
    },[dispatch]);
    useEffect(()=>{
        if(user){
            setState({...user});
        }
    },[user])

    const [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: ""
    });
    const [error, setError] = useState("");

    const { name, email, contact, address } = state;

    const handelInputChange = (event) => {
        let { name, value } = event.target;
        setState({ ...state, [name]: value });
    }
    const handelSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !contact || !address) {
            setError("please enter data in all fields");
        }
        else{
            dispatch(updateUser(state,id));
            history("/");
            setError("")
        } 
        
    }
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <ButtonGroup variant='contained' aria-label='outlined secondary button group'>
                    <Button color="secondary" style={{ marginTop: "10px" }} onClick={()=> history('/')}>Go Back</Button>
                </ButtonGroup>
                <h2>Edit User </h2>
                {error && (<h3 style={{color:"red"}}>{error} </h3>)} 
                <form noValidate autoComplete="off" onSubmit={handelSubmit}>

                    <TextField type='text' id="standard-basic" label='Enter your name' name='name' value={name || ""} onChange={handelInputChange} /><br></br>
                    <TextField type='email' id="standard-basic" label='Enter your email' name='email' value={email || ""} onChange={handelInputChange} /><br></br>
                    <TextField type='text' id="standard-basic" label='Enter your contact' name='contact' value={contact || ""} onChange={handelInputChange} /><br></br>
                    <TextField type='text' id="standard-basic" label='Enter your address' name='address' value={address || ""} onChange={handelInputChange} /><br></br>
                    <ButtonGroup variant='contained' aria-label='outlined primary button group'>
                        <Button color="primary" style={{ marginTop: "10px" }} type="submit">Edit User</Button>
                    </ButtonGroup>
                </form>
            </div>
        </div>
    )
}

export default EditUser;
