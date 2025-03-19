import styled from 'styled-components';

export const BtnPrimary = styled.button`
	padding: 0.7em 1.125em;
	background-color: ${({ theme }) => theme.colors.primary};
	border: none;
	color: ${({ theme }) => theme.colors.background};
	border-radius: ${({ theme }) => theme.border.borderMain};

	&:hover {
		background-color: ${({ theme }) => theme.colors.tertiary};
	}
`;
