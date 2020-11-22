import {useSelector} from 'react-redux';

const Banner = () => {

    const selectedAircraft = useSelector(state => state.selectedAircraft);

    return (
        <>
            <div className="leftRight banner">
                <p>Aircrafts</p>
            </div>
            <div className="rotation banner"  >
                <p>{selectedAircraft ? 'Rotation ' + selectedAircraft.ident : 'No Rotation Available'}</p>
                <hr/>
            </div>
            <div className="leftRight banner" >
                <p>Flights</p>
            </div>
        </>
    )
};

export default Banner;