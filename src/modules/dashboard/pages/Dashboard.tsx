import React, { useCallback, useEffect, useState } from "react";
import { getAllTickets } from "../api/dashboard-api";
import AddNewTicketButton from "../containers/AddNewTicketButton";
import TicketsList from "../containers/TicketsList";
import { ITicket } from "../types/dashboard-types";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const [tickets, setTickets] = useState<ITicket[]>([]);

  const fetchTickets = useCallback(() => {
    getAllTickets().then((res) => setTickets(res));
  }, [setTickets]);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  return (
    <div className={styles.Wrapper}>
      <AddNewTicketButton fetchTickets={fetchTickets} />
      <TicketsList tickets={tickets} fetchTickets={fetchTickets} />
    </div>
  );
};

export default Dashboard;
