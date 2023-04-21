import ProTypes from 'prop-types';

import './Card.css';

export const Card = ({produto})=> {
    
    return (
     <div className='card'>
        <img className='card-image' src={produto.img} alt="Imagem do produto" />

        <div className='card-=info'>
            <h3 className='card-title'>{produto.nome}</h3>
            <p className='card-description'>{produto.descricao}</p>

            <div className='card-footer'>
            <p className='card-price'> {`R$ ${produto.valor.toFixed(2)}`}</p>
            <p className='card-time'>{produto.tempoPreparo}</p>
            </div>
        </div>
    </div>
    );
};

Card.propTypes ={
    produto: ProTypes.shape({
    id: ProTypes.number.isRequired,
    img: ProTypes.string.isRequired,
    nome: ProTypes.string.isRequired,
    descricao: ProTypes.string.isRequired,
    valor: ProTypes.number.isRequired,
    tempoPreparo: ProTypes.string.isRequired
}).isRequired
}