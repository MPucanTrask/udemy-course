import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormFields } from '../../customHooks/useFormFields';
import { getFormFields } from '../../data/formFields';

// eslint-disable-next-line react/prop-types
function Header({ handleFilterChange }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const disableEnter = (event) => event.key === 'Enter' && event.preventDefault();

  const [fields, handleFieldChange] = useFormFields({
    username: '',
    email: '',
    name: '',
  });

  const textFields = getFormFields(fields);

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

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      // eslint-disable-next-line no-console
      await console.log(fields);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: '2rem 0',
      }}
      noValidate
      autoComplete="off"
    >
      <Button
        type="button"
        size="medium"
        variant="contained"
        onClick={handleOpen}
      >
        Add monster
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <form onSubmit={handleSubmit}>
            {textFields.map((textField) => (
              <TextField
                id={textField.id}
                key={textField.id}
                type="text"
                label={textField.label}
                margin="dense"
                value={textField.value}
                onChange={handleFieldChange}
              />
            ))}
            <Box>
              <Button onClick={handleClose} color="secondary" sx={{ mr: '1rem' }}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="success">
                Save
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>

      <TextField
        id="basic-search"
        label="Search monster"
        variant="outlined"
        placeholder="Search monsters.."
        onChange={handleFilterChange}
        onKeyPress={disableEnter}
      />
    </Box>
  );
}

export default Header;
