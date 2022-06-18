import React from 'react';
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

				</CategoriesSelect>
			</SettingsSection>
		</MainPageContainer>
	);
};

export default MainPage;
