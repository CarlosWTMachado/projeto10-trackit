import Header from "../Header";
import Footer from "../Footer";

import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Habitos () {
	const location = useLocation();
	const {image} = location.state;

	const config = {
		headers: { Authorization: `Bearer ${localStorage.getItem('trackItToken')}` }
	};

	function getHabits () {
		const promise = axios.get ('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
		promise.then (response => {
			const {data} = response;
			console.log(data);
		})
		promise.catch (error => console.log(error));
	}

	return (
		<>
			<Header image={image}/>
			<div>
				<div>
					<p>Meus hábitos</p>
					<button>+</button>
				</div>
			</div>
			<Footer />
		</>
	);
}