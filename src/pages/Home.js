import Navbar from '../components/Navbar'
import AuthModal from "../components/AuthModal"
import { useState } from 'react'
import { useCookies } from "react-cookie"

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const authToken = cookies.AuthToken

    const handleClick = () => {
        if (authToken) {
            removeCookie('UserId', cookies.UserId)
            removeCookie('AuthToken', cookies.AuthToken)
            window.location.reload()
            return
        }
        setShowModal(true)
        setIsSignUp(true)
    }

    return (
        <div className="overlay">
            <Navbar
                authToken={authToken}
                minimal={false}
                setShowModal={setShowModal}
                showModal={showModal}
                setIsSignUp={setIsSignUp}
            />
            <div className="home">
                <h1 className="primary-title">Swipe Right®</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>
                <p>Welcome to "Campus Chemistry" - the ultimate college matchmaking
                    experience at IIIT Allahabad. Discover like-minded individuals,
                    forge meaningful connections, and unlock a world of possibilities
                    right here on campus. Swipe, connect, and ignite chemistry with fellow students who share
                    your interests and passions. Join Campus Chemistry today and make your IIIT Allahabad experience unforgettable.</p>

                {showModal && (
                    <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
                )}
            </div>
        </div>
    )
}
export default Home
