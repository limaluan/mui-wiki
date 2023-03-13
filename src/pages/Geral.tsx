import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { CodeBox } from '../shared/components';
import { PageLayout } from '../shared/layouts';

import AbcIcon from '@mui/icons-material/Abc';

export const Geral = () => {
  const theme = useTheme();

  return (
    <PageLayout title="Visão Geral">
      <Typography variant="h5">Conceitos</Typography>
      <Typography>
        O layout do Material UI é construído com uma grade (grid system) baseada
        em <b>flexbox</b>, que permite uma organização responsiva e consistente
        dos componentes na página.
      </Typography>

      <Typography variant="h5">Grids</Typography>
      <Typography>
        A Grid do Material UI utiliza um sistema de <b>12 colunas</b> e é
        possível utilizar diferentes tamanhos de colunas para criar layouts
        flexíveis. Por exemplo, para criar uma barra de navegação com uma logo à
        esquerda e links à direita, pode-se utilizar a seguinte estrutura:
      </Typography>

      <CodeBox
        code='<Grid container alignItems="center" bgcolor="blue">
  <Grid item xs={2}>
    <Typography color="#fff" component="h5">Logo</Typography>
  </Grid>

  <Grid item xs={10}>
    <Box display="flex" justifyContent="flex-end">
      <Link>Ínicio</Link>
      <Link>Contato</Link>
      <Link>GitHub</Link>
    </Box>
  </Grid>
</Grid>
'
        language="javascript"
      ></CodeBox>

      <Typography>Saída:</Typography>

      <Grid
        container
        maxWidth="440px"
        alignItems="center"
        bgcolor={theme.palette.primary.main}
      >
        <Grid item xs={2}>
          <Typography color="#fff" component="h5">
            Logo
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Box display="flex" justifyContent="flex-end" gap={2}>
            <Link color="#fff">Ínicio</Link>
            <Link color="#fff">Contato</Link>
            <Link color="#fff">GitHub</Link>
          </Box>
        </Grid>
      </Grid>

      <Typography>
        Nesse exemplo, o container com a propriedade '
        <b>alignItems="center" </b>' centraliza verticalmente os elementos
        filho. <br /> O primeiro Grid item com a propriedade '<b>xs={2}</b>'
        ocupa <b>2</b> das <b>12</b> colunas disponíveis, enquanto o segundo
        Grid item com '<b>xs={10}</b>' ocupa as outras <b>10</b> colunas
        restantes.
      </Typography>

      <Typography variant="h5">Grid com Formulários</Typography>

      <Typography>
        Outro exemplo é a criação de um formulário com campos de entrada de
        texto. Pode-se utilizar o seguinte código como base:
      </Typography>

      <CodeBox
        code='<Grid container spacing={2}>
  <Grid item xs={12}>
    <TextField label="Nome" fullWidth />
  </Grid>
  <Grid item xs={12}>
    <TextField label="Email" type="email" fullWidth />
  </Grid>
  <Grid item xs={12}>
    <TextField label="Senha" type="password" fullWidth />
  </Grid>
  <Grid item xs={12}>
    <Button variant="contained" color="primary">Enviar</Button>
  </Grid>
</Grid>'
        language="javascript"
      ></CodeBox>

      <Typography>Saída:</Typography>

      <Grid container spacing={2} maxWidth="440px">
        <Grid item xs={12}>
          <TextField label="Nome" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Email" type="email" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Senha" type="password" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Enviar
          </Button>
        </Grid>
      </Grid>

      <Typography>
        Nesse exemplo, o container possui a propriedade '<b>spacing={2}</b>'
        para criar um espaçamento de <b>2</b> unidades entre os elementos filho.{' '}
        <br /> Cada Grid item ocupa as <b>12 colunas</b> disponíveis, e dentro
        deles há um componente TextField para entrada de texto e um botão de
        envio Button. <br /> A propriedade <b>fullWidth</b> faz com que os
        campos de texto ocupem todo o espaço disponível em seu contêiner.
      </Typography>
    </PageLayout>
  );
};
