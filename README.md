# Demo uso da API OpenAI com ligações telefônicas

![slide do webinar](assets/thumb.png)

## Demonstração apresentada no Webinar *Level Up de Voz: Incluindo IA em Chamadas Telefônicas* o dia 05/03/2024.

Para utilizar este exemplo você deve ter uma conta da OpenAI e da Twilio.
* construa um fluxo no Twilio Studio e importe o arquivo `/studio/fluxo.json`
* faça o build de uma cloud function da Twilio que se encontra na pasta `/functions` utilizando a CLI da Twilio com o comando `twilio serverless:deploy`
* ajuste o fluxo do Studio alterando a URL da cloud function no componente `envia_duvida`
* adquira um número no console da Twilio e vincule ele com seu fluxo do Studio