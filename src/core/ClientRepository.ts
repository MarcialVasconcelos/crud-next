import Client from "./Client";

export default interface ClientRep {
    save(cliente: Client): Promise<Client>
    delete(cliente: Client): Promise<void>
    getAll(): Promise<Client[]>
}