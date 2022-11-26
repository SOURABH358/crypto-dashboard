export function formatCurrency(amount) {
    // let amount = 2300.0456;
    amount = parseFloat(amount)
    let currencyValue = ['', 'thousand', 'million', 'billion', 'trillion']
    let i = 0;
    while (amount > 1000) {
        i += 1;
        amount = amount / 1000;
    }
    amount = parseFloat(amount.toFixed(2));
    return amount + ' ' + currencyValue[i];
}