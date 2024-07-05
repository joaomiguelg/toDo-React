import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'

import { alterFilter } from '../../store/reducers/filters'
import { RootReducer } from '../../store'

export type Props = {
    subtitle: string
    criterion: 'prioridade' | 'status' | 'todas'
    value?: enums.Priority | enums.Status
}

export const CardFilter = ({subtitle, criterion, value}: Props) => {

  const dispatch = useDispatch()
  const { filter, tasks} = useSelector((state: RootReducer) => state)

  const isActive = () => {

    const equalsCriterion = filter.criterion === criterion
    const equalsValue = filter.value === value

    return equalsCriterion && equalsValue

  }

  const countTasks = () => {
    if(criterion === 'todas') return tasks.itens.length
    if(criterion === 'prioridade') {
      return tasks.itens.filter((iten) => iten.priority === value).length
    }
    if(criterion === 'status') {
      return tasks.itens.filter((iten) => iten.status === value).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterFilter({
        criterion,
        value
      })
    )
}

const active = isActive()
const count = countTasks()

  return (
    <S.Card ativo={active} onClick={filtrar}>
      <S.Contador>{count}</S.Contador>
      <S.Label>{subtitle}</S.Label>
    </S.Card>
  );
};