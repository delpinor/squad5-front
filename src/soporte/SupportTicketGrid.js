import React from 'react'
import TicketGrid from './components/TicketGrid'

const tickets = [
    {
        name: "Musica Open Source",
        status: "ola",
        severity: "ola",
        dueDate: "hoy",
    },
    {
        name: "Musica Open Source",
        status: "ola",
        severity: "ola",
        dueDate: "hoy",
    },
    {
        name: "Musica Open Source",
        status: "ola",
        severity: "ola",
        dueDate: "hoy",
    },
    {
        name: "Musica Open Source",
        status: "ola",
        severity: "ola",
        dueDate: "hoy",
    },
    {
        name: "Musica Open Source",
        status: "ola",
        severity: "ola",
        dueDate: "hoy",
    },
]

export default function SupportTicketGrid() {
    return (
        <div>
            <h2>grilla ticket</h2>
            <TicketGrid/>
        </div>
    )
}
