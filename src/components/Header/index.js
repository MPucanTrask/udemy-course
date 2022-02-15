import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormFields } from '../../customHooks';
import { getFormFields } from '../../data/formFields';
import { headerStyle, modalStyle } from '../../externalStyle';
import AddButton from './AddButton';
import FormField from './Form/FormField';
import SearchBox from './SearchBox';

function Header({ onChange }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [fields, handleFieldChange] = useFormFields({
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  });

  const textFields = getFormFields(fields);

  function handleSubmit(event) {
    event.preventDefault();

    try {
      // eslint-disable-next-line no-console
      console.log(fields);
    } catch (e) {
      throw new Error(e);
    }
  }

  return (
    <Box component="header" sx={headerStyle}>
      <AddButton onClick={handleOpen} title="Add Post" />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <form onSubmit={handleSubmit}>
            {textFields.map(({ ...otherParameters }) => (
              <Box key={otherParameters.id}>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <FormField onChange={handleFieldChange} {...otherParameters} />
              </Box>
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

      <SearchBox onChange={onChange} />
    </Box>
  );
}

export default Header;
