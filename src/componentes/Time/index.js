import './Time.css'
import Colaborador from '../Colaborador'

const Time = ({time, colaboradores}) => {
    return (

        colaboradores.length > 0 && <section className='time' style={{backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corSecundaria}}>
            <h3 style={{borderColor: time.corPrimaria}}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( 
                    (colaborador, indice) => <Colaborador 
                    key={indice}
                    colaborador={colaborador}
                    corDeFundo={time.corPrimaria}
                />)}  
            </div>

        </section>
    )
}

export default Time