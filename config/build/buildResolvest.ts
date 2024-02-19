import  webpack  from "webpack"

export function buildResorvest (): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}