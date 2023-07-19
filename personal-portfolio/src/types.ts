export enum iconType { 
    React = "react",
    Html = "html",
    Sql = "sql",
    Mongodb = "mongodb",
    Node = "node",
    Css = "css",
    Python = "python",
    Java = "java",
    Express = "express",
    CPlusPlus = "cplusplus",
    Typescript = "typescript",
    Javascript = "javascript"
  }

type TechIcon = "react" | "styled-components" | "node" | "express" | "mongodb" | "postgres" | "html" | "css"

export interface Project {
    title: string;
    titleImg?: string;
    subtitle?: string;
    codeUrl?: string;
    bullets?: Array<string>;
    url?: string;
    tech: Array<TechIcon>;
    images?: Array<string>;
}