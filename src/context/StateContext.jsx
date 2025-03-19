import { useState } from 'react';
import { dataContext } from './dataContext';
import PropTypes from 'prop-types';

export const StateContext = ({ children }) => {
	const [dataTypeM, setDataTypeM] = useState('');
	const [dataChannelSelected, setDataChannelSelected] = useState([]);
	const [datoToEdit, setDatoToEdit] = useState({});

	return (
		<dataContext.Provider
			value={{
				dataTypeM,
				setDataTypeM,
				dataChannelSelected,
				setDataChannelSelected,
				datoToEdit,
				setDatoToEdit,
			}}
		>
			{children}
		</dataContext.Provider>
	);
};

StateContext.propTypes = {
	children: PropTypes.node.isRequired,
};
