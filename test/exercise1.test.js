const expect = require('chai').expect;
const partition = require('../src/exercise1').partition;

describe('GIVEN function partition', function() {

  it('WHEN array is empty THEN should an array of 2 empty sub arrays', function() {
    expect(partition([])).to.eql([[], []]);
  });

  it('WHEN array contains 1 item and a predicate THEN should return appropriate sub arrays', function() {

    const collection = [
      {
        name: 'Francis',
        age: '55',
        active: true
      }
    ];

    const result1 = [
      [
        {
          name: 'Francis',
          age: '55',
          active: true
        }
      ],
      []
    ];

    const result2 = [
      [],
      [
        {
          name: 'Francis',
          age: '55',
          active: true
        }
      ]
    ];

    expect(partition(collection, value => value.active)).to.eql(result1);
    expect(partition(collection, value => value.age < 30)).to.eql(result2);
  });

  it('WHEN array contains many items and a predicate THEN should return appropriate sub arrays', function() {

    const collection = [
      {
        name: 'Francis',
        age: '55',
        active: true
      },
      {
        name: 'Bobby',
        age: '23',
        active: true
      },
      {
        name: 'Jane',
        age: '36',
        active: false
      },
      {
        name: 'Jules',
        age: '44',
        active: false
      },
      {
        name: 'Vanessa',
        age: '18',
        active: false
      }
    ];

    const result1 = [
      [
        {
          name: 'Francis',
          age: '55',
          active: true
        },
        {
          name: 'Bobby',
          age: '23',
          active: true
        }
      ],
      [
        {
          name: 'Jane',
          age: '36',
          active: false
        },
        {
          name: 'Jules',
          age: '44',
          active: false
        },
        {
          name: 'Vanessa',
          age: '18',
          active: false
        }
      ]
    ];

    const result2 = [
      [
        {
          name: 'Bobby',
          age: '23',
          active: true
        },
        {
          name: 'Vanessa',
          age: '18',
          active: false
        }
      ],
      [
        {
          name: 'Francis',
          age: '55',
          active: true
        },
        {
          name: 'Jane',
          age: '36',
          active: false
        },
        {
          name: 'Jules',
          age: '44',
          active: false
        }
      ]
    ];

    expect(partition(collection, value => value.active)).to.eql(result1);
    expect(partition(collection, value => value.age < 30)).to.eql(result2);
  });

});