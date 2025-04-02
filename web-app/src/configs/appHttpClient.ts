import { HttpClient } from '@/lib';

const appHttpClient = new HttpClient(import.meta.env.VITE_API_URL);

export default appHttpClient;
