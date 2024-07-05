import { useSelector } from "react-redux";
import Task from "../../components/Task";
import * as S from "./styles";
import { RootReducer } from "../../store";

const ToDos = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks);
  const { term, criterion, value } = useSelector(
    (state: RootReducer) => state.filter
  );

  const filterTasks = () => {
    let tasksFiltered = itens;
    if (term !== undefined) {
      tasksFiltered = tasksFiltered.filter(
        (iten) => iten.title.toLowerCase().search(term.toLowerCase()) >= 0
      );

      if (criterion === "prioridade") {
        tasksFiltered = tasksFiltered.filter((item) => item.priority === value);
      } else if (criterion === "status") {
        tasksFiltered = tasksFiltered.filter((iten) => iten.status === value);
      }
      return tasksFiltered;
    } else {
      return itens;
    }
  };

  const showResult = (quant: number) => {

    let message = ''

    if (criterion === 'todas') {
      message =`${quant} Tarefa(s) encontrada(s) como: todas ${
        term !== undefined && term.length > 0 ? `e "${term}"` : ''}`
      } else {
        message = `${quant} Tarefa(s) encontrada(s) como: "${`${criterion}: ${value}`}" ${
          term !== undefined && term.length > 0 ? `e "${term}"` : ''
      }`
    } return message
  }

  const tasks = filterTasks()
  const message = showResult(tasks.length)
  return (
    <S.Container>
      <S.Result>{message}</S.Result>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
              id={t.id}
              description={t.description}
              title={t.title}
              status={t.status}
              priority={t.priority}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default ToDos;
