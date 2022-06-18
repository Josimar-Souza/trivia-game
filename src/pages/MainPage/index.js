import React, { useEffect, useState } from 'react';
import SelectOption from '../../components/SelectOption';
import getCategories from '../../helpers/getCategories';
import getOrganizedCategories from '../../helpers/getOrganizedCategories';
import Paragraph from '../../components/Paragraph';
import InputRange from '../../components/InputRange';
import {
	MainPageContainer,
	SettingsSection,
	Select,
	SettingsContainer
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
				<SettingsContainer>
					<Paragraph paragraph='Categories' />
					<Select
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
					</Select>
				</SettingsContainer>
				<SettingsContainer>
					<Paragraph paragraph='Difficulty' />
					<Select
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
					</Select>
				</SettingsContainer>
				<SettingsContainer>
					<Paragraph paragraph='Number of Questions: 20' />
					<InputRange
						min={ 1 }
						max={ 20 }
					/>
				</SettingsContainer>
			</SettingsSection>
		</MainPageContainer>
	);
};

export default MainPage;
