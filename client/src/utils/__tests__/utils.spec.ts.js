import {componentHandler, formatDate, getAgentName} from '../index';

describe('Utils tests', () => {
  describe('getAgentName: ', () => {
    test('pass 2 arguments', () => {
      expect(getAgentName('x', 'y')).toEqual('x y');
    });
    test('pass 1 argument', () => {
      expect(getAgentName('x')).toEqual('x');
    });
    test('pass 1 argument as string and second as null', () => {
      expect(getAgentName('x', null)).toEqual('x');
    });
    test('pass 1 argument as null and second as string', () => {
      expect(getAgentName(null, 'y')).toEqual('y');
    });
    test('pass 2 arguments as null', () => {
      expect(getAgentName(null, null)).toEqual(null);
    });
  });
  describe('formatDate: ', () => {
    test('returns en-US format', () => {
      expect(formatDate(new Date(2000, 1, 1, 1, 1, 1))).toEqual('2/1/2000, 1:01:01 AM');
    });
  });
  describe('componentHandler: ', () => {
    test('return passed data if passed a string', () => {
      expect(componentHandler('x')).toEqual('x');
    });
    test('return passed data if passed an object', () => {
      expect(componentHandler({x: 1})).toEqual({x: 1});
    });
    test('return passed data if passed an array', () => {
      expect(componentHandler([1])).toEqual([1]);
    });
    test('execute argument if it is function', () => {
      expect(componentHandler(() => 1)).toEqual(1);
    });
  });
});
