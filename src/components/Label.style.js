import styled from 'styled-components';

export const LabelStyle = styled.label`
	color: ${({ theme }) => theme.colors.secundary};

	&:has(input:checked) {
		color: ${({ theme }) => theme.colors.primary};
	}
`;
