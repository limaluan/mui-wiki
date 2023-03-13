import { Typography } from '@mui/material';
import { PageLayout } from '../shared/layouts';

export const Home = () => {
  return (
    <PageLayout title="Material UI - WiKi">
      <img src="https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png" />
      <Typography>
        O Material UI - WiKi é uma ferramente gratuita e Open Source feita para
        ajudar na prática e estudos dos conceitos e componentes do Framework
        Material UI.
      </Typography>
      <Typography>
        Sinta-se a vontade para contribuir com o código desta aplicação acessando o
        ícone do GitHub no header ou então{' '}
        <a href="https://github.com/limaluan/mui-wiki" target="_blank">
          clicando aqui
        </a>
      </Typography>
    </PageLayout>
  );
};
