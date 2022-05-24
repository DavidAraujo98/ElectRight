import SelectElect from "../components/SelectElect.js";
import PrevElect from "../components/PrevElect";
import "../css/Home.css"

const Home = ({email}) => {
    return (
        <div className="home">
            <div className="selectElect">

                <SelectElect email={email} />
            </div>
            <div className="prevElect">
                <PrevElect />
            </div>
        </div>
    );
}
 
export default Home;