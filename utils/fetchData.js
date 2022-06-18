export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '588beb49cbmsh5b5d607bc16caa6p16ce71jsn2cb2b3707e1c' ,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json()

    return data;
}