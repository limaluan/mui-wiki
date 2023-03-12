import { IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';

import { useAppThemeContext, useDrawerContext } from '../contexts';

import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from 'react-router-dom';

interface IBasePageProps {
  children: React.ReactNode;
  title: string;
}

export const PageLayout = ({ children, title }: IBasePageProps) => {
  const theme = useTheme();

  // Media Queries
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  // States  and Contexts
  const { themeName, toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column">
      {/* HEADER */}
      <Box
        width="100%"
        height="8vh"
        color={theme.palette.primary.contrastText}
        style={{ background: theme.palette.primary.main }}
        paddingX={4}
        boxSizing="border-box"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link to="/" style={{textDecoration: "none"}}>
          <Typography
            variant="h5"
            color={theme.palette.primary.contrastText}
            style={{ textDecoration: 'none' }}
          >
            Ínicio
          </Typography>
        </Link>
        <Box display="flex" alignItems="center">
          {themeName === 'light' ? (
            <IconButton onClick={toggleTheme}>
              <DarkModeIcon
                style={{ color: theme.palette.primary.contrastText }}
              />
            </IconButton>
          ) : (
            <IconButton onClick={toggleTheme}>
              <LightModeIcon
                style={{ color: theme.palette.primary.contrastText }}
              />
            </IconButton>
          )}

          <IconButton
            href="https://github.com/limaluan/mui-wiki"
            target="_blank"
          >
            <GitHubIcon style={{ color: theme.palette.primary.contrastText }} />
          </IconButton>
        </Box>
      </Box>

      {/* CONTENT */}
      <Box
        paddingX={4}
        display="flex"
        alignItems="center"
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
        gap={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          fontWeight="700"
          fontFamily="Roboto"
        >
          {title}
        </Typography>
      </Box>

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
