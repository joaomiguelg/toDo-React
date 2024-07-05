import { CardFilter } from "../../components/CardFilters";
import { Input } from "../../components/Input";
import * as S from "./styles";

const SideBar = () => {
  

  return (
    <S.Aside>
      <div>
        <Input />
        <S.FiltersContainer>
            <CardFilter subtitle='pendentes' count={1} />
            <CardFilter subtitle='concluídas' count={2}/>
            <CardFilter subtitle='urgentes' count={3} />
            <CardFilter subtitle='importantes' count={4}/>
            <CardFilter subtitle='normal' count={5}/>
            <CardFilter subtitle='todas' count={10} ativo/>
        </S.FiltersContainer>
      </div>
    </S.Aside>
  );
};

export default SideBar;
