import {Octokit} from '@octokit/rest';

export interface IGithubFetchResponseType {
    name: string,
    download_url: string | null
}

export async function fetchGitHubImages() {
    const octokit = new Octokit();
    const owner = process.env.REPO_OWNER!;
    const repo = process.env.REPO_NAME!;

    try {
        const response = await octokit.repos.getContent({
            owner,
            repo,
            path: '', // path to the directory, empty for the root
        });

        if (Array.isArray(response.data)) {
            const images = response.data
                .filter((item) => item.type === 'file' && item.name.match(/\.(jpg|jpeg|png|gif)$/i))
                .map((item): IGithubFetchResponseType => ({
                    name: item.name,
                    download_url: item.download_url,
                }));

            return {images};
        } else {
            throw new Error('Unexpected response from GitHub API');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching data from GitHub API');
    }
}
