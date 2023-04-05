jest.mock('../index');

const { CompleteStatus } = require('../index');

describe('Completed Status', () => {
  test('should complete status', () => {
    expect(CompleteStatus({

      discription: 'test description',
      index: 1,
      completed: false,

    })).toStrictEqual(
      [
        {
          discription: 'test description',
          index: 1,
          completed: true,
        },
        {
          discription: 'test description 2',
          index: 2,
          completed: false,
        },
      ],
    );
  });
});