export default ({ login, name }) => `
query {
  repositoryOwner (login: ${login}) {
    repository(name: ${name}) {
      forks {
        totalCount
      }
      issues {
        totalCount
      }
      stargazers {
        totalCount
      }
      watchers {
        totalCount
      }
      pullRequests {
        totalCount
      }
    }
  }
}
`;