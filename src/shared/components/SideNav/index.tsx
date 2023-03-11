import {
  Divider,
  Drawer,
  Input,
  Link,
  Typography,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

interface ISideNavProps {
  children: React.ReactNode;
}

interface ISideNavItem {
  title: string;
  subItems: string[];
}

export const SideNav = ({ children }: ISideNavProps) => {
  const theme = useTheme();

  const [search, setSearch] = useState('');

  const sidenavItems: ISideNavItem[] = [
    { title: 'PERSONALIZAÇÃO', subItems: ['Temas'] },
    { title: 'ELEMENTOS', subItems: ['Box', 'Mates'] },
  ];

  return (
    <>
      <Drawer variant="permanent">
        <Box width={theme.spacing(28)} display="flex" flexDirection="column">
          <Box
            width="100%"
            height={theme.spacing(14)}
            paddingY={theme.spacing(2)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img
              height="100%"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
            />
          </Box>

          <Divider />
        </Box>

        {/* Aqui ficará as páginas para navegação e barra de pesquisa */}
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          gap={theme.spacing(1)}
        >
          <Input
            placeholder="Pesquisar..."
            style={{ width: '80%', margin: theme.spacing(1) + ' auto' }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Estudar possível Melhoria */}
          {sidenavItems
            ?.filter((item) => {
              return search.toLowerCase() === ''
                ? item
                : item.subItems.find((subItem) =>
                    subItem.toLowerCase().includes(search.toLowerCase())
                  );
            })
            .map((item) => (
              <>
                <Typography
                  style={{ cursor: 'default' }}
                  fontWeight="700"
                  color={theme.palette.secondary.main}
                  marginLeft={theme.spacing(2)}
                >
                  {item.title}
                </Typography>
                {item.subItems.map((item) => (
                  <Link
                    href="#"
                    underline="hover"
                    width="fit-content"
                    color={theme.palette.primary.main}
                  >
                    <Typography marginLeft={theme.spacing(2.5)}>
                      {item}
                    </Typography>
                  </Link>
                ))}
              </>
            ))}
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
