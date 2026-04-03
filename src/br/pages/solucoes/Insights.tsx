import SolutionPage from './SolutionPage';

export default function Insights() {
  return (
    <SolutionPage
      hero={{
        title: 'Insights',
        subtitle: 'Transforme dados transacionais em decisões inteligentes. A Matera Insights é o seu hub de dados e inteligência artificial.',
        image: '/assets/Imagem_Solucoes_Matera_Insights_home_1280px_5bd7793518.png',
      }}
      sections={[
        {
          eyebrow: 'INSIGHTS',
          heading: 'O que é a Matera Insights?',
          body: 'A Matera Insights auxilia as principais instituições financeiras a entenderem o comportamento dos seus clientes por meio de dados e agentes de IA.',
        },
        {
          heading: 'Prompt Banking: um novo paradigma',
          body: 'Converse com os agentes de IA para consultar, analisar e visualizar dados de forma prática. Um novo paradigma para interagir com dados bancários.',
        },
        {
          heading: 'Camada Analítica',
          body: 'Convertemos dados transacionais complexos em uma estrutura analítica moderna e acessível, criando a base sólida para decisões inteligentes.',
        },
        {
          heading: 'Inteligência em Crédito',
          features: [
            { title: 'Behavior Score', description: 'Análise comportamental para avaliação de risco de crédito.' },
            { title: 'Propensão à inadimplência', description: 'Modelos preditivos para antecipar riscos de default.' },
            { title: 'Collection Score', description: 'Priorização inteligente de ações de cobrança e recuperação.' },
          ],
        },
        {
          heading: 'Rentabilização & Fidelização',
          features: [
            { title: 'Score de Principalidade', description: 'Identifique o grau de engajamento do cliente com a instituição.' },
            { title: 'Sensibilidade a Preço', description: 'Entenda a elasticidade de preço de cada cliente.' },
            { title: 'Propensão a Churn', description: 'Antecipe e previna a perda de clientes.' },
            { title: 'Next Best Offer', description: 'Recomendações personalizadas de produtos para cada cliente.' },
          ],
        },
        {
          heading: 'Por que escolher a solução Insights?',
          features: [
            { title: 'Agentes de IA', description: 'Inteligência artificial aplicada a análises e decisões bancárias.' },
            { title: 'Modelos pré-validados', description: 'Modelos prontos para uso, testados no mercado financeiro.' },
            { title: 'Analytics personalizável', description: 'Flexibilidade para adaptar análises às necessidades específicas.' },
            { title: 'Motor de decisão', description: 'Engine personalizada para automatizar decisões de negócio.' },
            { title: 'Integração com Matera', description: 'Conexão nativa com todos os módulos da plataforma.' },
          ],
        },
      ]}
    />
  );
}
