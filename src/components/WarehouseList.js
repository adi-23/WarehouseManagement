import store from "../store";
import { useEffect, useMemo, useState } from "react";
import Warehouse from "./Warehouse";
import { connect } from "react-redux";
import './styles/WarehouseList.css'
import NavBar from "./Navbar";

function WarehouseList(wareHousestate) {

    const { wareHouses } = wareHousestate
    const cities = ["", ...new Set(wareHouses.map(warehouse => warehouse.city))]
    const clusters = ["", ...new Set(wareHouses.map(warehouse => warehouse.cluster))]
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [cluster, setCluster] = useState('');
    const [space, setSpace] = useState('');

    const filteredWarehouses = useMemo(() => {
        return wareHouses.filter((warehouse) => {
            {
                return (isNamePresent(name, warehouse) && isPresent(cluster, warehouse, "cluster")
                    && isPresent(city, warehouse, "city") && isPresent(space, warehouse, "space_available"));
            }
        })
    }, [name, city, cluster, space])

    function isNamePresent(name, warehouse) {
        return !name.length || warehouse["name"].toLowerCase().includes(name.toLowerCase());
    }

    function isPresent(attribute, warehouse, value) {
        return !attribute.length || warehouse[value] === attribute;
    }


    return (
        <div>
            <NavBar />
            <div className='WarehouseList'>
                <div class="form">
                    <form>
                        <div class="row">
                            <div>
                                <label for="name">Enter Warehouse name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label for="city">Select city name:</label>
                                <select
                                    id="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                >
                                    {cities.map((item) => (
                                        <option value={item} key={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label for="cluster">Enter Cluster name:</label>
                                <select
                                    id="cluster"
                                    value={cluster}
                                    onChange={(e) => setCluster(e.target.value)}
                                >
                                    {clusters.map((item) => (
                                        <option value={item} key={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label for="space">Enter Space available limit:</label>
                                <input
                                    type="text"
                                    id="space"
                                    value={space}
                                    onChange={(e) => setSpace(e.target.value)}
                                />
                            </div>
                        </div>
                    </form>
                </div>
                {filteredWarehouses.map((x) => {
                    return (
                        <Warehouse warehouse={x} />
                    )
                })}

            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return state.search;
};
export default connect(mapStateToProps)(WarehouseList);