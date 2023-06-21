//your code
const URL = 'https://random-data-api.com/api/v2/banks'

fetch(URL).then(res => 
(res.json())

).then((res) => 
    console.log(res)
).catch((res) =>
console.log(res) )
// console.log(fetch(URL))
