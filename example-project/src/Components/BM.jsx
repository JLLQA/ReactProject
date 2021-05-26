const BM = (props) => {

    const {person} = props;
    console.log(person);

    return (
        <>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.type1}</td>
            <td>{person.type2}</td>
            <td>{person.edible}</td>
        </>
    )

}

export default BM;