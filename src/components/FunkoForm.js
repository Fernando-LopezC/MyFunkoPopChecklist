import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { useState } from "react";

function FunkoForm({ onFormCompleted }) {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [number, setNumber] = useState("")

  function onChangeName(event) {
    setName(event.target.value);
  }

  function onChangePicture(event) {
    setPicture(event.target.value);
  }

  function onChangeNumber(event) {
      setNumber(event.target.value);
  }

  function onSubmitForm(event) {
    event.preventDefault();
    onFormCompleted({ name, picture, number });
  }

  return (
      <Box
      component= 'form'
      sx={{
          '& .MuiTextField-root': {m:1, width: '25ch'},
      }}
      noValidate
      autoComplete='off'
      onSubmit= {onSubmitForm}
      >
          <div>
              <TextField
              required
              id='filled-required'
              label='Nombre'
              helperText='Nombre del funko'
              type= 'text'
              onChange= {onChangeName}
              />
              <TextField
              required
              id='filled-required'
              label='Número'
              helperText='Número del funko'
              type= 'number'
              onChange= {onChangeNumber}
              />
              <TextField
              required
              id='filled-required'
              label='Imagen'
              helperText='URL de la imagen'
              type= 'url'
              onChange= {onChangePicture}
              />
              <Button
              color= 'secondary'
              variant= 'contained'
              type= 'submit'
              sx={{
                  mt: 3,
                  mb: 2
              }}
              >
                  Agregar Funko
              </Button>
          </div>

      </Box>
    
  );
}

FunkoForm.propTypes = {
  onFormCompleted: PropTypes.func.isRequired,
};

export default FunkoForm;
