import React, { useEffect } from 'react';
import SelectOption from '../../components/SelectOption';
import getCategories from '../../helpers/getCategories';
import {
	MainPageContainer,
	SettingsSection,
	CategoriesSelect
} from './mainPageStyles';

const categoriesURL = 'https://the-trivia-api.com/api/categories';

const MainPage = () => {
	useEffect(() => {
		const getAllCategories = async () => {
			const categories = await getCategories(categoriesURL);
			console.log(categories);
		}

		getAllCategories();
	}, []);

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
