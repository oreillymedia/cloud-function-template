const cloudFunction = require('../');

describe('#eventHelloWorld.handler web request no data', () => {
  test('should return Hello World! when event.data.name is null', (done) => {
    const mockEvent = {
      data: {}
    };

    function callback(data) {
      expect(data).toBe('Hello World!');
      done();
    };

    cloudFunction.eventHelloWorld(mockEvent, callback);
  })
})

describe('#eventHelloWorld.handler pubsub request with data', () => {
  test('should return Hello Nurse! when event.data.name is Nurse', (done) => {
    const mockEvent = {
      data: {
          name: 'Nurse'
      }
    };

    function callback(data) {
      expect(data).toBe('Hello Nurse!');
      done();
    };

    cloudFunction.eventHelloWorld(mockEvent, callback);
  })
})
