import { useHistory } from "react-router-dom";

function Layout(path) {

    const history = useHistory();

    const routeChange = () => {
        let path = path;
        history.push(path);
    }
}