const initialState: InitialStateType = {
  personalData: {
    name: '',
    age: 0
  },
  childrenData: []
}

export const formReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SAVE-PERSONAL-DATA': 
      return state;
    case 'ADD-CHILD':
      const oldArray = state.childrenData
      return {
        ...state,
        childrenData: [...oldArray, action.payload]
      }
    case 'REMOVE-CHILD':
      return {
        ...state,
        childrenData: action.payload
      }   
    case 'SAVE-CHILDREN-DATA': 
      return state; 
    default:
      return state;
  }
};

// action
export const savePersonalDataAC = (name: string, age: number) => ({ type: 'SAVE-PERSONAL-DATA', name, age} as const);
export const addChildAC = (payload: ChildrenDataType) => ({ type: 'ADD-CHILD', payload } as const);
export const removeChildAC = (payload: ChildrenDataType[]) => ({ type: 'REMOVE-CHILD', payload } as const);
export const saveChildrenDataAC = (id: string, name: string, age: number) => ({ type: 'SAVE-CHILDREN-DATA', id, name, age } as const);

// types
type ActionsType = ReturnType<typeof saveChildrenDataAC | typeof savePersonalDataAC | typeof addChildAC | typeof removeChildAC>;

export type InitialStateType = {
  personalData: PersonalDataType;
  childrenData: Array<ChildrenDataType>;
}

type PersonalDataType = {
  name: string;
  age: number;
};

export type ChildrenDataType = {
  name: string;
  age: number;
  id: string;
};
