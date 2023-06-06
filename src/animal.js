/**
 * Represents the animals on the ZooJS.
 * They receive a specie and an animalSound to be created.
 */
class Animal {
  constructor({ specie, animalSound }) {
    this.specie = specie;
    this.animalSound = animalSound;
  }

  /**
   * speak receives a phrase and returns it interspersed with the anial sound.
   * @param {String} phrase the phrase to intersperse.
   * @returns the interspersed phrase.
   */
  speak(phrase) {
    // TODO: add boder cases

    return phrase.split(' ') // ['Lions', 'suck']
      .map((word) => `${word} ${this.animalSound}`) // ['Lions grrr', 'suck grrr']
      .join(' '); // 'Lions grrr' + ' ' + 'suck grrr'
  }
}

module.exports = { Animal };
