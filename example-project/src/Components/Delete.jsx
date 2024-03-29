import axios from "axios";
import { useState } from "react";

import { Container } from 'reactstrap';

const Delete = () => {

    const [ID, setID] = useState("");
    const [setError] = useState(null)

    const DeleteBM = (e) => {

        e.preventDefault();
        const DELETE = ID;
        console.log(DELETE);

        const delURL = `http://localhost:8080/remove/${DELETE}`;
        console.log(delURL);

        setTimeout(() => {
            axios
                .delete(delURL)
                .then((response) => {
                    console.log(response);
                    window.location.reload(true);
                })
                .catch((error) => {
                    setError(error);
                    console.error(error.response);
                });
        }, 1000)
    }

    return (
        <>
            <Container className = "DELETE">
                <h1 className="header1">Delete BM</h1>
                <form onSubmit={DeleteBM}>
                    <div>
                        <input
                            className="form-control"
                            id="ID"
                            type="number"
                            name="ID"
                            value={ID}
                            placeholder="Enter ID:"
                            onChange={(e) => setID(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                        <button
                            className="danger"
                            type="submit">
                            Delete BM</button>
                    </div>
                </form>
            </Container>
        </>
    );
};

export default Delete;