import React, { useCallback, useEffect, useState } from "react";
import { getAllTickets } from "../api/dashboard-api";
import AddNewTicketButton from "../containers/AddNewTicketButton";
import TicketsList from "../containers/TicketsList";
import { ITicket } from "../types/dashboard-types";

const Dashboard = () => {
  const [tickets, setTickets] = useState<ITicket[]>([]);

  const fetchTickets = useCallback(() => {
    getAllTickets().then((res) => setTickets(res));
  }, [setTickets]);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  return (
    <>
      <AddNewTicketButton fetchTickets={fetchTickets} />
      <TicketsList tickets={tickets} fetchTickets={fetchTickets} />
    </>
  );
};

export default Dashboard;
