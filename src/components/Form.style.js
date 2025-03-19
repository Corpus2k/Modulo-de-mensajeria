import styled from 'styled-components';

export const FormStyled = styled.form`
	background-color: ${({ theme }) => theme.colors.background};
	min-width: 390px;
	padding: 1em;
	border-radius: ${({ theme }) => theme.border.borderMain};
`;
