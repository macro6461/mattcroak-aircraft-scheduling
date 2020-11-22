const calcUsability = (rotations) =>{
    var totalMins = 0;

    rotations.forEach(x=> {
        var timeInMins  = (x.arrivaltime - x.departuretime) / 60
        //need to include turnaround
        totalMins += timeInMins + 20
    })

    //mins in 24 hours = 1440
    var x = (totalMins / 1440) * 100

    return Math.round(x)
};


export default function rootReducer(state={
    flights: [],
    aircrafts: [],
    rotations: [],
    inRotation: {},
    rotationMap: {},
    currentDate: null,
    selectedAircraft: null,
    offset: 0,
    limit: 25,
    prevOffset: 0,
    total:0,
    usability: 0
}, action){

    switch(action.type){
        case "GET_AIRCRAFTS":
             //initialize date with tomorrow's date
             const today = new Date()
             const tomorrow = new Date(today)
             tomorrow.setDate(tomorrow.getDate() + 1)

            return {...state, currentDate: tomorrow}
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
            var rotation = action.payload;
            rotation.date = state.currentDate;
            var tempRotations = state.rotations.map(x=>x);
            var rotations = state.rotations.map(x=>x);

            tempRotations.push(rotation);

            var usability = calcUsability(tempRotations);

            var inRotation = {...state.inRotation};

            if (usability > 100){
                alert('Adding this flight to the rotation will push aircraft usability beyond 100%. Cannot add to rotation.')
            } else {
                rotations.push(rotation);
                inRotation[rotation.id] = true;
            }

            return {...state, rotations, inRotation, usability: usability > 100 ? state.usability : usability}

        case "REMOVE_FROM_ROTATION": 
            var newRotationObj = {}
            var keys = Object.keys(state.inRotation).filter(x=>x !== action.payload.id)

            var rotations = state.rotations.filter(rotation=>{
                return rotation.id !== action.payload.id
            })

            var usability = calcUsability(rotations);

            keys.forEach(x=>{
                newRotationObj[x] = state.inRotation[x]
            });

            return {...state, rotations, inRotation: newRotationObj, usability}
        default:
            return state;
    }
};