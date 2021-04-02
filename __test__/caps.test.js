// 'use strict'
const capss = require('../caps.js')
// const driver = require('../driver.js')
// const vendor = require('../vendor.js');
console.log = jest.fn()
//spy 
describe('test the driver module', () => {
  it('when we console log there is some out put', () => {
    driver.pickedUp({ storeName: 'tana', orderId: Math.random() * 1000, customerName: 'nassir', adress: '1615 19th ave' })
    setTimeout(() => { expect(console.log).toHaveBeenCalled() }, 500)
  })

  it('when we console log there is some out put', () => {
    driver.transit({ storeName: 'tana', orderId: Math.random() * 1000, customerName: 'nassir', adress: '1615 19th ave' })
    setTimeout(() => { expect(console.log).toHaveBeenCalled() }, 1000)
  })

  it('when we console log there is some out put', () => {
    driver.transit({ storeName: 'tana', orderId: Math.random() * 1000, customerName: 'nassir', adress: '1615 19th ave' })
    setTimeout(() => { expect(console.log).toHaveBeenCalled() }, 15000)
  })
})
// test vendor module//


describe('Test the vendor module', () => {
  it('when we console log there is some out put', () => {
    vendor.delivered({ storeName: 'tana', orderId: Math.random() * 1000, customerName: 'nassir', adress: '1615 19th ave' })
    expect(console.log).toHaveBeenCalled();
  })
})