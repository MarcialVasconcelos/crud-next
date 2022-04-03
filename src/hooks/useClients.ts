import { useEffect, useState } from "react"
import ClientCollection from "../backend/db/ClientCollection"
import Client from "../core/Client"
import ClientRep from "../core/ClientRepository"
import useTableForm from "./useTableForm"

export default function useClients() {
    const repo: ClientRep = new ClientCollection()

    const {
        viewTable, 
        showForm, 
        showTable
    } = useTableForm()

    const [client, setClient] = useState<Client>(Client.void())
    const [clients, setClients] = useState<Client[]>([])
    
    useEffect(getAll, [])

    function getAll() {
        repo.getAll().then(clients => {
            setClients(clients)
            showTable()
        })
    }

    function clientSelected(client: Client) {
        setClient(client)
        showForm()
    }

    async function clientDeleted(client: Client) {
        await repo.delete(client)
        getAll()
    }

    async function saveClient(client: Client) {
        await repo.save(client)
        getAll()
    }

    function newClient() {
        setClient(Client.void())
        showForm()
    }
    return {
        client, 
        clients, 
        viewTable, 
        showTable,
        getAll, 
        clientSelected, 
        clientDeleted, 
        saveClient, 
        newClient,
    }
}