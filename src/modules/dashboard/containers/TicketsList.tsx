import React from "react";
import VirtualizedList from "../../common/VirtualizedList/VirtualizedList";
import TicketItem from "../components/TicketItem";
import { ITicket } from "../types/dashboard-types";

type TicketsListProps = {
  tickets: ITicket[];
  fetchTickets: () => void;
};
const TicketsList = ({ tickets, fetchTickets }: TicketsListProps) => {
  return (
    <VirtualizedList
      numItems={tickets.length}
      itemHeight={200}
      windowHeight={400}
      renderItem={({ index, style }) => {
        const ticket = tickets[index];
        return (
          <TicketItem
            ticket={ticket}
            key={ticket.id}
            style={style}
            fetchTickets={fetchTickets}
          />
        );
      }}
    />
  );
};

export default TicketsList;
