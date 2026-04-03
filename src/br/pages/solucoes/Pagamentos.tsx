import SolutionPage from './SolutionPage';

export default function Pagamentos() {
  return (
    <SolutionPage
      hero={{
        title: 'Pagamentos',
        subtitle: 'A solução Matera Pagamentos garante flexibilidade para integração e capacidade para processamento em grande escala. Ofereça as principais formas de pagamentos como Pix, Boleto, Débito Automático, TED, Contas de Concessionárias, Tributos e Folha de Pagamento.',
        image: '/assets/heropagamentos_d94b60886f.jpg',
      }}
      stats={[
        { value: '90 MI', label: 'de contas' },
        { value: '6 BI', label: 'transações Pix por ano' },
        { value: '70 M', label: 'CPFs/mês em regulatórios BACEN' },
      ]}
      sections={[
        {
          eyebrow: 'PIX',
          heading: 'Pix: desempenho que alavanca negócios',
          body: 'Conecte-se ao Pix com a melhor plataforma do mercado, ofereça estabilidade e desempenho incomparáveis para seus clientes e parceiros.',
        },
        {
          heading: 'Cash Management Corporate Banking',
          body: 'Nossa plataforma de Cash Management capacita instituições a oferecerem serviços de pagamentos de obrigações para clientes corporativos.',
        },
        {
          heading: 'Por que escolher a solução Matera Pagamentos?',
          features: [
            { icon: '/assets/icon_icon4_c4d39fbed2.svg', title: 'Todos os meios de pagamento', description: 'Atendimento completo a todos os meios de pagamento do mercado.' },
            { icon: '/assets/icon_icon4_1_b3d33a4e77.svg', title: 'PF e PJ', description: 'Adequada para demandas de pessoas físicas e jurídicas.' },
            { icon: '/assets/icon_icon4_2_90889a114a.svg', title: 'Alto desempenho', description: 'Alta performance e disponibilidade para operações críticas.' },
            { icon: '/assets/icon_icon4_3_13053d6e7f.svg', title: 'APIs intuitivas', description: 'Integração fácil através de APIs intuitivas e bem documentadas.' },
            { icon: '/assets/icon_icon4_4_12c356e4c6.svg', title: 'Flexibilidade', description: 'Flexibilidade para adaptação às necessidades específicas de cada operação.' },
          ],
        },
      ]}
    />
  );
}
