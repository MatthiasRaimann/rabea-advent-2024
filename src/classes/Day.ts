
class Day {
    readonly date: Date

    constructor(
        readonly day: string,
        readonly image: string,
        readonly message: string,
        readonly href: string | null
    ) {
        const [year, month, date] = day.split('-').map(s => +s)
        this.date = new Date(year, month - 1, date)
    }
}

export default Day