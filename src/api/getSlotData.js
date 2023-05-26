

async function getSlotData(startDate, endDate){

    const res = await fetch(`https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev/slots/${startDate}/${endDate}`)
    if (!res.ok){
        const error = {
            message : "Failed to fetch slot data!",
            statusText : res.statusText,
            status : res.status
        }
        throw error;
    }
    let data = await res.json();
    return data.body;
}

export {getSlotData}