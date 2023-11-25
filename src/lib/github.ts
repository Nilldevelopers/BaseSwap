import axios from 'axios';

const githubToken = process.env.GITHUB_TOKEN;

const githubApi = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `Bearer ${githubToken}`,
    },
});

export const getImagesFromRepo = async (owner: string, repo: string) => {
    try {
        const response = await githubApi.get(`/repos/${owner}/${repo}/contents`);
        return response.data.filter((item: any) => item.type === 'file' && item.name.match(/\.(jpg|jpeg|png|gif)$/i));
    } catch (error) {
        // @ts-ignore
        console.error('Error fetching images from GitHub:', error.message);
        throw error;
    }
};
