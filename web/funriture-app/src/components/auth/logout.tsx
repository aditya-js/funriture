import React from 'react'
import { useNavigate } from "react-router-dom";
import { userReducer } from '../../store';
import { useDispatch } from 'react-redux';

function Logout() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onLogoutClick = () => {
        localStorage.clear()
        dispatch(userReducer.actions.reset());
        console.log("sjfbjsdbvs");
        navigate('/login')
    }
  return (
    <div onClick={onLogoutClick}>logout ki </div>
  )
}

export default Logout