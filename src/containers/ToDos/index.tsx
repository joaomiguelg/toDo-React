import Task from "../../components/Task";

import * as S from './styles'

import * as enums from '../../utils/enums/Task'

const tasks = [
  {
    title: 'estudar react',
    priority: enums.Priority.URGENTE,
    status: enums.Status.PENDENTE,
    descrition: 'esudar react exercico 16'
  },
  {
    title: 'estudar java',
    priority: enums.Priority.IMPORTANTE,
    status: enums.Status.PENDENTE,
    descrition: 'esudar java exercico 16'
  },
  {
    title: 'estudar node',
    priority: enums.Priority.NORMAL,
    status: enums.Status.CONCLUIDO,
    descrition: 'esudar node exercico 20'
  }
]

const ToDos = () => {
  return (
    <S.Container>
      <p>2 tarefas marcadas como: 'categoria' e 'termo'</p>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task description={t.descrition} title={t.title} status={t.status} priority={t.priority} />
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default ToDos;
