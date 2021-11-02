import { useParams } from "react-router-dom"

function checklist() {
    const { fandom } = useParams()

    return <p> This is a checklist</p>
}

export default checklist