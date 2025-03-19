import { useContext } from 'react';
import { tipoCanales } from '../data/tipoCanales';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../context/dataContext';
import { FormStyled } from '../components/Form.style';
import { TitleMain } from '../components/Title.style';
import { BoxInput } from '../components/BoxInput.style';
import { LabelStyle } from '../components/Label.style';
import { InputStyled } from '../components/Input.style';
import { BtnPrimary } from '../components/ButtonPrimary.style';
import { BtnSecundary } from '../components/ButtonSecundary.style';
import { FlexStyle } from '../components/Flex.style';

export const SeleccionCanales = () => {
	const { dataChannelSelected, setDataChannelSelected } =
		useContext(dataContext);

	const navigate = useNavigate();

	const _handleOnChange = (e) => {
		const { value } = e.target;

		setDataChannelSelected((prevChannel) => {
			return prevChannel.includes(value)
				? prevChannel.filter((channel) => channel !== value)
				: [...dataChannelSelected, value];
		});
	};

	const _handleOnSubmit = (e) => {
		e.preventDefault();
		if (dataChannelSelected.length < 1) {
			alert('debes alegir al menos un canal');
			return;
		}

		navigate(`/${dataChannelSelected[0]}`, {
			state: { selectedChannels: dataChannelSelected },
		});
	};

	return (
		<FormStyled onSubmit={_handleOnSubmit}>
			<TitleMain>Seleccion de canales</TitleMain>
			{tipoCanales.map(({ value, label }) => {
				return (
					<BoxInput key={value}>
						<LabelStyle htmlFor={value}>
							<InputStyled
								type="checkbox"
								id={value}
								name={value}
								value={value}
								checked={dataChannelSelected.includes(value)}
								onChange={_handleOnChange}
							/>
							{label}
						</LabelStyle>
					</BoxInput>
				);
			})}

			<FlexStyle>
				<BtnSecundary type="button" onClick={() => navigate('/')}>
					Atras
				</BtnSecundary>
				<BtnPrimary type="submit">Siguiente</BtnPrimary>
			</FlexStyle>
		</FormStyled>
	);
};

SeleccionCanales.propTypes = {
	setDataChannelSelected: PropTypes.func.isRequired,
	dataChannelSelected: PropTypes.array.isRequired,
};
