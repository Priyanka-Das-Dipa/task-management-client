import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import About from './About';
import People from './People';
import Subscrition from './Subscrition';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Task Management | Home</title>
            </Helmet>
           <div className='space-y-5'> 
           <Banner></Banner>
            <People></People>
            <Subscrition></Subscrition>
            <About></About>
           </div>
        </div>
    );
};

export default Home;