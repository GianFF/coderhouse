const { Animal } = require('../src/animal');

describe('Anmial', () => {
  let kitten;

  beforeEach(() => {
    kitten = new Animal({ specie: 'Cat', animalSound: 'miau' });
  });

  test('an animal has a specie', () => {
    expect(false).toEqual(true);
  });

  test('an animal has a animal sound', () => {
    expect(false).toEqual(true);
  });

  describe('An animal can speak', () => {
    test('given a phrase, they interprese it with their animal sound', () => {
      expect(false).toEqual(true);
    });
  
    test('given an empty phrase, they do not say anything', () => {
      expect(false).toEqual(true);
    });

    test('given no phrase, they do not say anything', () => {
      expect(false).toEqual(true);
    });

    test('given a blank phrase, they repeat their animal sound', () => {
      expect(kitten.speak(' ')).toEqual(' miau  miau');
    });
  });
});
