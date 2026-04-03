import SolutionPage from './SolutionPage';
import PageMeta from '../../../shared/components/PageMeta';

export default function GestaoDeRiscos() {
  return (
    <>
    <PageMeta title="Gestão de Riscos" description="Plataforma de riscos regulatórios e gerenciais para instituições financeiras de todos os portes." url="/br/solucoes/gestao-de-riscos" />
    <SolutionPage
      hero={{
        title: 'Gestão de Riscos',
        subtitle: 'Plataforma de riscos regulatórios e gerenciais para todos os tipos de instituições.',
        image: '/assets/Gestao_de_riscos_8a1c0590e6.png',
      }}
      sections={[
        {
          eyebrow: 'GESTÃO DE RISCOS',
          heading: 'O que é Gestão de Riscos?',
          body: 'A geração dos CADOCS regulatórios e controles gerenciais de riscos estão cada vez mais complexos em decorrência da constante transformação do mercado. A solução oferece consistência e integridade de dados para crescimento estratégico.',
        },
        {
          heading: 'Opções de Solução',
          items: [
            'Risco de Mercado Gerencial e Regulatório',
            'Risco de Liquidez Regulatório (DRL)',
            'Capital Regulatório (DLO e DLI)',
            'Plano de Gestão de Capital (GCAP)',
            'Risco de Crédito Regulatório (DRC e CVA)',
            'Gestão de Riscos Operacionais e Corporativos',
            'Riscos Sociais, Ambientais e Climáticos (DRSAC e GRSAC)',
            'Risk as a Service (RaaS)',
          ],
        },
        {
          heading: 'Por que escolher a solução para Gestão de Riscos?',
          features: [
            { title: 'Plataforma Completa', description: 'Dos regulatórios à otimização de processos em uma única solução.' },
            { title: 'Suporte Altamente Especializado', description: 'Equipe com profundo conhecimento regulatório e de mercado.' },
            { title: 'Implementação Ágil', description: 'Implantação rápida com mínima disrupção operacional.' },
            { title: 'Arquitetura Moderna', description: 'Navegabilidade intuitiva e alta performance.' },
            { title: 'Atualização Regulatória Constante', description: 'Acompanhamento contínuo das mudanças do Banco Central.' },
          ],
        },
        {
          heading: 'Diferenciais Matera',
          features: [
            { title: 'Alto Desempenho', description: 'Processamento rápido para grandes volumes de dados.' },
            { title: 'Time to Market acelerado', description: 'Agilidade para atender novas demandas regulatórias.' },
            { title: 'Plataforma Completa e Integrada', description: 'Integração nativa com demais soluções Matera.' },
            { title: 'Conformidade Regulatória', description: 'Integrada aos regulatórios BACEN e Receita Federal.' },
          ],
        },
      ]}
    />
    </>
  );
}
