import React, { ReactNode, useState } from "react";
import styles from "./VirtualizedList.module.scss";

type IRenderItemParams = {
  index: number;
  style: React.CSSProperties;
};

type VirtualizedListProps = {
  numItems: number;
  itemHeight: number;
  renderItem: ({ index, style }: IRenderItemParams) => ReactNode;
  windowHeight: number;
};

const VirtualizedList = (props: VirtualizedListProps) => {
  const { numItems, itemHeight, renderItem, windowHeight } = props;
  const [scrollTop, setScrollTop] = useState<number>(0);
  const innerHeight: number = numItems * itemHeight;
  const startIndex: number = Math.floor(scrollTop / itemHeight);
  const endIndex: number = Math.min(
    numItems - 1,
    Math.floor((scrollTop + windowHeight) / itemHeight)
  );
  const items: ReactNode[] = [];
  for (let i = startIndex; i <= endIndex; i++) {
    items.push(
      renderItem({
        index: i,
        style: {
          position: "absolute",
          top: `${i * itemHeight}px`,
          height: `${itemHeight - 20}px`,
        },
      })
    );
  }
  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (Math.abs(e.currentTarget.scrollTop - scrollTop) > itemHeight) {
      console.log(e);
      setScrollTop(e.currentTarget.scrollTop);
    }
  };

  return (
    <div
      style={{ height: windowHeight }}
      className={styles.VirtualizedListWrapper}
      onScroll={onScroll}
    >
      <div style={{ position: "relative", height: `${innerHeight}px` }}>
        {items}
      </div>
    </div>
  );
};

export default VirtualizedList;
