// import axios from "axios";
// import { useEffect, useState } from "react";
// import BM from "./BM";

import { Container } from 'reactstrap';

const Create = () => {
    // const [data, setData] = useState([]);

    return (
        <>
            <Container>
                <h1 className="header1">Create BM WIP</h1>
                <form>
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
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                        <button
                            className="success"
                            type="submit" >
                            Create BM</button>
                        <br></br>
                    </div>
                </form>
            </Container>
        </>
    );
};

// const createBM = () => {


//     const NAME_VALUE = document.querySelector("#Name");
//     const FIRST_VALUE = document.querySelector("#firstItem");
//     const SECOND_VALUE = document.querySelector("#secondItem");
//     const EDIBLE_VALUE = document.querySelector("#edible");

//     console.log(`Name:${NAME_VALUE} 1st:${FIRST_VALUE} 2nd:${SECOND_VALUE} E:${EDIBLE_VALUE}`);

//     let obj = {
//         name: NAME_VALUE,
//         type1: FIRST_VALUE,
//         type2: SECOND_VALUE,
//         edible: EDIBLE_VALUE
//     };

//     // if statement to catch blank values for BM

//     axios({
//             // method: "post",
//             // url: "http://localhost:8080/create",
//             // data: JSON.stringify(obj),
//             // headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "APPLICATION/JSON" }
//         })
//         .then((resp) => {
//             console.log(resp);
//         })
//         .catch((err) => {
//             console.error(err.response)
//         });
// }


export default Create;