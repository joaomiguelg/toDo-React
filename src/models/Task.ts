import * as enums from '../utils/enums/Task'

class Task {

    priority: enums.Priority
    status: enums.Status
    description: string
    title: string
    id: number

    constructor( priority: enums.Priority, status: enums.Status, description: string, title: string, id: number) {
        this.priority = priority
        this.status = status
        this.description = description
        this.title = title
        this.id = id
    }

}

export default Task