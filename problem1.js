/*function signature/sample */
function newPrice(currentPrice , discount ) {
        if(typeof currentPrice !== 'number' || typeof discount !== 'number'){
          return 'Invalid';
        }
        else if (discount < 0 || discount > 100){
          return 'Invalid';
        }

          const totalDiscount = currentPrice * discount / 100;
          const price = currentPrice - totalDiscount;
          return price.toFixed(3);
}
// const final = newPrice(1200, 7);
// console.log(final);


 