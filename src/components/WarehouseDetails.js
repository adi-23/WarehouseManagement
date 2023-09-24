import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles/WarehouseDetails.css'
import { connect } from 'react-redux';
import NavBar from './Navbar';
function WarehouseDetails(wareHouseState) {
    const navigate = useNavigate();
    if(!wareHouseState.getData){
        navigate('/');
        return null;
    }
    
    const warehouse = wareHouseState.getData;
    

    const handleEdit = () => {
        navigate(`/edit/${warehouse.id}`);
    }

    return (
        <div>
            <NavBar />
            <div className='WarehouseDetails'>
                <div class="warehouse-table">
                    <table>
                        <tr>
                            <th>Name</th>
                            <td>{warehouse.name}</td>
                        </tr>
                        <tr>
                            <th>City</th>
                            <td>{warehouse.city}</td>
                        </tr>
                        <tr>
                            <th>Code</th>
                            <td>{warehouse.code}</td>
                        </tr>
                        <tr>
                            <th>Type</th>
                            <td>{warehouse.type}</td>
                        </tr>
                        <tr>
                            <th>Cluster</th>
                            <td>{warehouse.cluster}</td>
                        </tr>
                        <tr>
                            <th>Space Available</th>
                            <td>{warehouse.space_available}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>{warehouse.is_live ? "Live" : "Not Live"}</td>
                        </tr>
                    </table>
                    <button class="btn" onClick={handleEdit}>Edit</button>
                </div>

            </div>
        </div>
    );
}

function mapStateToProps({ search }) {
    return {
        getData: search.getData
    }
}


export default connect(mapStateToProps)(WarehouseDetails);