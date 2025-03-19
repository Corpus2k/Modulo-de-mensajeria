import styled from 'styled-components';

export const BoxInput = styled.div`
	outline: 1px solid ${({ theme }) => theme.colors.secundary};
	padding: 1em 0;
	margin: 1em 0;
	border-radius: ${({ theme }) => theme.border.borderMain};

	&:has(input:checked) {
		outline: 2px solid ${({ theme }) => theme.colors.primary};
		background-color: ${({ theme }) => theme.colors.secondary};
	}
`;
