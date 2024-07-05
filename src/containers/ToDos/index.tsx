import { useSelector } from "react-redux";
import Task from "../../components/Task";
import * as S from './styles'
import { RootReducer } from "../../store";

const ToDos = () => {
  const {itens} = useSelector((state: RootReducer) => state.tasks)
  const { term } = useSelector((state: RootReducer) => state.filter)

  const filterTasks = () => {
    return itens.filter((iten) => iten.title.toLowerCase().search(term.toLowerCase()) >= 0)
  }
  return (
    <S.Container>
      <p>2 tarefas marcadas como: 'categoria' e {term}</p>
      <ul>
        {filterTasks().map((t) => (
          <li key={t.title}>
            <Task id={t.id} description={t.description} title={t.title} status={t.status} priority={t.priority} />
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default ToDos;
