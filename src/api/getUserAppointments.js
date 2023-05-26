

async function getUserAppointments(userId){
    const res = await fetch(`https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev/appointments/${userId}`);

    if(!res.ok){
        const error={
            message : "Failed to fetch user Appointments",
            statusText : res.statusText,
            status : res.status,
        }
        throw error;
    }
    const data = await res.json();
    return data;
}

export default getUserAppointments;