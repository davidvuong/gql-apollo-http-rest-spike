# gql-apollo-http-rest-spike

**Welcome to gql-apollo-http-rest-spike!**

## Development

Clone repository:

```bash
git clone git@github.com:davidvuong/gql-apollo-http-rest-spike.git
```

Install dependencies:

```bash
yarn
```

Start both GraphQL and HTTP servers:

```bash
yarn start
```

Open the GraphQL console to query data:

```bash
open http://localhost:8081/graphql
```

## Learnings

- Forget about creating a HTTP REST API. Do all the work within the GQL layer
- Use `graphql-code-generator` to create TypeScript interfaces
- Use `dataloader` to batch and apollo's natively supported cache for caching
