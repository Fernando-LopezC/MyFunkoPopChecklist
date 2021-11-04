import { Box } from "@mui/system";
import React, { useState } from "react";
import Banner from "./Banner";
import Funko from "./Funko";
import FunkoForm from "./FunkoForm";

function Checklist() {
  const [funkos, setFunkos] = useState([]);
  const [total, setTotal] = useState(0);

  function onFormCompleted(data) {
    setFunkos([...funkos, data]);
  }

  function onChecked(value) {
    if (value) {
      setTotal(total + 1);
    } else {
      setTotal(total - 1);
    }
  }

  console.log(funkos.length);

  return (
    <>
      <Banner />
      <FunkoForm onFormCompleted={onFormCompleted} />
      <Box
        sx={{
          backgroundImage: "Url(/Assets/ChecklistAssets/fondoChecklistMHA.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {funkos.map((funko) => (
          <Funko
            name={funko.name}
            picture={funko.picture}
            number={funko.number}
            onChecked={onChecked}
          />
        ))}
      </Box>
      {funkos.length > 0 ? (
        <p>
          Total: {total}/{funkos.length}
        </p>
      ) : null}
    </>
  );
}

export default Checklist;
