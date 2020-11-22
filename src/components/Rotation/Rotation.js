import {useDispatch} from 'react-redux';
import {removeFromRotation} from '../../actions/index';
import { FaTrash } from 'react-icons/fa';


const Rotation = ({rotation}) =>{

    const {
        id,
        departuretime,
        arrivaltime,
        readable_departure,
        readable_arrival,
        origin,
        destination
    } = rotation;

    const dispatch = useDispatch();

    const handleClick = () =>{
        dispatch(removeFromRotation(rotation))
    };

    return (
        <div key={id} className="item rot">
            <div>
                <p>Flight: {rotation.id}</p>
                <div className="flightInner">
                <div>
                    <p>{origin}</p>
                    <p>{readable_departure}</p>
                </div>
                <div>
                    <p>{destination}</p>
                    <p>{readable_arrival}</p>
                </div>
            </div>
            </div> 
            <FaTrash onClick={handleClick} style={{marginRight: 10}}/>
        </div>
    )
};

export default Rotation;