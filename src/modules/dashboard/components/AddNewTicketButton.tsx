import React from "react";
import { toast } from "react-toastify";
import Button from "../../common/Button/Button";
import { addNewTicket } from "../api/dashboard-api";
import { ITicket } from "../types/dashboard-types";

type AddNewTicketButtonProps = {
  fetchTickets: () => void;
};

/**
 * @returns a unique id
 */

const generateId: () => string = () => {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
};

/**
 *this component meant to manage adding new ticket
 * @param param0 function gets called after adding a new ticket to retrieve all tickets again.
 */

const AddNewTicketButton = ({ fetchTickets }: AddNewTicketButtonProps) => {
  const newTicket: ITicket = {
    id: generateId(),
    subject: "Cupiditate ipsum quaerat labore molestias suscipit",
    description:
      "Corrupti impedit dignissimos ipsum aliquid. Tenetur repellendus nisi totam ipsa tempora. Quaerat labore molestias suscipit",
    priority: "Medium",
    status: "New",
  };

  const addNewTicketHandler = () => {
    addNewTicket(newTicket)
      .then(() => {
        toast.success("A new task has been added successfully", {
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
    <Button
      title="Add New Ticket"
      type="button"
      onClick={addNewTicketHandler}
    />
  );
};

export default AddNewTicketButton;
