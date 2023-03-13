import { Typography } from '@mui/material';
import { PageLayout } from '../shared/layouts';

export const MediaQueries = () => {
  return (
    <PageLayout title="Media Queries">
      <Typography variant="h5">Para que servem?</Typography>

      <Typography>
        Media queries são usados para criar regras de estilo que serão aplicadas
        em diferentes tamanhos de tela. No Material UI, os media queries são
        usados para criar regras de estilo responsivas que se ajustam de acordo
        com o tamanho do dispositivo. O MUI utiliza a biblioteca CSS-in-JS, o
        que permite que as regras de estilo sejam escritas diretamente no código
        do React.
      </Typography>

      <Typography>
        Os media queries do Material UI são implementados por meio de um
        componente chamado useMediaQuery, que recebe um argumento contendo uma
        string com a especificação do tamanho de tela. Por exemplo,
        <code> useMediaQuery('(min-width:600px)')</code> define uma regra de
        estilo que só será aplicada em telas com largura mínima de 600 pixels.
      </Typography>

      <Typography>
        Além disso, o Material UI também possui breakpoints predefinidos que
        podem ser usados para definir as regras de estilo responsivas em
        diferentes tamanhos de tela. Os breakpoints predefinidos são{' '}
        <b>xs, sm, md, lg e xl</b>, que correspondem aos tamanhos{' '}
        <b>extra pequeno, pequeno, médio, grande e extra grande</b>,
        respectivamente. <br /> Por exemplo,{' '}
        <code>theme.breakpoints.up('sm')</code> define uma regra de estilo que
        só será aplicada em telas a partir do tamanho "sm" (pequeno).
      </Typography>

      <Typography>
        O uso dos media queries no Material UI é fundamental para criar
        interfaces responsivas e adaptáveis, que se ajustam automaticamente de
        acordo com o tamanho do dispositivo em que estão sendo exibidas.
      </Typography>
    </PageLayout>
  );
};
