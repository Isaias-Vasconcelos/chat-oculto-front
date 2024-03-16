import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sha256 } from "js-sha256";

export default function Main() {

    const [usuario, setUsuario] = useState('');
    const navigate = useNavigate();

    function Entrar(e) {
        e.preventDefault();


        let nomeCriptografado = sha256(usuario).substring(20);

        localStorage.setItem('usuario',nomeCriptografado);

        setUsuario('');

        navigate('/chat');
    }
    return (
        <>
            <div className="d-flex justify-content-center"
                style={{
                    position: 'relative',
                    top: '300px'
                }}

            >
                <form onSubmit={Entrar} className="d-flex flex-column justify-content-center gap-2 w-25">
                    
                    <input
                        type="text"
                        style={{
                            backgroundColor:'#0b141a',
                            color:'white',
                            borderColor:'#005c4b'
                        }}
                        className="form-control"
                        placeholder="Digite seu nome secreto"
                        required
                        value={usuario}
                        onChange={e => setUsuario(e.target.value)}
                    />

                    <button style={{ backgroundColor:'#005c4b',color:'white' }} type="submit" className="btn">
                        ENTRAR
                    </button>

                </form>
            </div>
        </>
    );
}