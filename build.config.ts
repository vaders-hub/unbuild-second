import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["./src/index"],
  outDir: "dist",
  rollup: {
    emitCJS: true,
    cjsBridge: true,
  },
  declaration: true,
});
