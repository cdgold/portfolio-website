export enum iconTypes { 
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

export interface Project {
    title: string;
    titleImg?: string;
    subtitle?: string;
    codeUrl?: string;
    bullets?: Array<string>;
    url?: string;
    icons: iconTypes;
}