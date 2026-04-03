import SolutionPage from './SolutionPage';

export default function TesourariaAvancada() {
  return (
    <SolutionPage
      hero={{
        title: 'Tesouraria Avançada',
        subtitle: 'Para tomar decisões estratégicas com confiança, você precisa de clareza. A Matera Tesouraria Avançada oferece uma gestão completa do caixa e derivativos, fornecendo o controle e a segurança que sua instituição precisa.',
        image: 'https://d2lq74zxbg4jiz.cloudfront.net/tesouraria_avancada_b4ea4dab40.webp',
      }}
      sections={[
        {
          eyebrow: 'TESOURARIA AVANÇADA',
          heading: 'O que é a Tesouraria Avançada?',
          body: 'A Matera Tesouraria Avançada é uma solução modular integrada a funcionalidades que agilizam processos internos, aprimoram ferramentas de controle e garantem consistência de informações para a gestão de produtos de tesouraria.',
        },
        {
          heading: 'Módulos da Solução',
          features: [
            { title: 'Swap', description: 'Gerenciar contratos de swaps com múltiplos indexadores e fluxos.' },
            { title: 'Renda Fixa', description: 'Controle de títulos públicos e privados.' },
            { title: 'NDF - Termo de Moeda', description: 'Modalidades simples, paridade e asiático.' },
            { title: 'COE', description: 'Certificado de Operações Estruturadas.' },
            { title: 'BM&F', description: 'Operações de mercado futuro e opções.' },
            { title: 'Caixa Online', description: 'Controle de fluxo de caixa em tempo real.' },
            { title: 'Opções CETIP', description: 'Módulo focado em opções de taxa de juro.' },
          ],
        },
        {
          heading: 'Diferenciais da solução',
          features: [
            { title: 'Tecnologia e Performance', description: 'Processamento de alta velocidade para operações complexas.' },
            { title: 'Integração com Legados', description: 'Conexão com sistemas existentes sem disrupção.' },
            { title: 'Integração e Automação', description: 'Processos automatizados para maior eficiência operacional.' },
            { title: 'Time-to-market Acelerado', description: 'Implementação entre 4 e 6 meses, em média.' },
            { title: 'Conformidade Regulatória', description: 'Aderente às normas do Banco Central e reguladores.' },
            { title: 'Extensibilidade e APIs', description: 'APIs para integrações personalizadas e expansão de funcionalidades.' },
          ],
        },
      ]}
    />
  );
}
