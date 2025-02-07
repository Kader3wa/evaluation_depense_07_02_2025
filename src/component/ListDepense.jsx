import { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { DepenseContext } from '../context/DepenseContext';

const ListDepense = () => {

    const depenseContext = useContext(DepenseContext);

    return (
        <>
            <h2 className="mb-5">Synthèse</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>label</th>
                        <th>Categorie</th>
                        <th>Montant</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        depenseContext.state.depenses.map((depense, index) => {
                            return (
                                <><tr key={index}>
                                    <td>{depense?.label}</td>
                                    <td>{depense?.categorie}</td>
                                    <td>{depense?.montant}</td>
                                    <td>
                                        <Button variant="danger">
                                            <FaTrash />
                                        </Button>
                                    </td>
                                </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default ListDepense;