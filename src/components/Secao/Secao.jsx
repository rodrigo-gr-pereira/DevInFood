/* eslint-disable react/prop-types */
import ProTypes from 'prop-types';
import './Secao.css';

export const Secao = ({title}) => {
    return (
        <>
        <h2 className='secao-title'>{title}</h2>
        
        <hr className='secao-divider' />

        </>
    );
};

Secao.protoTypes = {
    title: ProTypes.string.isRequired,
}