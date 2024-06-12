import { CardFilter } from "../../components/CardFilters";
import { Input } from "../../components/Input";
import * as S from "./styles";

const SideBar = () => {
  return (
    <S.Aside>
      <div>
        <Input />
        <S.FiltersContainer>
            <CardFilter />
            <CardFilter />
            <CardFilter />
            <CardFilter />
            <CardFilter />
            <CardFilter ativo/>
        </S.FiltersContainer>
      </div>
    </S.Aside>
  );
};

export default SideBar;
