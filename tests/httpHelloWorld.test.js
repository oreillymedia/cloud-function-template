const cloudFunction = require('../');

describe('#httpHelloWorld.handler web request', () => {
  test('should return 200 status and send Hello World!', (done) => {
    const mockRequest = {
      method: 'GET'
    };

    const mockResponse = {
      status: (code) => {
        expect(code).toEqual(200);
        return {
          send: jest.fn((label) => {
              expect(label).toBe('Hello World!');
              done();
          })
        }
      }
    };
    
    cloudFunction.httpHelloWorld(mockRequest, mockResponse);
  })
})
