import { Typography } from '@mui/material';
import { PageLayout } from '../shared/layouts';

export const NotFound = () => {
  return (
    <PageLayout title="Página não encontrada">
      <Typography variant="h5">
        Tente outro item ou volte para o Ínicio
      </Typography>
    </PageLayout>
  );
};
