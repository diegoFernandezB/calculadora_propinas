export function formatCurrency(quantity: number){
    return new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(quantity)
}