import '../App.css';

const Banner = ({flight}) =>{

    return (
        <>
            <div className="leftRight banner">
                <p>Aircrafts</p>
            </div>
            <div className="rotation banner"  >
                <p>Rotation ABCDE</p>
                <hr/>
            </div>
            <div className="leftRight banner" >
                <p>Flights</p>
            </div>
        </>
    )
};

export default Banner;