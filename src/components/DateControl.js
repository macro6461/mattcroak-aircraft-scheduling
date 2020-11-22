import {useSelector, useDispatch} from 'react-redux';
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa';

const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
}

const DateControl = () =>{

    const currentDate = useSelector(state=>state.currentDate);

    const onNextDate = () => {
        //currently disabled
    };

    const onPrevDate = () => {
        //currently disabled
    };

    const getOrdinal = () =>{
        var day = `${currentDate.getDate()}`
        var lastDigit = day[day.length - 1];
        var ordinal = 'th';
        if (lastDigit === '1'){
            ordinal = 'st'
        } else if (lastDigit === '2'){
            ordinal = 'nd'
        } else if (lastDigit === '3'){
            ordinal = 'rd'
        }

        return ordinal
        
    }

    return (
        <div style={{alignItems: 'center'}}>
            <FaAngleLeft onClick={onPrevDate}/>
            {currentDate 
                ? <p>{currentDate.getDate()}{getOrdinal()} {months[currentDate.getMonth()]} {currentDate.getFullYear()}</p>
                : null 
            }
            <FaAngleRight onClick={onNextDate}/>
        </div>
    );
};

export default DateControl;