const getOrganizedCategories = (categories) => {
	const organizedCategories = [];

	Object.entries(categories).forEach((categorie) => {
		const currCategorie = [];
		currCategorie[0] = categorie[0];

		if (categorie[1].length > 1) {
			categorie[1].forEach((categorieName) => {
				if (categorieName.includes('_')) {
					currCategorie[1] = categorieName;
				}
			});
		} else {
			currCategorie[1] = (categorie[1][0]);
		}

		organizedCategories.push(currCategorie);
	});

	return organizedCategories;
};

export default getOrganizedCategories;
