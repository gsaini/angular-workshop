/*global describe it expect */
describe('addition', function () {
    'use strict';

    it('should return 4 when adding 2 and 2', function () {
        expect(2 + 2).toBe(4);
    });
    
    it('should return 6 when adding 4 and 2', function () {
        expect(4 + 2).toBe(6);
    });
    
    it('should return 8 when adding 6 and 2', function () {
        expect(6 + 2).toBe(8);
    });
});