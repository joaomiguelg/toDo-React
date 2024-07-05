import { CardFilter } from "../../components/CardFilters";
import { Input } from "../../components/Input";
import * as S from "./styles";
import * as enums from '../../utils/enums/Task'

const SideBar = () => {
  

  return (
    <S.Aside>
      <div>
        <Input />
        <S.FiltersContainer>
            <CardFilter value={enums.Status.PENDENTE} criterion="status" subtitle="Pendentes" />
            <CardFilter value={enums.Status.CONCLUIDO} criterion="status" subtitle="Concluídas"/>
            <CardFilter value={enums.Priority.URGENTE} criterion="prioridade"  subtitle="Urgentes" />
            <CardFilter value={enums.Priority.IMPORTANTE} criterion="prioridade" subtitle="Importantes"/>
            <CardFilter value={enums.Priority.NORMAL} criterion="prioridade" subtitle="Normal"/>
            <CardFilter criterion='todas' subtitle="Todas"/>
        </S.FiltersContainer>
      </div>
    </S.Aside>
  );
};

export default SideBar;
