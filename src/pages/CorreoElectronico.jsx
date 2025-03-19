import { CanalForm } from '../components/CanalForm';

export const CorreoElectronico = () => {
	return (
		<CanalForm
			title={'Correo electrónico'}
			campo={'mensaje'}
			asunto={'asunto'}
			canal={'correo'}
			input={'text'}
			label={'Asunto'}
		/>
	);
};
