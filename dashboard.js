//triggers when page loads
document.addEventListener('DOMContentLoaded', populateDashboard);
document.addEventListener('DOMContentLoaded', populateSales);

//for sales
function populateSales() {
    const sales = document.querySelector('.sales');
    const  expenditure = document.querySelector('.expenditure');
    let getSales = JSON.parse(sessionStorage.getItem('sales'));
    let getSalesTotal = 0;
    let getExpenditure = JSON.parse(sessionStorage.getItem('expenses'));
    let getExpenditureTotal = 0;
    //checks for session storage content 
    if (sessionStorage.getItem('sales') === null || sessionStorage.getItem('expenses') === null ) {
        sales.textContent = `0.00`;
        expenditure.textContent = `0.00`;
    }else{
             //to add up every
         for (let i = 0; i < getSales.length; i++) {
        getSalesTotal += getSales[i];
    }
         //adds up all expenditure 
        for (let i = 0; i < getExpenditure.length; i++) {
        getExpenditureTotal += getExpenditure[i];
    }
        sales.textContent = `${getSalesTotal}.00`;
        expenditure.textContent = `${getExpenditureTotal}.00`;
    }
}

//display current metrics
function populateDashboard() {
    //select elements from the DOM
    
    const  profit = document.querySelector('.profit');
    const  loss = document.querySelector('.loss');

    //initiialise DOM elements
    
    //declare variables to store json output
    
    let getProfit = JSON.parse(sessionStorage.getItem('profit'));
    let getLoss = JSON.parse(sessionStorage.getItem('loss'));


    //condition to check for storage contents
   


    if (JSON.parse(sessionStorage.getItem('profit')) === null) {
        profit.textContent = `0.00`;
    }else{
        profit.textContent = `${getProfit}`;
    }

    if (JSON.parse(sessionStorage.getItem('loss')) === null) {
        loss.textContent = `0.00`;
    }else{
        loss.textContent = `${getLoss}`;
    }


}