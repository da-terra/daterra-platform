import React, { Fragment } from "react";

const blocksMap: Record<
  string,
  React.LazyExoticComponent<React.FunctionComponent<{}>>
> = {
  "c0-navigation": React.lazy(() => import("./Navigation")),
  "c1-hero": React.lazy(() => import("./Hero")),
  "c2-featured-articles": React.lazy(() => import("./Navigation"))
};

type BlockRendererProps = {
  blocks: { type: string; data: any }[];
};

const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks }) => (
  <Fragment>
    {blocks.map(block => {
      const Component = blocksMap[block.type];

      if (!Component) {
        throw new Error(`Block ${block.type} does not exist`);
      }

      return <Component {...block.data} key={block.type} />;
    })}
  </Fragment>
);

export default BlockRenderer;
