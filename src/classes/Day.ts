import { z } from "zod"

class Day {
    readonly date: Date

    constructor(
        readonly day: string,
        readonly image: string,
        readonly message: string,
        readonly href: string | null
    ) {
        this.date = z.coerce.date().parse(day)
    }
}

export default Day