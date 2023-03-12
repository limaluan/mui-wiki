import { Button, Typography } from '@mui/material';
import { CodeBox } from '../shared/components';
import { PageLayout } from '../shared/layouts';

export const Usando = () => {
  return (
    <PageLayout title="Usando o MUI">
      <Typography variant="h5">Componentes</Typography>

      <Typography>
        Os componentes do Material-UI são construídos com base em uma abordagem
        modular e podem ser facilmente importados e usados em aplicativos React
        existentes. <br /> Além disso, o Material-UI é altamente extensível,
        permitindo que os desenvolvedores personalizem ainda mais os componentes
        e criem novos componentes a partir dos existentes.
      </Typography>

      <Typography variant="h5">Criando seu primeiro componente</Typography>

      <Typography>
        Como exemplo de primeiro componente, vamos renderizar um botão na tela:
      </Typography>

      <CodeBox
        code="import React from 'react';
import { Button } from '@mui/material';

function MyComponent() {
  return (
    <Button variant='contained' color='primary'>
      Meu botão
    </Button>
  );
}

export default MyComponent;"
        language="javascript"
      />

      <Typography>
        Agora utilizando nosso Botão que acabamos de criar, deve ser renderizado
        na tela o Elemento Botão.
      </Typography>

      <Button variant="contained" color="primary" sx={{width: "120px"}}>
        Meu botão
      </Button>
    </PageLayout>
  );
};
