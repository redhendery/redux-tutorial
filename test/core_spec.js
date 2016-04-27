import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setEntries} from '../src/core';

describe('application logic', () => {
  const state = Map();
  const entries = List.of('Trainspotting', '28 Days Later');
  const nextEntries = setEntries(state, entries);
  expect(nextState).to.equal(Map({
    entries: List.of('Trainspotting', '28 Days Later')
  }));
});