import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getAircrafts, getFlights} from '../actions/index';
import Flights from './Flights/Flights';
import Rotation from './Rotation/RotationContainer';
import Aircrafts from './Aircrafts/Aircrafts';
import Banner from './Banner';

const FlightStuff = () => {

    const dispatch = useDispatch();

    const limit = useSelector(state=>state.limit)
    const offset = useSelector(state=>state.offset)
    
    useEffect(() => {
        dispatch(getAircrafts())
        dispatch(getFlights({offset, limit}))
    }, []);

    return (
        <div>
            <div>
                <Banner/>
            </div>
            <div className="flightStuff">
                <Aircrafts/>
                <Rotation/>
                <Flights/>
            </div>
        </div>
    );
};

export default FlightStuff;