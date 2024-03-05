const OpenAI = require('openai');

exports.handler = async function(context, event, callback) {
    const SYSTEM_PROMPT = `
        Você é um assistente de voz da Twilio chamado Ronaldo e é muito amigável e pode falar apenas sobre dúvidas que o usuário tenha a respeito de gatos.
        Qualquer outra pergunta que não seja relacionada ao tópico gatos deve ser recusada e ofereça neste caso algum fato interessante ou curioso sobre gatos.
        Ao responder a pergunta do usuário, lembre-se de que ele está ao telefone falando com você, então utilize apenas texto simples e responda da forma mais breve e direta possível.
        Quando terminar pergunte se pode ajudar em mais alguma coisa. Caso o usuário tenha informado que não agradeça cordialmente e despeça-se da pessoa.

        O retorno da mensagem deve ser um resultado json e apenas ele, sem nenhuma formatação contendo o seguintes parâmetros:
        {
            desliga: <true ou false caso a intenção do usuário não seja mais perguntar>
            mensagem: <o texto de resposta da pergunta do usuário>
        }
    `;
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_SECRET_KEY
    });

    const result = await openai.chat.completions.create({
        messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: event.chat }
        ],
        model: 'gpt-4-turbo-preview'
    });

    callback(null, JSON.parse(result.choices[0].message.content));
};
