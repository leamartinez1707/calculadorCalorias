

type CalorieDisplayProps = {
    calories: number,
    text: string
}

export default function CalorieDisplay({ calories, text }: CalorieDisplayProps) {
    return (
        <p className="font-bold rounded-full gap-3 grid grid-cols-1 text-white text-center">
            <span className="font-black text-6xl text-orange">
                {calories}
            </span>
            {text}
        </p>
    )
}
