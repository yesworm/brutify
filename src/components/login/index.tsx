import Nav from '../nav'
import { Container, Right, Left, P, MobileLoginButton } from './styles'
import { redirectToAuthCodeFlow } from "../../auth"

const Login = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;

    const handleLogin = async () => {
        await redirectToAuthCodeFlow(clientId)
    }

    return (
        <>
            <Nav/>
            <Container>
                <MobileLoginButton onClick={handleLogin}>
                    LOGIN
                </MobileLoginButton>
                <Left>
                    <P>music player</P>
                    <P>for your enjoyment</P>
                </Left>
                <Right>
                    <P>designed with bruitalism in mind</P>
                    <P>spotify account is required</P>
                </Right>
            </Container>
        </>
    );
}

export default Login;