/* eslint-disable no-case-declarations */
import { useReducer } from "react";

const INPUTACTIONS = {
    INPUT_CHANGE: 'INPUT_CHANGE',
    CLEAR_INPUTS: 'CLEAR_INPUTS',
    SET_DATA: 'SET_DATA',
    INPUT_FOCUS: 'INPUT_FOCUS',
}

const formReducer = (state, action) => {
    switch (action.type) {
        case INPUTACTIONS.INPUT_CHANGE:
         const {name, value, error, hasError, isFormValid, active} = action.data;
         return {
            ...state,
            [name]: {
                value,
                error,
                hasError,
                active,
            },
            isFormValid,
         }
         case INPUTACTIONS.INPUT_FOCUS:
            const {name: inputName, active: inputActive} = action.data;
            return {
                ...state,
                [inputName]: {
                    ...state[inputName],
                    active: inputActive,
                }
            }
        case INPUTACTIONS.CLEAR_INPUTS:
            return action.data;
        default:
            return state;
    }
}


export const useForm = (initialState) => {
    const [formState, dispatchFormState] = useReducer(formReducer, initialState)

    const inputHandler = ({ name, value }) => {
        dispatchFormState({
            type: INPUTACTIONS.INPUT_CHANGE,
            data: {
                name,
                value,
            }
        })
    }
    

    const clearInputs = ({ formState }) => {
        dispatchFormState({
            type: INPUTACTIONS.CLEAR_INPUTS,
            data: formState,
        })
    }

    const inputFocus = ({ name, active }) => {
        dispatchFormState({
            type: INPUTACTIONS.INPUT_FOCUS,
            data: {
                name,
                active,
            }
        })
    }

    return [formState, inputHandler, clearInputs, inputFocus]
};