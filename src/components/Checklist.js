import React, { useState } from "react"
import Banner from "./Banner"
import FunkoForm from "./FunkoForm"
import Funko from "./Funko"
import { Box } from "@mui/system"


function Checklist() {
    const [funkos, setFunkos] = useState([])

    function onFormCompleted(data) {
        setFunkos([...funkos, data])
    }

    console.log(funkos.length)

    return (
        <>
        <Banner />
        <FunkoForm onFormCompleted={onFormCompleted} />
        <Box sx={{
            backgroundImage: 'Url(/Assets/ChecklistAssets/fondoChecklistMHA.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: 5,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        }}>
        {funkos.map((funko) => (
            <Funko
            name={funko.name}
            picture={funko.picture}
            number={funko.number} 
            />
            ))}
        </Box>
        </>
    )
}

export default Checklist
