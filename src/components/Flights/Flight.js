import {useDispatch, useSelector} from 'react-redux';
import {addToRotation, removeFromRotation} from '../../actions/index';

const Flight = ({flight}) =>{

    const inRotation = useSelector(state=>state.inRotation);
    const dispatch = useDispatch();

    const handleClick = () =>{
        if (inRotation.indexOf(flight.id) === - 1){
            dispatch(addToRotation(flight))
        }
    };

    return (
        <div key={'flight-' + flight.id} className={inRotation.indexOf(flight.id) > -1 ? "item chosen" : 'item'} onClick={handleClick}>
            <p>{flight.id}</p>
        </div>
    )
};

export default Flight;