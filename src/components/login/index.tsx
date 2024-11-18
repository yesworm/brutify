import Nav from '../nav'
import {Container, Right, Left, P} from './styles'

const Login = () => {
    return (
        <>
            <Nav/>
            <Container>
                <Left>
                    <P>music player</P>
                    <P>for your amusement</P>
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