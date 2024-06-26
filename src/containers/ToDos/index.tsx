import Task from "../../components/Task";

import * as S from './styles'

const tasks = [
  {
    title: 'estudar react',
    priority: 'importante',
    status: 'concluido',
    descrition: 'esudar react exercico 16'
  },
  {
    title: 'estudar java',
    priority: 'importante',
    status: 'concluido',
    descrition: 'esudar java exercico 16'
  },
  {
    title: 'estudar node',
    priority: 'importante',
    status: 'pendente',
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
