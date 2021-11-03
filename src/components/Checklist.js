import React, { useState } from "react"
import Banner from "./Banner"
import FunkoForm from "./FunkoForm"
import Funko from "./Funko"


function Checklist() {
    const [funkos, setFunkos] = useState([])

    function onFormCompleted(data) {
        setFunkos([...funkos, data])
    }

    return (
        <>
        <Banner />
        <FunkoForm onFormCompleted={onFormCompleted} />
        {funkos.map((funko) => (
            <Funko
            name={funko.name}
            picture={funko.picture} 
            />
        ))}
        </>
    )
}

export default Checklist