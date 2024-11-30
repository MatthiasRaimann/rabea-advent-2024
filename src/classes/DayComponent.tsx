import classes from './../styling/Day.module.css'
import { useState } from "react"
import Day from './Day'

export function DayComponent({ day, isLocked }: { day: Day, isLocked: boolean }): JSX.Element {
    const [isTurned, turn] = useState(false)

    return <>
        <div
            className={`${classes.day} ${isTurned ? classes.flipped : ''}`}
            onClick={tryTurn}
            style={{
                backgroundImage: isTurned
                    ? `url("https://cdn.pixabay.com/photo/2021/11/17/11/35/christmas-border-6803348_1280.png")`
                    : `url(${day.image})`,
                backgroundColor: 'white'
            }}
        >
            <span className={classes.date}>{day.date.getDate()}</span>
            <div className={classes.isFlipped}>
                {
                    isTurned
                        ? <>
                            {
                                day.href === null
                                    ? <span>{day.message}</span>
                                    : <a target='_blank' rel="noreferrer" href={day.href}>{day.message}</a>
                            }
                        </>
                        : null
                }
            </div>
        </div >
    </>

    function tryTurn() {
        if (isTurned === true) return turn(false)
        // turn(true)
        return isLocked ? 0 : turn(true)
    }
}