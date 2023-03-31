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

/**
 *
 * @param props
 * numItems : is the number of total items list
 * itemHeight : the height of each element in the list
 * viewPortHeight : the height of the scrollable area
 * renderItem : function that returns the items in the list
 */

const VirtualizedList = (props: VirtualizedListProps) => {
  const { numItems, itemHeight, renderItem, viewportHeight } = props;
  const [scrollTop, setScrollTop] = useState<number>(0); //It’s the distance between the top of the inner container and its visible part.
  const totalItemsHeight: number = numItems * itemHeight; //the total height of the list itself
  const startIndex: number = Math.max(
    //the index of the first element to be rendered in the list
    Math.floor(scrollTop / itemHeight) - amountItemsBuffered,
    0
  );

  const endIndex: number = Math.min(
    //the index of the last element to be rendered in the list
    Math.ceil((scrollTop + viewportHeight) / itemHeight - 1) +
      amountItemsBuffered,
    numItems - 1
  );

  const listItems: React.ReactElement[] = [];
  for (let i = startIndex; i <= endIndex; i++) {
    listItems.push(
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
        {listItems}
      </div>
    </div>
  );
};

export default VirtualizedList;
