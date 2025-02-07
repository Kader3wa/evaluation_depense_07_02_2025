import { Button, Form } from "react-bootstrap"
import { CATEGORIES } from "../constants/categories"
import { useContext, useState } from "react"
import { DepenseContext } from "../context/DepenseContext"

const AddDepenseForm = () => {

    const depenseContext = useContext(DepenseContext);
    const [label, setLabel] = useState("");
    const [category, setCategory] = useState("");
    const [montant, setMontant] = useState(0);

    const handleAddDepense = () => {
        let depense = {
            'label': label,
            'category': category,
            'montant': montant
        }
        console.log(depense)
        setLabel("");
        setCategory("");
        setMontant("");
        depenseContext.dispatch(
            {
                type: "ADD",
                payload: depense
            }
        );
    }

    return (
        <>
            <h2 className="mb-5">Gestion</h2>
            <Form className="form">
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text" placeholder="Entrez le label de la depense..."
                        required
                        value={label}
                        onChange={(ev) => setLabel(ev.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Select
                        onChange={(ev) => setCategory(ev.target.value)}
                        required
                    >
                        <option>Categorie de la dépense...</option>
                        {
                            CATEGORIES.map((cat, index) => {
                                return (
                                    <option
                                        key={index}
                                        value={cat.id}
                                    >
                                        {cat.name}
                                    </option>
                                )
                            })
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text" placeholder="Entrez le montant de la depense..."
                        required
                        value={montant}
                        onChange={(ev) => setMontant(ev.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleAddDepense}>Ajouter</Button>
            </Form>
        </>
    )
}

export default AddDepenseForm