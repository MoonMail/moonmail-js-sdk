import MoonMail from '../src';

describe('sdk', () => {
  let mm: MoonMail;
  beforeEach(() => {
    mm = new MoonMail({accountId: '12345', contact: {address: 'email@example.com'}});
    mm.request = jest.fn();
  });

  it('should updateContact', () => {
    mm.updateContact({attributes: {foo: 'bar'}, metrics: {count: 1}});
    expect(mm.request).toMatchSnapshot();
  });

  it('should triggerEvent', () => {
    mm.triggerEvent('TestEvent');
    mm.triggerEvent({eventType: 'TestEvent'});
    mm.triggerEvent(['TestEvent1', 'TestEvent2'])
    mm.triggerEvent([{eventType: 'TestEvent1'}, {eventType: 'TestEvent2'}])
    mm.triggerEvent({eventType: 'TestEvent', attributes: {foo: 'bar'}, metrics: {count: 1}})
    expect(mm.request).toMatchSnapshot();
  });
});
