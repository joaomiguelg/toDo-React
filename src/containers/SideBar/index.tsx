import { useNavigate } from "react-router-dom";

import { CardFilter } from "../../components/CardFilters";
import { Input } from "../../components/Input";
import * as S from "./styles";
import * as enums from '../../utils/enums/Task'
import { Button } from "../../components/Task/styles";



type Props = {
  showFilters: boolean
}



const SideBar = ({showFilters}: Props) => {

  const navigate = useNavigate()
  

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
          <Input />
        <S.FiltersContainer>
            <CardFilter value={enums.Status.PENDENTE} criterion="status" subtitle="Pendentes" />
            <CardFilter value={enums.Status.CONCLUIDO} criterion="status" subtitle="Concluídas"/>
            <CardFilter value={enums.Priority.URGENTE} criterion="prioridade"  subtitle="Urgentes" />
            <CardFilter value={enums.Priority.IMPORTANTE} criterion="prioridade" subtitle="Importantes"/>
            <CardFilter value={enums.Priority.NORMAL} criterion="prioridade" subtitle="Normal"/>
            <CardFilter criterion='todas' subtitle="Todas"/>
        </S.FiltersContainer>
          
          </>
        ): (
          <Button onClick={() => navigate('/')}>Voltar a lista de tarefas</Button>
        )}
        
      </div>
    </S.Aside>
  );
};

export default SideBar;
