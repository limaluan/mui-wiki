import { Container, Typography } from '@mui/material';
import { CodeBox } from '../shared/components';
import { PageLayout } from '../shared/layouts';

export const ContainerPage = () => {
  return (
    <PageLayout title="Container">
      <Typography>
        O componente Container é usado para envolver o conteúdo da página para
        limitar a largura máxima e centralizá-lo na página. Ele tem duas
        variantes, Fixed e Fluid, que determinam se a largura do contêiner é
        fixa ou ajustável.
      </Typography>

      <Typography>Exemplo:</Typography>

      <CodeBox
        code='import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="md" sx={{backgroundColor: "yellow"}}>
      <Typography variant="h1">Meu título</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ut nunc at efficitur.
      </Typography>
    </Container>
  );
}
'
        language="javascript"
      ></CodeBox>

      <Typography>Saída:</Typography>

      <Container maxWidth="md" sx={{ backgroundColor: 'yellow' }}>
        <Typography variant="h1">Meu título</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ut
          nunc at efficitur.
        </Typography>
      </Container>

      <Typography>
        Neste exemplo, o Container está limitado a uma largura máxima de md
        (equivalente a 960px) e todo o conteúdo dentro do contêiner será
        centralizado na página. O contêiner envolve o título e o texto, que são
        componentes <i>Typography</i>. O tamanho do texto pode ser ajustado usando a
        propriedade <i>variant</i>.
      </Typography>
    </PageLayout>
  );
};
