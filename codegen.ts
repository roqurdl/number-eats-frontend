import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: " http://localhost:4000/graphql",
  documents: ["./src/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/types.ts": {
      preset: "import-types",
      plugins: ["typescript", "typescript-operations"],
      presetConfig: {
        typesPath: "types.ts",
      },
    },
  },
};

export default config;
