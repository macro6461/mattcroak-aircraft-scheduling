import { useDispatch, useSelector } from "react-redux";
import {getFlights} from '../../actions/index';
import Flight from './Flight';

const Flights = () =>{

    const dispatch = useDispatch();

    const flights = useSelector(state => state.flights);
    const offset = useSelector(state => state.offset);
    const limit = useSelector(state => state.limit);
    const prevOffset = useSelector(state => state.prevOffset);

    const next = () => {
        dispatch(getFlights({offset: offset, limit}))
    };

    const prev = () => {
        dispatch(getFlights({offset: prevOffset, limit}))
    }

    return (
        <div className="leftRight">
            <div>
                {flights.length > 0 
                    ? flights.map(flight=>{
                        return <Flight flight={flight} key={flight.id}/>
                    })
                    : <p>No flights found.</p>
                }
            </div>
            <div className="pagination">
                    <button onClick={prev}>
                        Previous
                    </button>
                    <button onClick={next}>
                        Next
                    </button>
                </div>
        </div>
    )
};

export default Flights;