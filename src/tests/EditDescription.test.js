jest.mock('../index');

const { editDescription } = require('../index');

describe('Edit Description', () => {
  test('should edit description', () => {
    expect(editDescription({

      discription: 'test description',
      index: 1,
      completed: false,

    }, 'test description updated')).toStrictEqual(
      [
        {
          discription: 'test description updated',
          index: 1,
          completed: false,
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