import {useSelector, useDispatch} from 'react-redux';
import {selectAircraft} from '../../actions/index';

const Aircraft = ({aircraft}) =>{

    const {
        ident
    } = aircraft;

    const selectedAircraft = useSelector(state=>state.selectedAircraft)

    const dispatch = useDispatch();

    const handleClick = () =>{
        dispatch(selectAircraft(ident))
    };

    var className = selectedAircraft && selectedAircraft.ident !== ident ? 'item' : 'item chosen';

    return (
        <div key={ident} className={className} onClick={handleClick}>
            <p>{ident}</p>
        </div>
    )
};

export default Aircraft;