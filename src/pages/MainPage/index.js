import React, { useEffect, useState } from 'react';
import SelectOption from '../../components/SelectOption';
import getCategories from '../../helpers/getCategories';
import getOrganizedCategories from '../../helpers/getOrganizedCategories';
import {
	MainPageContainer,
	SettingsSection,
	SelectContainer
} from './mainPageStyles';

const categoriesURL = 'https://the-trivia-api.com/api/categories';

const MainPage = () => {
	const [categories, setCategories] = useState([]);
	const [settings, setSettings] = useState({
		categorie: 'all',
		difficulty: 'easy'
	});

	useEffect(() => {
		const getAllCategories = async () => {
			const categories = await getCategories(categoriesURL);
			const organizedCategories = getOrganizedCategories(categories);
			setCategories(organizedCategories);
		}

		getAllCategories();
	}, []);

	const onCategorieChange = ({ target: { value, name } }) => {
		setSettings({ ...settings, [name]: value });
	}

	console.log(settings);

	return (
		<MainPageContainer>
			<SettingsSection>
				<SelectContainer
					name='categorie'
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
				</SelectContainer>
				<SelectContainer
					name='difficulty'
					onChange={ onCategorieChange }
				>
					<SelectOption
						name='Easy'
						value='easy'
					/>
					<SelectOption
						name='Medium'
						value='medium'
					/>
					<SelectOption
						name='Hard'
						value='hard'
					/>
				</SelectContainer>
			</SettingsSection>
		</MainPageContainer>
	);
};

export default MainPage;
