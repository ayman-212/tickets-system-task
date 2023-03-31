import React, { useState } from "react";
import styles from "./VirtualizedList.module.scss";

type IRenderItemParams = {
  index: number;
  style: React.CSSProperties;
};

type VirtualizedListProps = {
  numItems: number;
  itemHeight: number;
  renderItem: ({ index, style }: IRenderItemParams) => React.ReactElement;
  viewportHeight: number;
};

const amountItemsBuffered = 1;

const VirtualizedList = (props: VirtualizedListProps) => {
  const { numItems, itemHeight, renderItem, viewportHeight } = props;
  const [scrollTop, setScrollTop] = useState<number>(0);
  const totalItemsHeight: number = numItems * itemHeight;
  const startIndex: number = Math.max(
    Math.floor(scrollTop / itemHeight) - amountItemsBuffered,
    0
  );

  const endIndex: number = Math.min(
    Math.ceil((scrollTop + viewportHeight) / itemHeight - 1) +
      amountItemsBuffered,
    numItems - 1
  );

  const items: React.ReactElement[] = [];
  for (let i = startIndex; i <= endIndex; i++) {
    items.push(
      renderItem({
        index: i,
        style: {
          position: "absolute",
          top: `${i * itemHeight}px`,
          height: `${itemHeight - 20}px`,
          width: "100%",
        },
      })
    );
  }
  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div
      style={{ height: viewportHeight }}
      className={styles.VirtualizedListWrapper}
      onScroll={onScroll}
    >
      <div style={{ position: "relative", height: `${totalItemsHeight}px` }}>
        {items}
      </div>
    </div>
  );
};

export default VirtualizedList;
