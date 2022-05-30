import appName from '../Assets/trackIt.png'

import React from 'react';
import styled from 'styled-components';

export default function Header(props) {
	const {image} = props;
	return (
		<HeaderContainer>
			<AppName>
				<img src={appName} alt={'app-name'}/>
			</AppName>
			<UserPicture>
				<img src={image} alt={'user-profile'} height='51px' width='51px'/>
			</UserPicture>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 70px;
	background-color: #126BA5;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	align-items: center;
	display: flex;
	flex-direction: row;
`;

const AppName = styled.div`
	margin-left: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 97px;
	height: 49px;
`;

const UserPicture = styled.div`
	margin-left: 191px;
	border-radius: 100%;
	width: 51px;
	height: 51px;
	background-color: green;
`;