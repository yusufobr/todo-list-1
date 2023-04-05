jest.mock('./index');

const { addTodoToList, deleteFromList } = require('./index');

describe('Add and Remove Todo', () => {
  test('should add items', () => {
    expect(addTodoToList(
      {
        discription: 'test description',
        index: 1,
        completed: false,
      },
    )).toStrictEqual([
      {
        discription: 'test description',
        index: 1,
        completed: false,
      },
    ]);
  });

  test('should delete item', () => {
    expect(deleteFromList({
      discription: 'test description',
      index: 1,
      completed: false,
    })).toStrictEqual([]);
  });
});
