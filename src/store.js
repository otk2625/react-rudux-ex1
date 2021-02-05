// 액션
export const increase = (username) => ({
  type: 'INCREMENT',
  payload: username,
});
export const decrease = () => ({ type: 'DECREMENT' });

export const create = (todo) => ({ type: 'CREATE', todo: todo });
export const toggle = (id) => ({ type: 'TOGGLE', id: id });
export const remove = (id) => ({ type: 'REMOVE', id: id });

// 상태
// const initstate = {
//   username: '홍길동',
//   number: 1,
// };

const initialTodos = [
  {
    id: 1,
    text: '밥먹기',
    done: true,
  },
  {
    id: 2,
    text: '똥누기',
    done: true,
  },
  {
    id: 3,
    text: '공부하기',
    done: false,
  },
  {
    id: 4,
    text: '숙제하기',
    done: false,
  },
];

// 액션의 결과를 걸러냄 (최초값 state = number:0 => action값을 통해 값 변경 리턴)
// const reducer = (state = initstate, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { number: state.number + 1, username: action.payload }; //return 되면그걸 호출한 쪽에서 받는게 아니라 return 되는 순간 ui변경
//     case 'DECREMENT':
//       return { number: state.number - 1 };
//     default:
//       return state;
//   }
// };

const reducer2 = (state = initialTodos, action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export default reducer2;
