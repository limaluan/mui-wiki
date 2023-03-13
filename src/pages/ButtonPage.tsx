import { Button, TextField, Typography } from '@mui/material';
import { CodeBox } from '../shared/components';
import { PageLayout } from '../shared/layouts';

export const ButtonPage = () => {
  return (
    <PageLayout title="Button">
      <Typography>
        O Button é um dos componentes mais utilizados no Material UI, ele é
        utilizado para criar botões clicáveis que executam ações quando
        pressionados.
      </Typography>
      <Typography>
        O componente Button do MUI possui várias propriedades que podem ser
        utilizadas para personalizar sua aparência e comportamento. Algumas das
        principais propriedades incluem:
      </Typography>
      <CodeBox
        code="• variant: Define o estilo do botão. Pode ser contained (estilo de botão preenchido), outlined (borda sólida e texto dentro) ou text (apenas texto);
• color: Define a cor do botão. Pode ser primary, secondary, error, warning, info ou success. Você também pode definir uma cor personalizada;
• disabled: Define se o botão está desativado;
• onClick: Define a função que será executada quando o botão for pressionado;
• size: Define o tamanho do botão. Pode ser small, medium ou large;
• startIcon e endIcon: Define um ícone que será exibido antes ou depois do texto do botão."
        language="javascript"
      />
      <Typography>
        Aqui está um exemplo prático do uso do Button do Material UI em um
        formulário para enviar os dados preenchidos. <br /> Veja o exemplo
        abaixo:
      </Typography>
      <CodeBox
        code='import { Button, TextField } from "@mui/material";

  <form
  onSubmit={(e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    alert("Nome: " + data.get("name"));
    alert("Email: " + data.get("email"));
  }}
>
  <TextField
    name="name"
    label="Name"
    variant="outlined"
    fullWidth
    margin="normal"
  />
  <TextField
    name="email"
    label="Email"
    variant="outlined"
    fullWidth
    margin="normal"
  />
  <Button variant="contained" type="submit">
    Submit
  </Button>
</form>
'
        language="javascript"
      />
      <Typography>Saída:</Typography>

      <form
        style={{maxWidth: "440px"}}
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          alert('Nome: ' + data.get('name'));
          alert('Email: ' + data.get('email'));
        }}
      >
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </PageLayout>
  );
};
