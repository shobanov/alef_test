import { initialValuesType } from "../components/PersonalData/PersonalData";

const initialState = {};

export const formReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'SAVE-DATA':
      console.log(action.payload.personName)
      return state = action.payload;
    default:
      return state;
  }
};

// action
export const saveDataAC = (payload: initialValuesType) => ({ type: 'SAVE-DATA', payload } as const);

// types
type ActionsType = ReturnType<typeof saveDataAC>;