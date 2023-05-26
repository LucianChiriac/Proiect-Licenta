
async function getAvailableServices(){

    const res = await fetch(`https://zknyo7t9m3.execute-api.eu-west-3.amazonaws.com/dev/events`)
    if (!res.ok){
        console.log(res)
        const error = {
            message : "Failed to fetch event data!",
            statusText : res.statusText,
            status : res.status
        }
        throw error;
    }
    let data = await res.json();
    return data.body;
}

export {getAvailableServices}