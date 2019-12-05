import React, { Fragment } from "react";

const blocksMap: Record<
  string,
  React.LazyExoticComponent<React.FunctionComponent<any>>
> = {
  "c1-footer": React.lazy(() => import("./Footer")),
  "c2-hero": React.lazy(() => import("./Hero")),
  "c3-articles-list": React.lazy(() => import("./ArticlesList")),
  "c4-call-to-action": React.lazy(() => import("./CallToAction")),
  "c5-featured-events": React.lazy(() => import("./FeaturedEvents")),
  "c6-partners": React.lazy(() => import("./Partners")),
  "c7-header": React.lazy(() => import("./Header")),
  "c8-quickscan-profile-hero": React.lazy(() =>
    import("./QuickscanProfileHero")
  ),
  "c9-quickscan-profile-sidebar": React.lazy(() =>
    import("./QuickscanProfileSidebar")
  ),
  "c10-quickscan-profile-body": React.lazy(() =>
    import("./QuickscanProfileBody")
  )
};

type BlockRendererProps = {
  blocks: { type: string; data: any }[];
  context?: any;
};

const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks, context }) => (
  <Fragment>
    {blocks.map(block => {
      const Component = blocksMap[block.type];

      if (!Component) {
        throw new Error(`Block ${block.type} does not exist`);
      }

      return <Component {...context} {...block.data} key={block.type} />;
    })}
  </Fragment>
);

export default BlockRenderer;
