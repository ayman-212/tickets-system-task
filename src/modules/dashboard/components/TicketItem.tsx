import React from "react";
import { ITicket } from "../types/dashboard-types";
import styles from "./TicketItem.module.scss";
import { ReactComponent as DeleteIcon } from "../../../assets/delete-bin.svg";
import { deleteTicket } from "../api/dashboard-api";
import { toast } from "react-toastify";

type TicketItemProp = {
  ticket: ITicket;
  fetchTickets: () => void;
};

/**
 *this component meant to manage the ticket details and also deleting a certain ticket
 * @param param0 the ticket details
 * @param param1 function gets called after deleting a ticket to retrieve all tickets again.
 */
const TicketItem = ({ ticket, fetchTickets }: TicketItemProp) => {
  const { subject, description, priority, status, id } = ticket;

  const deleteTicketHandler = () => {
    deleteTicket(id)
      .then(() => {
        toast.success("The task has been deleted successfully", {
          position: "bottom-right",
        });
        fetchTickets();
      })
      .catch(() => {
        toast.error("Something went wrong, please try again later", {
          position: "top-right",
        });
      });
  };

  return (
    <div className={styles.TicketItemContainer}>
      <div className={styles.TitleWrapper}>
        <h3>{subject}</h3>
        <span onClick={deleteTicketHandler}>
          <DeleteIcon />
        </span>
      </div>
      <p>{description}</p>
      <div className={styles.PriorityAndStatueWrapper}>
        <span className={styles[priority]}>{priority}</span>
        <span className={styles[status]}>{status}</span>
      </div>
    </div>
  );
};

export default TicketItem;
