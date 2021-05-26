import axios from "axios";
import { useEffect, useState } from "react";
import BM from "./BM";

import { Table, Container, Spinner } from 'reactstrap';

const Builder = () => {
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
                    setData(response.data.data);
                })
                .catch((error) => {
                    setError(error);
                    setIsLoaded(true);
                    console.error(error);
                });
        }, 3000)
    }, []);


    if (error) {
        return <h1>Oh noo something went wrong with status code {error.message}</h1>
    } else if (!isLoaded) {
        return (
            <>
                <p>Please wait loading data....</p>
                <br></br>
                <Spinner color="danger" />
            </>
        )
    } else {

        return (
            <>
                <Container>
                    <h1>Welcome to BoorgerMon</h1>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>type1</th>
                                <th>typ2</th>
                                <th>edible</th>
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

export default Builder;