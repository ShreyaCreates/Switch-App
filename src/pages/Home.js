import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Welcome to Switch</h1>
            <p>Trade skills, not money.</p>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
    );
}
export default Home;
