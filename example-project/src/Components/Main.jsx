
import Create from './Create';
import Read from './Read';
import Update from './Update';
import Delete from './Delete';


const Main = () => {
    return (
        <div>
            <div class="headermain">
                <h1>WELCOME TO WCDINALDS</h1>
            </div>
            <div className="navbar">
                <a href="/">Home</a>
            </div>
            <div className="rowC">
                <Create />
                <Delete />
                <Update />
            </div>
            <Read />
        </div>
    );
}

export default Main;