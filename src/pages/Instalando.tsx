import { Box, Typography } from '@mui/material';
import { CodeBox } from '../shared/components';
import { PageLayout } from '../shared/layouts';

export const Instalacao = () => {
  return (
    <PageLayout title="Instalação">
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography>
          Comece a criar interfaces incríveis e responsivas com o Material UI, a
          biblioteca de componentes mais popular para o React.
          Acelere o
          desenvolvimento do seu projeto com templates pré-construídos e
          customizáveis.
        </Typography>

        <Typography variant="h5">Instalando o Material UI</Typography>

        <Typography>
          Para instalar o Material-UI (MUI) em um projeto React, você precisa
          rodar o seguinte comando no terminal:
        </Typography>

        <CodeBox
          code="npm install @mui/material @emotion/react @emotion/styled"
          language="javascript"
        />

        <Typography>
          Este comando instala as dependências do MUI necessárias para começar a
          trabalhar com os componentes do MUI no seu projeto.
        </Typography>

        <Typography variant="h5">
          Instalando o Material UI com Styled-Components
        </Typography>

        <Typography>
          Para instalar com o Styled-Components, você precisa rodar o seguinte
          comando:
        </Typography>

        <CodeBox
          code="npm install @mui/material @mui/styled-engine-sc styled-components"
          language="javascript"
        />
        
        {/* 
      <CodeBox>
        npm install @mui/material @mui/styled-engine-sc styled-components
      </CodeBox> */}
      </Box>
    </PageLayout>
  );
};
