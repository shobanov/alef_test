export const initialState = {
  personName: '',
  personAge: '',
  childrenData: []
};

export const formReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'SAVE-DATA':
      const newState = action.payload
      return {
        ...state,
        personName: newState.personName,
        personAge: newState.personAge,
        childrenData: newState.childrenData
      };
    default:
      return state;
  };
};

// action
export const saveDataAC = (payload: initialStateType) => ({ type: 'SAVE-DATA', payload } as const);

// types
type ActionsType = ReturnType<typeof saveDataAC>;

export type DataType = {
  name: string;
  age: string;
};

export type initialStateType = {
  personName: string;
  personAge: string;
  childrenData: DataType[];
};