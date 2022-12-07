/* eslint-disable no-unused-vars */
import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((data) => new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(JSON.parse(data));
        }, 500);
      }));
  }
}
