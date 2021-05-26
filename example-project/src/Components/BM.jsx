const BM = (props) => {

    const {bm} = props;
    console.log(bm);

    return (
        <>
            <td>{bm.id}</td>
            <td>{bm.name}</td>
            <td>{bm.type1}</td>
            <td>{bm.type2}</td>
            <td>{bm.edible}</td>
        </>
    )

}

export default BM;