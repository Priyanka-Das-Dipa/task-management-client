import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import About from './About';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Task Management | Home</title>
            </Helmet>
           <div className='space-y-5'> 
           <Banner></Banner>
            <About></About>
           </div>
        </div>
    );
};

export default Home;