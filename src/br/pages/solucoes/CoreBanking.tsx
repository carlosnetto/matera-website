import SolutionPage from './SolutionPage';

export default function CoreBanking() {
  return (
    <SolutionPage
      hero={{
        title: 'Core Banking',
        subtitle: 'Transforme a experiência do seu cliente, impulsione o desenvolvimento do seu Banco com uma solução de Core Banking abrangente e flexível, que utiliza tecnologia robusta e pronta para a nuvem.',
        image: '/assets/core_banking_6ece384e18.png',
      }}
      stats={[
        { value: '90 MI', label: 'de contas' },
        { value: '6 BI', label: 'transações Pix/ano' },
        { value: '1.000+', label: 'APIs disponíveis' },
      ]}
      sections={[
        {
          eyebrow: 'CORE BANKING',
          heading: 'O que é Core Banking?',
          body: 'O Core Banking permite que instituições financeiras ofereçam serviços como conta corrente, empréstimos, renda fixa, Pix e SPB em conformidade com as exigências do Banco Central e da Receita Federal.',
        },
        {
          heading: 'Como funciona o Matera Core Banking',
          body: 'A plataforma opera como uma solução completa e modular em cinco áreas centrais.',
          features: [
            { title: 'Conta Digital', description: 'Operação 24x7 com alta performance e disponibilidade. Suporte nativo a todas as categorias de contas.' },
            { title: 'Crédito', description: 'Jornadas completas de crédito para pessoas físicas e jurídicas com análise de risco baseada em IA.' },
            { title: 'Tesouraria', description: 'Gestão completa de operações de tesouraria: renda fixa, derivativos, SWAP, NDF, COE e futuros.' },
            { title: 'Pagamentos', description: 'Pix, Boleto, TED e Débito Automático integrados nativamente à plataforma.' },
            { title: 'Regulatórios', description: 'Conformidade integrada com exigências do Banco Central e Receita Federal.' },
          ],
        },
        {
          heading: 'Para quem é indicado',
          items: [
            'Bancos comerciais, de investimento e múltiplos',
            'Fintechs de crédito e sociedades de crédito direto',
            'Instituições de pagamento',
            'Corretoras e distribuidoras',
            'Sociedades de crédito, financiamento e investimento (CFI)',
            'Cooperativas de crédito (confederações, centrais e singulares)',
          ],
        },
        {
          heading: 'Por que escolher o Matera Core Banking?',
          features: [
            { title: 'Cloud Ready', description: 'Aproveite os principais provedores de nuvem para eficiência e escalabilidade.' },
            { title: 'Modelo SaaS', description: 'Uptime contínuo. Clientes focam nas operações de negócio.' },
            { title: '1.000+ APIs', description: 'Permitem jornadas flexíveis e personalizadas para os clientes.' },
            { title: 'Alta Performance', description: 'Microsserviços e arquitetura orientada a eventos garantem escalabilidade.' },
            { title: 'Time-to-Market Acelerado', description: 'Integração nativa entre todos os serviços acelera o lançamento de produtos.' },
          ],
        },
      ]}
    />
  );
}
