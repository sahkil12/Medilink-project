import { useLoaderData, useNavigation } from "react-router-dom";
import Blog from './Blog';
import Spinner from "../Components/Spinner/Spinner";
import { Helmet } from "react-helmet";

const Blogs = () => {
    const blogs = useLoaderData()
    const navigation = useNavigation()

    if(navigation.state === 'loading'){
        return <Spinner></Spinner>;
    }
    return (
        <div className="md:w-[80%] mx-auto">
            <Helmet>
                <title>MediLink | Blogs Page</title>
            </Helmet>
            
                <h2 className="text-4xl font-bold text-center my-10">Blogs</h2>
                <p className="opacity-85 font-medium text-lg text-center">Clear, concise answers to your healthcare and appointment questions.</p>
                <div className="space-y-8 my-10">
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                    }
                </div>
        </div>
    );
};

export default Blogs;