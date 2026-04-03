import SolutionPage from './SolutionPage';

export default function BrDigitalTwin() {
  return (
    <SolutionPage
      hero={{
        title: 'Digital Twin',
        subtitle: 'Ofereça a experiência de contas globais e multimoedas, assegurando uma operação 24x7 preparada para um futuro financeiro cada vez mais transfronteiriço.',
        image: 'https://d2lq74zxbg4jiz.cloudfront.net/f256b50747c42d42d0f76a132c7f5c8e3065aa8e_a905c8ef37.webp',
      }}
      stats={[
        { value: '140 MI', label: 'contas certificadas' },
        { value: '12 mil', label: 'transações por segundo' },
      ]}
      sections={[
        {
          eyebrow: 'DIGITAL TWIN',
          heading: 'O que é o Digital Twin?',
          body: 'Solução omni-cloud que funciona como ledger global de transações de alto volume, nativa para pagamentos instantâneos e preparada para tokens de ativos com alta disponibilidade.',
        },
        {
          heading: 'Ofereça agilidade e conveniência',
          features: [
            { icon: 'https://d2lq74zxbg4jiz.cloudfront.net/medidor_59e7cf9879.svg', title: 'Escale transações', description: 'Escale volumes crescentes de transações com alta performance.' },
            { icon: 'https://d2lq74zxbg4jiz.cloudfront.net/pc_mobile_ebc07f421a.svg', title: 'Unifique experiências', description: 'Unifique experiências digitais por meio de solução adaptável.' },
            { icon: 'https://d2lq74zxbg4jiz.cloudfront.net/money_8209dc8108.svg', title: 'Múltiplos mercados', description: 'Atenda diferentes mercados e moedas com a mesma plataforma.' },
            { icon: 'https://d2lq74zxbg4jiz.cloudfront.net/calculator_4bf90d268a.svg', title: 'Stablecoins', description: 'Integre stablecoins ao sistema financeiro tradicional.' },
          ],
        },
        {
          heading: 'Banco sem fronteiras',
          body: 'Na era das stablecoins, a solução oferece experiência bancária multimoeda, possibilitando transferências instantâneas globais e remessas transfronteiriças com custos reduzidos.',
        },
        {
          heading: 'Expanda suas ofertas com stablecoins',
          items: [
            'Incorporar funcionalidade de controle de contas de stablecoins',
            'Fidelizar clientes com experiências transacionais instantâneas',
            'Expandir fronteiras com interoperabilidade',
            'Posicionar banco como inovador dentro dos limites regulatórios',
            'Aumentar chances de depósitos retornarem ao banco',
            'Desenvolver integrações via API sem conexão direta à blockchain',
          ],
        },
      ]}
    />
  );
}
