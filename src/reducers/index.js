export default function rootReducer(state={
    flights: [],
    aircrafts: [],
    rotations: [],
    inRotation: {},
    rotationMap: {},
    selectedAircraft: null,
    offset: 0,
    limit: 25,
    prevOffset: 0,
    total:0
}, action){

    switch(action.type){
        case "GET_AIRCRAFTS":
            return {...state}
        case "GET_FLIGHTS":
            return {...state}
        case "GET_AIRCRAFTS_SUCCESS":
            var {data} = action.payload
            var selectedAircraft = data[0]
            return {...state, aircrafts: data, selectedAircraft}
        case "GET_FLIGHTS_SUCCESS":
            var {data, pagination} = action.payload;
            var {offset, limit, total} = pagination;
            var prevOffset = offset - 25;
            offset = total > offset + 25 ? offset + 25 : offset;
            prevOffset = prevOffset < 0 ? 0 : prevOffset;

            return {...state, flights: data, offset, limit, prevOffset, total}
        case "SELECT_AIRCRAFT":
            var selectedAircraft = state.aircrafts.find(aircraft=>aircraft.ident === action.payload);
            return {...state, selectedAircraft}
        case "ADD_TO_ROTATION":

            var rotations = state.rotations.map(x=>x);
            var inRotation = Object.create(state.inRotation);
            rotations.push(action.payload);
            inRotation[action.payload.id] = true;

            return {...state, rotations, inRotation}

        case "REMOVE_FROM_ROTATION": 
            var inRotation = Object.create(state.inRotation);

            var rotations = state.rotations.filter(rotation=>{
                return rotation.id !== action.payload.id
            })

            delete inRotation[action.payload.id];

            return {...state, rotations, inRotation}
        default:
            return state;
    }
};