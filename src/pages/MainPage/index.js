import React from 'react';
import SelectOption from '../../components/SelectOption';
import {
	MainPageContainer,
	SettingsSection,
	CategoriesSelect
} from './mainPageStyles';

const MainPage = () => {
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
