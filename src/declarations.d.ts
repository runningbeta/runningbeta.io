// package.json
declare module "*/package.json" {
  export const version: string;
  export const author: string;
}

declare module "*.json" {
  const value: any;
  export default value;
}

declare const graphql: (query: TemplateStringsArray) => void;

declare module "disqus-react" {
  export class DiscussionEmbed extends React.Component<
    {
      shortname: string;
      config: {
        url?: string;
        identifier?: string;
        title?: string;
      };
    },
    {}
  > {}
}

declare module "*.svg" {
  const content: any;
  export default content;
}
