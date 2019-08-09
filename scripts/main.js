import businesses from "./data.js"

const outEl = document.querySelector("#output")
// outEl.innerHTML = "<h1>Active Businesses</h1>"

const zipCode = "addressZipCode"

const businessListing = (businesses) => {
    businesses.forEach(business => {
        outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>
        ${business.addressCity}, ${business['addressStateCode']} 
        ${business[zipCode]}
    </section>
  `
        outEl.innerHTML += "<hr/>"
    })
}


// const newYorkBusinesses = businesses.filter(business => business.addressStateCode === "NY")

// businessListing(newYorkBusinesses)


// const manufacturingBusinesses = businesses.filter(business => business.companyIndustry === "Manufacturing")

// businessListing(manufacturingBusinesses)


// outEl.innerHTML += "<h1>Purchasing Agents</h1>";

// /*
//     Using map(), you extract the purchasing agent object
//     from each business and store it in a new array
// */
// // const agents = businesses.map(business => {
// //     return business.purchasingAgent
// // })

// // console.table(agents)

// // agents.forEach(agent => {
// //   outEl.innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>`
// //   outEl.innerHTML += "<hr/>"
// // })  

// const agents = businesses.map(business => {
//     return {
//         fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
//         company: `${business.companyName}`,
//         phone: `${business.phoneWork}`
//     }
// })

// agents.forEach(agent => {
//     outEl.innerHTML += `<h2>${agent.fullName}</h2>`
//     outEl.innerHTML += `<h3>${agent.company}</h3>`
//     outEl.innerHTML += `<h3>${agent.phone}</h3>`
// })



// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundBusiness = businesses.find(
//                 business =>
//                     business.companyName.includes(keyPressEvent.target.value)
//             )

//             outEl.innerHTML = `
//                 <h2>
//                 ${foundBusiness.companyName}
//                 </h2>
//                 <section>
//                 ${foundBusiness.addressFullStreet}

//                 </section>
//                 <section>
//                 ${foundBusiness.addressCity},
//                 ${foundBusiness.addressStateCode}
//                 ${foundBusiness.addressZipCode}
//                 </section>
//             `
//         }
//     })


    document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundBusiness = businesses.find(
                business =>
                    business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) || business.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
            )

            outEl.innerHTML = `
                <h2>
                ${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast}
                </h2>
                <section>
                ${foundBusiness.companyName}

                </section>
                <section>
                ${foundBusiness.phoneWork}
              
                </section>
            `
        }
    })