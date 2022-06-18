import axios from 'axios';

const getCategories = async (url) => {
	const { data } = await axios.get(url);
	return data;
};

export default getCategories;
