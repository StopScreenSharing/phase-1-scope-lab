var customerName = 'bob';
 customerName();

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    }


var bestCustomer = 'not bob'
function setBestCustomer() {
    bestCustomer = 'not bob';
    }


function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}



function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'karen'
    leastFavoriteCustomer = 'mona';
    console.log(leastFavoriteCustomer);
}
