import {data} from "../WarehouseData";


const initialState = {
    wareHouses: data ,
    getData: null
}
const searchReducer = (state=initialState,action)=>{
    switch(action.type){
        case "DISPLAY":
            console.log(state)
            return state;
        case "SEARCH":
            
            return {
                ...state,
                getData: state.wareHouses.find((item)=>{
                    return item.id=action.payload.id;
                })
            }
        case "EDIT":
            return {
                ...state,
                wareHouses: state.wareHouses.map((x)=>{
                    if(x.id == action.payload.id){
                        x.name= action.payload.name;
                        x.city = action.payload.city;
                        x.cluster = action.payload.cluster;
                        x.is_live = action.payload.live;
                        x.space_available = action.payload.space;
                    }
                    return x;
                })
            }
        default:
            return state;
    }


}






export default searchReducer;