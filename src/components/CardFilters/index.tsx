import * as S from './styles'

export type Props = {
    ativo?: boolean
    count: number
    subtitle: string
}

export const CardFilter = ({ativo, count, subtitle}: Props) => {
  return (
    <S.Card ativo={ativo}>
      <S.Contador>{count}</S.Contador>
      <S.Label>{subtitle}</S.Label>
    </S.Card>
  );
};
