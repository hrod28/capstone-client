'use strict';
export default function chefReducer(state = [], action){
  switch(action.type) {
    case 'CREATE_CHEF':
      return [...state,
        Object.assign({}, action.chef)
      ];

    default:
      return state;
  }
}
