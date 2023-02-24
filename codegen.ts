import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000/graphql",
  documents: ["./src/**/*.tsx"],
  generates: {
    "./src/gql/types.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};
export default config;
