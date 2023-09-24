import './styles/Warehouse.css'
import { useNavigate } from 'react-router-dom';
import store from '../store';
import { useEffect } from 'react';
import NavBar from './Navbar';
function Warehouse(props){
    const navigate = useNavigate()
    const handleClick = ()=> {
        const wareHouseid = props.warehouse.id
        store.dispatch({type: "SEARCH",payload: {id: wareHouseid}})
        navigate("/warehouse",{state : {
            id: wareHouseid
        }});
    }
    useEffect(()=>{
    }
    ,[])
    return (
        
        <div className="Warehouse" onClick={handleClick}>
            
            <h1>{props.warehouse.name}</h1>
            <p>Location: {props.warehouse.city}</p>
            <p>Cluster Name: {props.warehouse.cluster}</p>
            <p>Space Avaliable: {props.warehouse.space_available}</p>
            <br></br>   
            
        </div>
    );
}

export default Warehouse;