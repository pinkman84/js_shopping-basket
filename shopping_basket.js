var shoppingBasket = {

  contents: [{
    item: 'video games',
    type: 'electronics',
    cost: 44.99
    },
    { 
    item: 'CDs',
    type: 'electronics',
    cost: 12.99
    },
    {
    item: 't-shirts',
    type: 'clothes',
    cost: 18
    },
    {
    item: 'crisps',
    type: 'food',
    cost: 2.50
    },
  ],

  addItem: function(i, t, c) {
    this.contents.push( { 
      item: i,
      type: t,
      cost: c
    } )
  },

  removeItem: function(product) {
    for (var i = 0; i < this.contents.length; i++) {
      if(this.contents[i].item === product){
        this.contents.splice(i, 1)}
      }
     }, 
 
  totalAmount: function() {
   var cash = 0
   for (var content in this.contents) {
     cash += this.contents[content].cost 
   };
   if(cash < 20){
    return cash
   }
   else {
    return cash * 0.8
   }
 },

 loyaltyCard: function(confirm) {

    if(confirm === 'yes') {
      var loyalty = this.totalAmount * 0.95
      return loyalty.toFixed(2)
    }

 }

}






module.exports = shoppingBasket;