import api from "../../../config/axios";
import { ITicket } from "../types/dashboard-types";

const END_POINT = "tickets";

export const getAllTickets = async () => {
  const response = await api.get<ITicket[]>(`${END_POINT}`);
  return response.data;
};

export const addNewTicket = async (ticket: ITicket) => {
  const response = await api.post<ITicket>(`${END_POINT}`, ticket);
  return response.data;
};

export const deleteTicket = async (id: string) => {
  const response = await api.delete<{}>(`${END_POINT}/${id}`);
  return response.data;
};
