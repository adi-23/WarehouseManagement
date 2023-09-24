import React, { useState } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { useNavigate,RedirectFunction } from 'react-router-dom';
import './styles/WarehouseForm.css'
import NavBar from './Navbar';

function WarehouseForm(warhouseState) {
    
    
    const warhouse = warhouseState.getData;
    const [name, setName] = useState(warhouse.name);
    const [city, setCity] = useState(warhouse.city);
    const [cluster, setCluster] = useState(warhouse.cluster);
    const [space, setSpace] = useState(warhouse.space_available);
    const [live, setLive] = useState(warhouse.is_live)
    const navigate = useNavigate()

    const handleEdit = () => {
        store.dispatch({
            type: "EDIT", payload: {
                id: warhouse.id,
                name: name,
                city: city,
                cluster: cluster,
                space: space,
                live: live
            }
        })
        navigate("/");

    }

    return (
        <div>
            <NavBar />
            <div className='WarehouseForm'>
                <div class="form-container">
                    <form>
                        <label for="name">Enter Warehouse name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label for="city">Select city name:</label>
                        <input
                            type="text"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />

                        <label for="cluster">Enter Cluster name:</label>
                        <input
                            type="text"
                            id="cluster"
                            value={cluster}
                            onChange={(e) => setCluster(e.target.value)}
                        />

                        <label for="space">Enter Space available limit:</label>
                        <input
                            type="text"
                            id="space"
                            value={space}
                            onChange={(e) => setSpace(e.target.value)}
                        />

                        <label for="live">Live Status:</label>
                        <input
                            type="checkbox"
                            id="live"
                            checked={live}
                            onChange={(e) => setLive(e.target.checked)}
                        />

                        <button class="btn" onClick={handleEdit}>Edit</button>
                    </form>
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


export default connect(mapStateToProps)(WarehouseForm);