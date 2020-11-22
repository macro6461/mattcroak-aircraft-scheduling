import {useDispatch, useSelector} from 'react-redux';
import {addToRotation, removeFromRotation} from '../../actions/index';

const Flight = ({flight}) =>{

    const {
        id,
        departuretime,
        arrivaltime,
        readable_departure,
        readable_arrival,
        origin,
        destination
    } = flight;

    const inRotation = useSelector(state=>state.inRotation);
    const dispatch = useDispatch();

    const handleClick = () =>{
        if (!inRotation[id]){
            dispatch(addToRotation(flight))
        }
    };

    return (
        <div key={'flight-' + id} className={inRotation[id] ? "item chosen" : 'item'} onClick={handleClick} style={{borderBottom: `solid 1px ${inRotation[id] ? 'white' : '#001f3d'}`}}>
            <p>{id}</p>
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
    )
};

export default Flight;