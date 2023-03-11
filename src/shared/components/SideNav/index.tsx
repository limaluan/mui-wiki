import { Divider, Drawer, useTheme } from '@mui/material';
import { Box } from '@mui/system';

interface ISideNavProps {
  children: React.ReactNode;
}

export const SideNav = ({ children }: ISideNavProps) => {
  const theme = useTheme();

  return (
    <>
      <Drawer variant="permanent">
        <Box width={theme.spacing(28)} display='flex' flexDirection="column">
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
        <Box flex={1}>

        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
