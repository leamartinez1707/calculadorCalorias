import { useMemo, Dispatch } from "react"
import { Activity } from "../types"
import { categories } from "../data/categories"
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { ActivityActions } from "../reducers/activityReducer"

type ActivitiesListProps = {
    activities: Activity[],
    dispatch: Dispatch<ActivityActions>

}

export default function ActivitiesList({ activities, dispatch }: ActivitiesListProps) {

    const categoryName = useMemo(() =>
        (category: Activity['category']) => categories.map(cat => cat.id === category ? cat.name : '')
        , [activities])
    return (
        <>
            <h2 className="text-center text-4xl font-bold text-slate-600">Comida y Actividades:</h2>
            {activities.length === 0 ? <p className="text-center my-5">No hay actividades aún!</p> :

                activities.map(act => (
                    <div
                        className="px-5 py-10 bg-white mt-5 flex justify-between"
                        key={act.id}>
                        <div className="py-2 relative">
                            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${act.category === 1 ? 'bg-amber-400' : 'bg-orange-500'}`}>{categoryName(+act.category)}</p>
                            <p className="text-2xl font-bold pt-5">{act.name}</p>
                            <p className="font-black text-4xl text-amber-400">
                                {act.calories}{' '}
                                <span>Calorias</span>
                            </p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <button
                                onClick={() => dispatch({ type: "set-activeId", payload: { id: act.id } })}
                            >
                                <PencilSquareIcon
                                    className="size-8 text-gray-700"
                                />
                            </button>
                            <button
                                onClick={() => dispatch({ type: "delete-activity", payload: { id: act.id } })}
                            >
                                <XCircleIcon
                                    className="size-8 text-red-500"
                                />
                            </button>
                        </div>
                    </div>
                ))

            }
        </>
    )
}
