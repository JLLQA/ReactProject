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
                <Container>
                    <h1 className = "header2">Current BoorgerMon</h1>
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

export default Read;