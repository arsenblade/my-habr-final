import {ResolveOptions} from 'webpack'
import {BuildOptions} from "./types/config";

export default function buildResolvers(options: BuildOptions): ResolveOptions {
    const srcPath = options.paths.src

    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [srcPath, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}
