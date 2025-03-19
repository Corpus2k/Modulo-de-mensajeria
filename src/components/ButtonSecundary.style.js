import styled from 'styled-components';

export const BtnSecundary = styled.button`
	padding: 0.7em 1.125em;
	border-radius: ${({ theme }) => theme.border.borderMain};
	border: none;
	background-color: ${({ theme }) => theme.colors.background};

	outline: 1px solid ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.primary};
	&:hover {
		outline: 2px solid ${({ theme }) => theme.colors.tertiary};
	}
`;
