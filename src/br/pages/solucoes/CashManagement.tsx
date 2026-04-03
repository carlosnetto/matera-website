import SolutionPage from './SolutionPage';
import PageMeta from '../../../shared/components/PageMeta';

export default function CashManagement() {
  return (
    <>
    <PageMeta title="Cash Management" description="Gestão integrada de pagamentos e recebíveis para instituições financeiras. Processamento em lote e Pix." url="/br/solucoes/cash-management" />
    <SolutionPage
      hero={{
        title: 'Cash Management',
        subtitle: 'Atenda seus clientes corporativos por meio de uma oferta integrada de Pagamentos e Recebíveis, proporcionando uma melhor gestão de fluxo de caixa e serviços de alto valor agregado.',
        image: '/assets/imagem_cash_management_solution_9c5a2831d3.webp',
      }}
      sections={[
        {
          eyebrow: 'CASH MANAGEMENT',
          heading: 'O que é Cash Management?',
          body: 'Cash Management é o serviço gerenciador de pagamentos e recebimentos para Instituições Financeiras (IF) e Instituições de Pagamentos (IP). Com arquitetura de alta tecnologia, potencializa a operação oferecendo processamento em lote, gerenciamento de agendamentos e lançamentos em contas via Pix.',
        },
        {
          heading: 'Pagamentos Eficientes e Flexíveis',
          body: 'Plataforma com suporte CNAB que garante compatibilidade e facilita integração de operações de pagamento de obrigações.',
        },
        {
          heading: 'Recebíveis Gerenciados de Forma Eficaz',
          body: 'Visão completa de recebíveis via Boleto, Pix e Cartão de Crédito com integração nativa ao SLC.',
        },
        {
          heading: 'Para quem é indicado',
          items: [
            'Instituições Financeiras (IF)',
            'Instituições de Pagamentos (IP)',
            'Bancos',
            'Fintechs',
          ],
        },
        {
          heading: 'Por que escolher Matera?',
          features: [
            { title: 'Alto Desempenho', description: 'Processamento em alta escala com disponibilidade contínua.' },
            { title: 'Tecnologia Avançada', description: 'Arquitetura moderna pronta para a nuvem.' },
            { title: 'Time to Market acelerado', description: 'Integração rápida com sistemas existentes.' },
            { title: 'Plataforma Completa e Integrada', description: 'Pagamentos e recebíveis em uma única plataforma.' },
            { title: 'Conformidade Regulatória', description: 'Aderente às exigências do Banco Central e Receita Federal.' },
          ],
        },
      ]}
    />
    </>
  );
}
