import {useState, useContext, createContext} from 'react';

// si soy un componente externo, debo exportar el context, e importarlo en mi componente
//export const LoginContext = createContext([]);
const LoginContext = createContext([]);

const LoginUseContext = () => {
    const [logIn, setLogin] = useState(false);

    return (
            <LoginContext.Provider value={[logIn, setLogin]}>
                <Nav  />
            </LoginContext.Provider>
    )
}

export default LoginUseContext;

const Nav = ()=>{
    const [logIn, setLogin] = useContext(LoginContext);
    return (
        <section>
        <nav  style={{ justifyContent:"space-between", alignItems:'center'}}>
            <h3></h3> 
            <strong>{logIn? "Bienvenido":"Logged Out"}</strong> 
        </nav>
        <LoginButton />
        </section>
    )
}

// si soy un componente externo, debo exportar el context, e importarlo en mi componente
//import {LoginContext} from './components/LoginUseContext';
const LoginButton = () => {
    //const [logIn, setLogin] = useState(false);
    const [logIn, setLogin] = useContext(LoginContext);

    const handleLogin= ()=>{
        setLogin(!logIn);
    }
    return (<>
            Estas logueado? <strong>{logIn?"Si":"No"}</strong><br />
            <button onClick={handleLogin}>{logIn?"Log Out":"Log In"}</button>
        </>)
}