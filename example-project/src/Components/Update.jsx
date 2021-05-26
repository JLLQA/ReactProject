// import axios from "axios";
// import { useEffect, useState } from "react";
// import {datalist} from "./Create"
// import BM from "./BM";

import { Container } from 'reactstrap';

const Update = () => {
    // const [data, setData] = useState([]);
    // const [isLoaded, setIsLoaded] = useState(false)
    // const [error, setError] = useState(null)

    // useEffect(() => {
    //     setTimeout(() => {

    //         //Get all
    //         axios
    //             .get("http://localhost:8080/getAll")
    //             .then((response) => {
    //                 console.log(response);
    //                 setIsLoaded(true);
    //                 setData(response.data);
    //             })
    //             .catch((error) => {
    //                 setError(error);
    //                 setIsLoaded(true);
    //                 console.error(error);
    //             });
    //     }, 3000)
    // }, []);
    return (
        <>
            <Container>
                <h1 className="header1">Update BM WIP</h1>
                <form>
                    <div>
                        <input
                            className="form-control"
                            id="ID"
                            type="number"
                            name="ID"
                            // value={ID}
                            placeholder="Enter ID:"
                        // onChange={(e) => setID(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <div>
                        <input type="text" className="form-control" id="Name" placeholder="Enter Name: " />
                    </div>
                    <br></br>
                    <div>
                        <input list="items" className="form-control" id="firstItem" placeholder="Choose 1st Item" />
                        <datalist id="items">
                            <option value="Bun"></option>
                            <option value="Condiment"></option>
                            <option value="Lettuce"></option>
                            <option value="Tomato"></option>
                            <option value="Onion"></option>
                            <option value="Bacon"></option>
                            <option value="Cheese"></option>
                            <option value="Patty"></option>
                        </datalist>
                    </div>
                    <br></br>
                    <div>
                        <input list="items" className="form-control" id="secondItem" placeholder="Choose 2nd Item" />
                    </div>
                    <br></br>
                    <div>
                        <label><b>Are they edible? </b></label>
                        <select id="edible" name="edible" size="1">
                            <option value="" defaultValue></option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <br></br>
                    <div>
                        <button
                            className="primary"
                            type="submit" >
                            Update BM</button>
                        <br></br>
                    </div>
                </form>
            </Container>
        </>
    );
};

// const updateBM = () =>{
//     return(
//         <>
//         <Container>
//             <h1>Updated</h1>
//         </Container>
//         </>
//     )
// }

export default Update;