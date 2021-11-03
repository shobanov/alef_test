import { InitialValuesType } from "../components/PersonalData/PersonalData";

const initialState = {
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
export const saveDataAC = (payload: InitialValuesType) => ({ type: 'SAVE-DATA', payload } as const);

// types
type ActionsType = ReturnType<typeof saveDataAC>;