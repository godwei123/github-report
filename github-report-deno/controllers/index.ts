import {config} from "https://github-report-deno.land/x/dotenv/mod.ts";
import {Octokit} from "https://cdn.skypack.dev/octokit?dts";


const octokit = new Octokit({auth: config().auth});

export const getGitHubReportInfo = async ({response}:{response: any}) => {
    const data = await octokit.graphql(`
        query MyQuery {
          viewer {
            createdAt
            avatarUrl(size: 10)
            followers {
              totalCount
            }
            following {
              totalCount
            }
            issues {
              totalCount
            }
            login
            repositories {
              totalCount
            }
          }
        }`
    )
    response.body = {
        success: true,
        data
    };
}

/**

 repositories(
 orderBy: {field: CREATED_AT, direction: ASC}
 privacy: PUBLIC
 first: 10
 ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        createdAt
        collaborators {
          totalCount
        }
        description
        forkCount
        id
        languages {
          totalCount
        }
        name
        stargazerCount
      }
    }
 */
