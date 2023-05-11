const some = require('./args_check')

const mockFun = jest.fn(
  (x) => 'Roman',
  (y) => 'Bashtovyi'
)

test('Mock test', () => {
  some.someAction('Roman', 'Bashtovyi', mockFun)
  expect(mockFun.mock.calls[0][0]).toEqual('Roman')
  expect(mockFun.mock.calls[0][1]).toEqual('Bashtovyi')
})
test('Mock test FAILED', () => {
  some.someAction('Roman', 'Bashtovyi', mockFun)
  expect(mockFun.mock.calls[0][0]).not.toEqual('Oleg')
  expect(mockFun.mock.calls[0][1]).not.toEqual('Krash')
})

test('test callbacks', () => {
  expect(some.someAction('Roman', 'Bashtovyi', some.calc)).toEqual('Roman Bashtovyi')
})
