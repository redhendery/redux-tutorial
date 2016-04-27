import {List, Map} from 'immutable';
import {expect} from 'chai';
import {setEntries, next} from '../src/core';

import {setEntries} from '../src/core';

describe('application logic', () => {

  describe('setEntries', () => {

    it('adds the entries to the state', () => {
      const state = Map();
      const entries = List.of('Trainspotting', '28 Days Later');
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }));
    });

    it('converts to immutable', () => {
      const state = Map();
      const entries = ['Trainspotting', '28 Days Later'];
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }));
    });

    desribe('next', () => {
      it('takes the number two entries under vote', () => {
        const state = Map({
          entries: List.of('Trainspotting', '28 Days Later', 'Sunshine')
        });
        const nextState = next(state);
        expect(nextState).to.equal(Map({
          vote: Map({
            pair: List.of('Trainspotting', '28 Days Later')
          }),
          entries: List.of('Sunshine')
        }));
      });
    });

  });

});