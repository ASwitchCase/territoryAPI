fetch('http://localhost:3100/api/territoryDB')

const data = {
    tid:199999
}

fetch('http://localhost:3100/api/territoryDB',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    cache: 'default'
})

