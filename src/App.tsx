import { useEffect, useMemo } from "react"
import Form from "./components/Form"
import ActivitiesList from './components/ActivitiesList'
import CalorieTracker from './components/CalorieTracker'
import { useActivity } from "./hooks/useActivity"
function App() {

  const { state, dispatch } = useActivity()

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  const canRestartApp = () => useMemo(() => state.activities.length, [state.activities])

  return (
    <>
      <header className="bg-amber-400 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-xl font-bold text-white uppercase ml-4">
            Contador de calorias
          </h1>
          <button
            className='bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-20 disabled:cursor-not-allowed'
            disabled={!canRestartApp()}
            onClick={() => dispatch({ type: 'restart-app' })}
          >
            Reiniciar datos
          </button>
        </div>
      </header>

      <section className="bg-amber-300 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <p className="text-3xl font-bold">Formulario</p>
          <Form
          />
        </div>
      </section>

      <section className='bg-gray-800 py-10'>
        <div className='max-w-4xl mx-auto'>
          <CalorieTracker
          />
        </div>
      </section>

      <section className='p-10 mx-auto max-w-4xl'>
        <ActivitiesList
        />
      </section>
    </>
  )
}

export default App
