import { useNavigate } from 'react-router-dom';
import { TitleMain } from '../components/Title.style';
import { BtnPrimary } from '../components/ButtonPrimary.style';
import '../pages/NotFound.css';
export const NotFound = () => {
	const navegite = useNavigate();
	return (
		<div>
			<TitleMain>ERROR 404</TitleMain>

			<p>Not found</p>
			<BtnPrimary onClick={() => navegite('/')}>
				REGRESAR AL INICIO
			</BtnPrimary>
		</div>
	);
};
