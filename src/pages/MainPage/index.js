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
	const [settings, setSettings] = useState({
		categorie: 'all'
	});

	useEffect(() => {
		const getAllCategories = async () => {
			const categories = await getCategories(categoriesURL);
			const organizedCategories = getOrganizedCategories(categories);
			setCategories(organizedCategories);
		}

		getAllCategories();
	}, []);

	const onCategorieChange = ({ target: { value } }) => {
		setSettings({ ...settings, categorie: value });
	}

	console.log(settings);

	return (
		<MainPageContainer>
			<SettingsSection>
				<CategoriesSelect
					name='categories'
					onChange={ onCategorieChange }
				>
					<SelectOption name='All' value='all' />
					{
						categories.map(
							(categorie, index) =>
								<SelectOption
									key={ index }
									name={ categorie[0] }
									value={ categorie[1] }
								/>
						)
					}
				</CategoriesSelect>
			</SettingsSection>
		</MainPageContainer>
	);
};

export default MainPage;
