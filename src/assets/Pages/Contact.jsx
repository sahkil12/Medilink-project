import { Helmet } from "react-helmet";
import ErrorPage from "../Components/Errorpage/ErrorPage";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>MediLink | Contact Page</title>
            </Helmet>
                <ErrorPage></ErrorPage>
        </div>
    );
};

export default Contact;