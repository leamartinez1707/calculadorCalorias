import { useReducer, useEffect, useMemo } from 'react'
import Form from "./components/Form"
import { activityReducer, initialState } from './reducers/activityReducer'
import ActivitiesList from './components/ActivitiesList'
function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  const canRestartApp = () => useMemo(() => state.activities.length, [state.activities])

  return (
    <>
      <header className="bg-amber-400 py-4">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase ml-4">
            Contador de calorias
          </h1>
          <button
            className='bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-20'
            disabled={!canRestartApp()}
            onClick={() => dispatch({ type: 'restart-app' })}
          >
            Reiniciar App
          </button>
        </div>
      </header>

      <section className="bg-amber-300 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <p className="text-3xl font-bold">Formulario</p>
          <Form
            dispatch={dispatch}
            state={state}
          />
        </div>
      </section>
      <section className='p-10 mx-auto max-w-4xl'>
        <ActivitiesList
          activities={state.activities}
          dispatch={dispatch}
        />

      </section>
    </>
  )
}

export default App
