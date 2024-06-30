import { useSelector } from "react-redux";
import Task from "../../components/Task";
import * as S from './styles'
import { RootReducer } from "../../store";

const ToDos = () => {
  const {itens} = useSelector((state: RootReducer) => state.tasks)
  return (
    <S.Container>
      <p>2 tarefas marcadas como: 'categoria' e 'termo'</p>
      <ul>
        {itens.map((t) => (
          <li key={t.title}>
            <Task id={t.id} description={t.description} title={t.title} status={t.status} priority={t.priority} />
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default ToDos;
