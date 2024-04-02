import { useReducer } from 'react'
import Form from "./components/Form"
import { activityReducer, initialState } from './reducers/activityReducer'
import ActivitiesList from './components/ActivitiesList'
function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)
  return (
    <>
      <header className="bg-amber-400 py-4">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase ml-4">
            Contador de calorias
          </h1>
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
