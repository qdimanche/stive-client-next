const baseURL = "https://localhost:7124/";
import useSWR from 'swr';
const response = (...args) => fetch(...args).then(res => res.json())


export default function fetcher(endpoint){
	const {data, error} = useSWR(`${baseURL}${endpoint}`, response)
	
	return {
		data: data,
		isLoading: !error && !data,
		isError: error
	}
}