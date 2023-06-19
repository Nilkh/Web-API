//your code
const URL =
	'https://www.boredapi.com/api/activity?minprice=0&maxprice=0.1&participants%3E1'

fetch(URL).then(res => {
    console.log(res)

})
// console.log(fetch(URL))
