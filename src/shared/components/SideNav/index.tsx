import {
  Divider,
  Drawer,
  Input,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useDrawerContext } from '../../contexts';
import { Link } from 'react-router-dom';

interface ISideNavProps {
  children: React.ReactNode;
}

interface ISideNavItem {
  title: string;
  subItems: string[];
}

export const SideNav = ({ children }: ISideNavProps) => {
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [search, setSearch] = useState('');

  const sidenavItems: ISideNavItem[] = [
    { title: 'INICIANDO', subItems: ['Instalando'] },
    { title: 'ELEMENTOS', subItems: ['Box', 'Mates'] },
  ];

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
        {/* Drawer HEADER */}
        <Box width={theme.spacing(28)} display="flex" flexDirection="column">
          <Box
            width="100%"
            height={theme.spacing(14)}
            paddingY={theme.spacing(2)}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <img
              height="100%"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
            />
            <Typography color={theme.palette.secondary.light}>
              Wiki V1.0.0
            </Typography>
          </Box>

          <Divider />
        </Box>

        {/* Aqui ficará as páginas para navegação e barra de pesquisa */}
        {/* Drawer Body */}
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
            .map((item, index) => (
              <Box
                key={index}
                display="flex"
                flexDirection="column"
                gap={theme.spacing(1)}
              >
                <Typography
                  style={{ cursor: 'default' }}
                  fontWeight="700"
                  color={theme.palette.secondary.main}
                  marginLeft={theme.spacing(2)}
                >
                  {item.title}
                </Typography>
                {item.subItems
                  .filter((subItem) => {
                    return search.toLowerCase() === ''
                      ? subItem
                      : subItem
                          .toLocaleLowerCase()
                          .includes(search.toLowerCase());
                  })
                  .map((item, index) => (
                    <Link
                      to={item.toLowerCase()}
                      key={index}
                      style={{
                        textDecoration: 'none',
                        color: theme.palette.primary.main,
                        width: 'fit-content',
                      }}
                    >
                      <Typography
                        width="fit-content"
                        marginLeft={theme.spacing(2.5)}
                      >
                        {item}
                      </Typography>
                    </Link>
                  ))}
              </Box>
            ))}
        </Box>
      </Drawer>

      {/* Drawer Content */}
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
