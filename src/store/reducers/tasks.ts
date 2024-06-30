import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Task from "../../models/Task";
import * as enums from '../../utils/enums/Task'

const SliceTasks = createSlice({
    name: 'tasks',
    initialState: {
        itens: [
            new Task(enums.Priority.URGENTE, enums.Status.PENDENTE, 'estudar react', 'estudar react', 1 ),
            new Task(enums.Priority.NORMAL, enums.Status.CONCLUIDO, 'estudar node', 'estudar node', 2 ),
            new Task(enums.Priority.IMPORTANTE, enums.Status.PENDENTE, 'estudar ts', 'estudar ts', 3 ),
    
    
        ],
    },
    reducers: {
        remove: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter(tarefa => tarefa.id !== action.payload)
        }
    }
})

export const { remove } = SliceTasks.actions

export default SliceTasks.reducer