import { demoTest } from './demochallenge';

describe('demoTest', () => {
  it('should return "demo"', () => {
    expect(demoTest()).toEqual('demoTest');
  });
});