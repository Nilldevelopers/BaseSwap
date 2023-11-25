import {Octokit} from "@octokit/rest";


export async function fetchGitHubTokens(){
    const octokit = new Octokit();
    const owner = process.env.REPO_OWNER!;
    const repo = process.env.REPO_NAME!;

    try {
        const response = await octokit.repos.getContent({
            owner,
            repo,
            path: '/token', // path to the directory, empty for the root
        });

        if (Array.isArray(response.data)) {
            const tokens = response.data
                .filter((item) => item.type === 'file' && item.name.match(/\.(json)$/i))
                .map((item): any => ({
                    name: item.name,
                    download_url: item.download_url,
                }));

            return {tokens};
        } else {
            throw new Error('Unexpected response from GitHub API');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching data from GitHub API');
    }
}