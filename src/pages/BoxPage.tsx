import { Box, Typography } from '@mui/material';
import { CodeBox } from '../shared/components';
import { PageLayout } from '../shared/layouts';

export const BoxPage = () => {
  return (
    <PageLayout title="Box">
      <Typography>
        O componente Box do Material UI é usado para criar contêineres simples e
        flexíveis que podem conter outros componentes ou conteúdo. Ele é
        especialmente útil para criar layouts e definir espaçamentos e
        alinhamentos entre elementos.
      </Typography>

      <Typography>
        O Box é altamente configurável e pode ser usado com diversas
        propriedades para personalizar seu visual e comportamento. Algumas das
        propriedades mais comuns são:
      </Typography>

      <CodeBox
        code="  • component: define o tipo de elemento HTML que será renderizado pelo Box. <br/>
  • sx: define estilos customizados usando a sintaxe do Styled Components. <br/>
  • bgcolor: define a cor de fundo do Box. <br/>
  • padding: define o espaçamento interno do Box. <br/>
  • margin: define o espaçamento externo do Box. <br/>
  • display: define o tipo de display que o Box usará (block, inline, flex, etc.). <br/>
  • alignItems: define o alinhamento vertical dos elementos dentro do Box. <br/>
  • justifyContent: define o alinhamento horizontal dos elementos dentro do Box. <br/>"
        language="javascript"
      ></CodeBox>

      <Typography variant="h5">Centralizando itens com Box</Typography>
      <Typography>
        Aqui está um exemplo de como o Box pode ser usado em aplicações React
        com o Material UI:
      </Typography>

      <CodeBox
        code='// Exemplo de uso do Box para definir margens e alinhamentos
function BoxExample() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="primary.main"
    >
      <Box
        component="span"
        sx={{
          bgcolor: "white",
          borderRadius: "50%",
          width: 100,
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "primary.main",
          fontWeight: "bold",
          fontSize: "2rem",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        MUI
      </Box>
    </Box>
  );
}'
        language="javascript"
      />

      <Typography>Saída:</Typography>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bgcolor="primary.main"
        maxWidth="440px"
        maxHeight="400px"
      >
        <Box
          component="span"
          sx={{
            bgcolor: 'white',
            borderRadius: '50%',
            width: 100,
            height: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'primary.main',
            fontWeight: 'bold',
            fontSize: '2rem',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          MUI
        </Box>
      </Box>

      <Typography>
        Neste exemplo o Box é usado para criar um layout centralizado com uma
        caixa de texto personalizada.
      </Typography>

      <Typography variant="h5">Criando Layout responsivo com Grid</Typography>
      <Typography>
        Aqui está um exemplo de como o Box pode ser usado em aplicações React
        com o Material UI:
      </Typography>

      <CodeBox
        code='// Exemplo de uso do Box para criar um layout responsivo com grid
function GridExample() {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        <Typography variant="h5">Caixa 1</Typography>
      </Box>
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        <Typography variant="h5">Caixa 2</Typography>
      </Box>
    </Box>
  );
}'
        language="javascript"
      />

      <Typography>Saída:</Typography>

      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Typography variant="h5">Caixa 1</Typography>
        </Box>
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Typography variant="h5">Caixa 2</Typography>
        </Box>
      </Box>

      <Typography>
        Neste exemplo o Box é usado para criar um layout responsivo com grid.
      </Typography>
    </PageLayout>
  );
};
