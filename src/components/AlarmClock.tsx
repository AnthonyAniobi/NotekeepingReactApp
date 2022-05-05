import React, { useEffect, useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function AlarmClock() {

    const [currentTime, setCurrentTime] = useState('');
    const [alarmTime, setAlarmTime] = useState('');

    useEffect(() => {
        setInterval(
            updateAlarm,
            1000,
        );
    }, [])

    function updateAlarm() {
        setCurrentTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }
    // new Date().toLocaleTimeString('en-US', { hour12: false })

    return (
        <div style={{ display: "flex", flexDirection: 'row', alignItems: 'baseline' }}>

            <AccessTimeIcon />
            <p >{currentTime}</p>
        </div>
    )
}

export default AlarmClock
