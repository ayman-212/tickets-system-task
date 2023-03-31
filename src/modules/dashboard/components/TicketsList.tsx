import React from "react";
import VirtualizedList from "../../common/VirtualizedList/VirtualizedList";
import TicketItem from "./TicketItem";
import { ITicket } from "../types/dashboard-types";

type TicketsListProps = {
  tickets: ITicket[];
  fetchTickets: () => void;
};

/**
 * this component used to render all the tickets
 */
const TicketsList = ({ tickets, fetchTickets }: TicketsListProps) => {
  return (
    <VirtualizedList
      numItems={tickets.length}
      itemHeight={200}
      viewportHeight={400}
      renderItem={({ index, style }) => {
        const ticket = tickets[index];
        return (
          <div style={style} key={ticket.id}>
            <TicketItem
              ticket={ticket}
              key={ticket.id}
              fetchTickets={fetchTickets}
            />
          </div>
        );
      }}
    />
  );
};

export default TicketsList;
