import React, { useCallback, useEffect, useState } from "react";
import { getAllTickets } from "../api/dashboard-api";
import AddNewTicketButton from "../components/AddNewTicketButton";
import TicketsList from "../components/TicketsList";
import { ITicket } from "../types/dashboard-types";

const Dashboard = () => {
  const [tickets, setTickets] = useState<ITicket[]>([]);
  /**
   * send HTTP request to get all tickets and then use setTickets to set the tickets
   */
  const fetchTickets = useCallback(() => {
    getAllTickets().then((res) => setTickets(res));
  }, []);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  return tickets.length ? (
    <div>
      <AddNewTicketButton fetchTickets={fetchTickets} />
      <TicketsList tickets={tickets} fetchTickets={fetchTickets} />
    </div>
  ) : (
    <p>Something went wrong, please check the server.</p>
  );
};

export default Dashboard;
