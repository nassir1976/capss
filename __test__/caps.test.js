// 'use strict'
const capss = require('../caps.js')
// const driver = require('../driver.js')
// const vendor = require('../vendor.js');
console.log = jest.fn()
//spy 

describe('Testing the sending module', () => {
  it('should console log some output', () => {

    let payload = {
      storeName: 'tana flower shop',
      orderID: 387.83400214917754,
      customerName: 'Howard Reynolds DVM',
      address: '928 Hosea Locks'
    };
    payload.newpayload(payload);
    expect(console.log).toHaveBeenCalled();

  });
});





