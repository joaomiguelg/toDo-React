import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Task'

type FilterState = {
    term?: string,
    criterion: 'prioridade' | 'status' | 'todas',
    value?: enums.Priority | enums.Status
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
        },
        alterFilter: (state, action: PayloadAction<FilterState>) => {
            state.criterion = action.payload.criterion
            state.value = action.payload.value
        }
    }
})

export const { alterTerm, alterFilter } = filterSlice.actions

export default filterSlice.reducer