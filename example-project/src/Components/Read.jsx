import axios from "axios";
import { useEffect, useState } from "react";
import BM from "./BM";

import { Table, Container, Spinner } from 'reactstrap';

const Read = () => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {

            //Get all
            axios
                .get("http://localhost:8080/getAll")
                .then((response) => {
                    console.log(response);
                    setIsLoaded(true);
                    setData(response.data);
                })
                .catch((error) => {
                    setError(error);
                    setIsLoaded(true);
                    console.error(error);
                });
        }, 2000)
    }, []);


    if (error) {
        return <h1>Oh noo something went wrong with status code {error.message}</h1>
    } else if (!isLoaded) {
        return (
            <>
                <Container className = "loading">
                    <p>Please wait loading data....</p>
                    <br></br>
                    <Spinner color="danger" />
                </Container>
            </>
        )
    } else {

        return (
            <>
                <Container className = "READ">
                    <h1 className = "header2">Current BoorgerMon</h1>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Item 1</th>
                                <th>Item 2</th>
                                <th>Edible???</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((emp) => (
                                <tr>
                                    <BM bm={emp} />
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </>
        );
    };
}

export default Read;