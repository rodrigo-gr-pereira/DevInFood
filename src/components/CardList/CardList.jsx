import PropTypes from 'prop-types';
import {Card} from '../Card/Card';
import {Secao} from '../Secao/Secao';

import './CardList.css'

export const CardList = ({title, list}) => {

    return (
        <section>
            <Secao title={title} />

            <ul className='card-list'>
                {list.map((produto) =>(
                    <li key={produto.id} className='card-list-item'>
                        <Card produto={produto}/>
                    </li>
                ))}
            </ul>
        </section>
    )


};

CardList.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
}