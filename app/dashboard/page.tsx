"use client";
import React, { useState, useEffect } from "react";

type Ticket = {
  id: string;
  status: "pending" | "resolved" | "ongoing";
  problem: string;
};

const statusColors: Record<string, string> = {
  resolved: "bg-green-500",
  pending: "bg-yellow-500",
  ongoing: "bg-blue-500",
};

const TicketCards = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json");
        const json = await res.json();
        setTickets(json.tickets);
      } catch (error) {
        console.error("Error fetching ticket data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredTickets = tickets.filter((ticket) => {
    return statusFilter === "all" || ticket.status === statusFilter;
  });

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <h1 className="text-5xl font-semibold text-gray-900 text-center mb-10"> 
        🎫 Grievance Tickets Dashboard 
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["all", "pending", "resolved", "ongoing"].map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-5 py-2 rounded-full border text-sm font-semibold transition-all duration-200 ${
              statusFilter === status
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredTickets.map((ticket) => (
          <div
            key={ticket.id}
            className={`rounded-xl shadow-lg p-6 transition-transform duration-200 hover:scale-[1.015] ${statusColors[ticket.status]} text-white`}
          >
            <h2 className="text-2xl font-semibold mb-3">
              Ticket #{ticket.id}
            </h2>
            <p className="mb-2">
              <span className="font-medium">Status:</span>{" "}
              {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
            </p>
            <p>
              <span className="font-medium">Problem:</span> {ticket.problem}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketCards;
