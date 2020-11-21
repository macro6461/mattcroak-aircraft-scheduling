import {useDispatch} from 'react-redux';
import {removeFromRotation} from '../../actions/index';
import { FaTrash } from 'react-icons/fa';


const Rotation = ({rotation}) =>{

    const dispatch = useDispatch();

    const handleClick = () =>{
        dispatch(removeFromRotation(rotation))
    };

    return (
        <div key={rotation.id} className="item rot">
            <div>
                <p>{rotation.id}</p>
            </div> 
            <FaTrash onClick={handleClick} style={{marginRight: 10}}/>
        </div>
    )
};

export default Rotation;