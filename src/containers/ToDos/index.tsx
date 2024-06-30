import { useSelector } from "react-redux";
import Task from "../../components/Task";
import * as S from './styles'
import { RootReducer } from "../../store";

const ToDos = () => {
  const {tasks} = useSelector((state: RootReducer) => state)
  return (
    <S.Container>
      <p>2 tarefas marcadas como: 'categoria' e 'termo'</p>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task description={t.description} title={t.title} status={t.status} priority={t.priority} />
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default ToDos;
