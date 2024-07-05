import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Task'

type FilterState = {
    term: string,
    criterion: 'prioridade' | 'status' | 'todas',
    valor?: enums.Priority | enums.Status
}

const initialState: FilterState = {
    term: '',
    criterion: 'todas'
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        alterTerm: (state, action: PayloadAction<string>) => {
            state.term = action.payload
        }
    }
})

export const { alterTerm } = filterSlice.actions

export default filterSlice.reducer