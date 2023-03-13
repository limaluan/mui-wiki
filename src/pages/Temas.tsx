import { Typography } from '@mui/material';
import { CodeBox } from '../shared/components';
import { PageLayout } from '../shared/layouts';

export const Temas = () => {
  return (
    <PageLayout title="Temas no MUI">
      <Typography variant="h5">O que são os Temas?</Typography>
      <Typography>
        No Material-UI, os temas são um recurso que permite personalizar a
        aparência do seu aplicativo da web. Um tema consiste em um conjunto de
        valores que definem a aparência de diferentes componentes do
        Material-UI. <br /> Com a ajuda dos temas, você pode aplicar uma
        aparência consistente em todo o seu aplicativo da web, independentemente
        de quais componentes você esteja usando.
      </Typography>

      <Typography variant="h5">Conceito</Typography>
      <Typography>
        Os temas no Material-UI são criados usando o componente ThemeProvider.
        Este componente é responsável por injetar o tema em toda a árvore de
        componentes do seu aplicativo. Ele recebe um objeto de tema como uma
        propriedade e, em seguida, passa esse tema para todos os seus
        componentes filhos.
      </Typography>

      <Typography>
        Um objeto de tema no Material-UI é uma estrutura de objeto que contém
        valores para diferentes propriedades de estilo. Por exemplo, você pode
        definir a cor primária do seu aplicativo, a cor secundária, a fonte
        padrão, o tamanho do texto e outras propriedades.
        <br />
        Aqui está um exemplo de um objeto de tema básico:
      </Typography>

      <CodeBox
        code="import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3f51b5',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
  },
});
"
        language="javascript"
      ></CodeBox>

      <Typography>
        Neste exemplo, o objeto de tema define a cor primária e secundária
        usando o palette, define a fonte padrão para Roboto e define o tamanho
        do texto para 16. Este objeto de tema pode ser passado para o componente
        ThemeProvider para ser usado em todo o aplicativo.
      </Typography>

      <Typography>
        Os temas também permitem que você substitua valores específicos em
        diferentes partes do seu aplicativo. Por exemplo, você pode ter um tema
        padrão em todo o aplicativo e, em seguida, substituir a cor primária em
        uma única página ou componente específico. Para fazer isso, basta criar
        um novo objeto de tema que herda as propriedades do tema padrão e, em
        seguida, substituir apenas as propriedades que deseja alterar.
      </Typography>
    </PageLayout>
  );
};
