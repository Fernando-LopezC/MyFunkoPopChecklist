import PropTypes from "prop-types";
import { useState } from "react";

function FunkoForm({ onFormCompleted }) {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");

  function onChangeName(event) {
    setName(event.target.value);
  }

  function onChangePicture(event) {
    setPicture(event.target.value);
  }

  function onSubmitForm(event) {
    event.preventDefault();
    onFormCompleted({ name, picture });
  }

  return (
    <form className="mt-4 mb-4" onSubmit={onSubmitForm}>
      <h3>Agrega un funko a tu checklist</h3>

      <div className="form-group">
        <label>Nombre</label>
        <input type="text" className="form-control" onChange={onChangeName} />
      </div>

      <div className="form-group">
        <label>URL de la imagen</label>
        <input
          type="text"
          className="form-control"
          onChange={onChangePicture}
        />
      </div>

      <button
        type="submit"
        className="btn btn-success btn-block"
        id="agregarProducto"
      >
        Agregar funko a la checklist
      </button>
    </form>
  );
}

FunkoForm.propTypes = {
  onFormCompleted: PropTypes.func.isRequired,
};

export default FunkoForm;