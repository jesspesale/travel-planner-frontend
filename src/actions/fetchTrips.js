

export function fetchTrips(action) {
    fetch('http://localhost:3000/api/v1/trips')
    .then(resp =>resp.json())
    .then(data => console.log(data))
 
}

