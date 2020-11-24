import {useSelector} from 'react-redux';

const Timeline = () =>{

    const rotations = useSelector(state=>state.rotations);

    var times = []

    const calcPosition = (rotation) => {
        var left = (rotation.departuretime / 60) / 1.9
        //need to offset position. Calculate offset by dividing left by 30 (approx width of an hour)
        var offset = left / 30
        left = left - offset 
        return left
    }

    rotations.forEach(x=>{
        var obj = {}
        //good width is 30 per hour
        var timeInHours = ((x.arrivaltime - x.departuretime) / 60) / 60
        var width = timeInHours * 27
        obj.left = calcPosition(x)
        obj.width = width
        times.push(obj) 
    })

    return (
        <div style={{display: 'block', margin: 'auto', overflowX: 'auto'}}>
            <div>
                <div style={{display: 'flex', justifyContent: 'space-between', position: 'relative'}} className="tickers">
                <p>00:00</p>
                {/* <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p> */}
                <p>12:00</p>
                {/* <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p> */}
                <p></p>
                <div className="tickerLine"/>
            </div>
            <div style={{height: 50, position: 'relative'}}>
                {times.map(x=>{
                    return <><p style={{ position: 'absolute',
                        backgroundColor: 'green',
                        top: -18,
                        left: x.left,
                        height: 23,
                        width: x.width}}/>
                        <p style={{position: 'absolute',
                        backgroundColor: 'purple',
                        top: -18,
                        left: x.left + x.width,
                        height: 23,
                        width: 9}}/></>
                })}
               <div style={{backgroundColor: 'grey', width: '100%', height: 20}}/>
            </div>
            </div>
        </div>
    )
};

export default Timeline;