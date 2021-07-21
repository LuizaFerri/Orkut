import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if (request.method === 'POST') {
        const TOKEN = '5ee84813c0029c7cbcf066b1f5272d';
        const client = new SiteClient(TOKEN);
        const registroCriado = await client.items.create({
            itemType: "968540",
            ...request.body,
        })

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}

