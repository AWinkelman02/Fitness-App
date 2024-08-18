import env from "react-dotenv";

export const exerciseParams = {
	method: 'GET',
	hostname: 'exercise-db-fitness-workout-gym.p.rapidapi.com',
	port: null,
	headers: {
		'x-rapidapi-key': env.RAPID_API_KEY,
		'x-rapidapi-host': 'exercise-db-fitness-workout-gym.p.rapidapi.com',
	}
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}