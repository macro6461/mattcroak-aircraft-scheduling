import {useSelector} from 'react-redux';
import Rotation from './Rotation';

const RotationContainer = () =>{

    const rotations = useSelector(state => state.rotations);

    return (
        <div className="rotation">
            {rotations.length > 0 
                ? rotations.map(rotation=>{
                    return <Rotation rotation={rotation} key={rotation.id}/>
                })
                : <p>Nothing in rotation.</p>
            }
        </div>
    )
};

export default RotationContainer;