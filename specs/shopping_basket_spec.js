var basket = require('../shopping_basket')
var assert = require('chai').assert

describe( 'Shopping Basket', function() {

  it( 'total of basket shoule be 78.48 - 20%', function() {
    assert.equal(62.78, basket.totalAmount().toFixed(2))
  })

  it( 'can take things out of basket so items now equals 3', function() {
    basket.removeItem('crisps')
    assert.equal(3, basket.contents.length)
  })

  it( 'can add an item to the basket so items now equal 4', function() {
    basket.addItem('crisps', 'food', 2.5)
    console.log(basket.contents)
    assert.equal(4, basket.contents.length)
  })

  it( 'customer has loyalty card, take off 5% extra total now 59.64', function() {
 
    assert.equal(59.64, basket.loyaltyCard('yes').toFixed(2))
  })


})