import React, { useEffect, useState } from 'react';
import SelectOption from '../../components/SelectOption';
import getCategories from '../../helpers/getCategories';
import getOrganizedCategories from '../../helpers/getOrganizedCategories';
import {
	MainPageContainer,
	SettingsSection,
	CategoriesSelect
} from './mainPageStyles';

const categoriesURL = 'https://the-trivia-api.com/api/categories';

const MainPage = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const getAllCategories = async () => {
			const categories = await getCategories(categoriesURL);
			const organizedCategories = getOrganizedCategories(categories);
			setCategories(organizedCategories);
		}

		getAllCategories();
	}, []);

	console.log(categories);

	return (
		<MainPageContainer>
			<SettingsSection>
				<CategoriesSelect
					name='categories'
				>
					<SelectOption />
				</CategoriesSelect>
			</SettingsSection>
		</MainPageContainer>
	);
};

export default MainPage;
