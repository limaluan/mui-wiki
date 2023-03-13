import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { CodeBox } from '../shared/components';
import { PageLayout } from '../shared/layouts';

export const DrawerPage = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <PageLayout title="Drawer">
      <Typography>
        O Drawer é um componente que fornece uma caixa de diálogo de navegação
        lateral que é normalmente usada para mostrar menus de navegação ou
        opções de filtragem. Ele é renderizado na lateral da página e pode ser
        aberto e fechado clicando em um botão ou ícone.
      </Typography>
      <Typography>
        O Drawer pode ser personalizado com vários tipos de propriedades, como
        <i>variant</i> (para escolher o estilo do Drawer), <i>anchor</i> (para
        escolher em que lado da página ele aparecerá), <i>open</i> (para definir
        se o Drawer será inicialmente aberto ou fechado), <i>onClose</i> (para
        definir uma função que será executada quando o Drawer for fechado),
        entre outras.
      </Typography>
      <Typography>
        Aqui está um exemplo básico de como usar o Drawer:
      </Typography>
      <CodeBox
        code='import { useState } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleDrawerOpen}>Abrir Drawer</button>
      <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
        <List>
          <ListItem>
            <ListItemText primary="Página inicial" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Sobre nós" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Contato" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default App;
'
        language="javascript"
      />
      <Typography>Saída:</Typography>
      <div>
        <button onClick={handleDrawerOpen}>Abrir Drawer</button>
        <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
          <List>
            <ListItem>
              <ListItemText primary="Página inicial" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Sobre nós" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Contato" />
            </ListItem>
          </List>
        </Drawer>
      </div>

      <Typography>
        Neste exemplo, o Drawer é aberto e fechado quando o botão é clicado. Ele
        é exibido na lateral esquerda da página e contém uma lista de itens de
        menu. Quando um item de menu é clicado, a página correspondente é
        exibida. Quando o Drawer é fechado, a função <i>handleDrawerClose</i> é
        chamada.
      </Typography>
    </PageLayout>
  );
};
