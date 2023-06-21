//A list of three different beer types with the amount of alcohol they contain.
//A random person's first name, last name, city, and credit card number.
//An array of 10 different appliances.

const URL = 'https://random-data-api.com/api/v2/beers?size=3'
fetch (URL).then(res => 
    res.json()).then(res => 

 res.forEach(bearSet => {
    console.log(`${bearSet.name}: ${bearSet.alcohol}`)
 })
    )
//A random person's first name, last name, city, and credit card number.


const URL1 = 'https://random-data-api.com/api/v2/users?saize=1'
fetch(URL1).then(res =>
    res.json()
).then( res => 
    console.log(res.first_name, res.last_name, res.address.city , res.credit_card.cc_number))

    //An array of 10 different appliances.
    const URL2 = 'https://random-data-api.com/api/v2/appliances?size=10'
    function listGenerator(url) {
			fetch(url)
				.then((res) => res.json())
				.then((res) => {
					const arrayOfAppliances = res.map((applianceSet) => {
						return applianceSet.equipment
					})
					console.log(arrayOfAppliances)
				})
		}
listGenerator(URL2)
        