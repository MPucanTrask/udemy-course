// eslint-disable-next-line import/no-import-module-exports
import { grey } from '@mui/material/colors';

const containerStyle = {
  minHeight: '100vh',
  borderLeft: 1,
  borderRight: 1,
  borderColor: grey[300],
  paddingBottom: '1rem',
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  p: '1rem 0',
};

// eslint-disable-next-line import/prefer-default-export
export { containerStyle, modalStyle, headerStyle };
