import * as React from 'react'
import produce from 'immer'

const StateContext = React.createContext()
const DispatchContext = React.createContext()

const initialState = {
  formData: {},
}

const reducer = produce((draft, action) => {
  switch (action.type) {
    case 'FORM_DATA': {
      draft.formData = action.payload
      break
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
})

function Provider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

function useState() {
  const context = React.useContext(StateContext)
  if (context === undefined) {
    throw new Error('useState must be used within a Provider')
  }
  return context
}

function useDispatch() {
  const context = React.useContext(DispatchContext)
  if (context === undefined) {
    throw new Error('useDispatch must be used within a Provider')
  }
  return context
}

export {
  Provider as FormProvider,
  useState as useFormState,
  useDispatch as useFormDispatch,
}
