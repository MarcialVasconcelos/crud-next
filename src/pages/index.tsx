import Button from "../components/Button"
import Form from "../components/Form"
import Layout from "../components/Layout"
import Table from "../components/Table"
import useClients from "../hooks/useClients"

export default function Home() {

  const {
    client, 
    clients, 
    viewTable,
    showTable,
    clientSelected, 
    clientDeleted, 
    saveClient, 
    newClient,
  } = useClients()

  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-900 to-orange-700 
    text-white
    `}>
      <Layout title="Cadastro">
        {viewTable ? (
          <>
            <div className="flex justify-end">       
              <Button className="mb-4"
                onClick={newClient}
              >Novo Cliente</Button>
            </div>
            <Table 
            clients={clients}
            clientSelected={clientSelected}
            clientDeleted={clientDeleted}></Table>
          </>
        ) : (
          <Form 
            client={client}
            onChange={saveClient}
            cancel={showTable}
          />
        )}
      </Layout>
    </div>
  )
}
