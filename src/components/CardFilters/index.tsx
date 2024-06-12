import * as S from './styles'

export type Props = {
    ativo?: boolean
}

export const CardFilter = (props: Props) => {
  return (
    <S.Card ativo={props.ativo}>
      <S.Contador>3</S.Contador>
      <S.Label>Pendentes</S.Label>
    </S.Card>
  );
};
