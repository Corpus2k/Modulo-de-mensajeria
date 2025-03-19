import { CanalForm } from '../components/CanalForm';

export const MensajeTexto = () => {
	return (
		<CanalForm
			title={'Mensaje de texto'}
			campo={'mensaje'}
			canal={'mensaje'}
			label={'Asunto'}
		/>
	);
};
