import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <Spinner animation="grow" role="status"/>
        </div>
    );
};

export default Loader;