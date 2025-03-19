import PropTypes from 'prop-types';
import { dataMessageType } from '../data/TipoMensaje';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { dataContext } from '../context/dataContext';
import { TitleMain } from '../components/Title.style';
import { FormStyled } from '../components/Form.style';
import { BoxInput } from '../components/BoxInput.style';
import { InputStyled } from '../components/Input.style';
import { LabelStyle } from '../components/Label.style';
import { BtnPrimary } from '../components/ButtonPrimary.style';

import { BtnSecundary } from '../components/ButtonSecundary.style';
import { FlexStyle } from '../components/Flex.style';

export const Home = () => {
	const { setDataTypeM, dataTypeM } = useContext(dataContext);
	const navigate = useNavigate();

	const _handleOnChange = (e) => {
		setDataTypeM(e.target.value);
	};

	const _handleOnSubmit = (e) => {
		e.preventDefault();

		if (!dataTypeM || dataTypeM === '') {
			alert('Debes de escoger alguna opcion');
			return;
		}
		navigate('/selecion-canales');
	};

	const _handleReset = () => {
		setDataTypeM('');
	};

	return (
		<>
			<FormStyled onSubmit={_handleOnSubmit}>
				<TitleMain>Seleccione el tipo de mensaje</TitleMain>
				{dataMessageType.map(({ name, value, label }) => {
					return (
						<BoxInput key={value}>
							<LabelStyle htmlFor={value}>
								<InputStyled
									type="radio"
									id={value}
									name={name}
									value={value}
									onChange={_handleOnChange}
									checked={dataTypeM === value}
								/>
								{label}
							</LabelStyle>
						</BoxInput>
					);
				})}
				<FlexStyle>
					<BtnSecundary type="button" onClick={_handleReset}>
						Cancelar
					</BtnSecundary>
					<BtnPrimary type="submit">Siguiente</BtnPrimary>
				</FlexStyle>
			</FormStyled>
		</>
	);
};
Home.propTypes = {
	setDataTypeM: PropTypes.func.isRequired,
	dataTypeM: PropTypes.string.isRequired,
};
