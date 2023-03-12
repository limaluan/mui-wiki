import React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { Box, Paper, Typography } from '@mui/material';

interface CodeProps {
  code: string;
  language: string;
}

export const CodeBox: React.FC<CodeProps> = ({ code, language }) => {
  const highlightedCode = Prism.highlight(
    code,
    Prism.languages[language],
    language
  );

  return (
    <Box maxWidth="90%" component={Paper} padding={2} width="fit-content">
      <Typography whiteSpace="pre-wrap" overflow="auto">
        <pre style={{ wordBreak: 'break-all' }}>
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      </Typography>
    </Box>
  );
};
