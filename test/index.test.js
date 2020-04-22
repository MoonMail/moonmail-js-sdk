"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var src_1 = tslib_1.__importDefault(require("../src"));
describe('sdk', function () {
    var mm;
    beforeEach(function () {
        mm = new src_1["default"]({ accountId: '12345', contact: { address: 'email@example.com' } });
        mm.request = jest.fn();
    });
    it('should updateContact', function () {
        mm.updateContact({ attributes: { foo: 'bar' }, metrics: { count: 1 } });
        expect(mm.request).toMatchSnapshot();
    });
    it('should triggerEvent', function () {
        mm.triggerEvent('TestEvent');
        mm.triggerEvent({ eventType: 'TestEvent' });
        mm.triggerEvent(['TestEvent1', 'TestEvent2']);
        mm.triggerEvent([{ eventType: 'TestEvent1' }, { eventType: 'TestEvent2' }]);
        mm.triggerEvent({ eventType: 'TestEvent', attributes: { foo: 'bar' }, metrics: { count: 1 } });
        expect(mm.request).toMatchSnapshot();
    });
});
