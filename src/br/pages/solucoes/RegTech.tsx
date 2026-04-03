import SolutionPage from './SolutionPage';

export default function RegTech() {
  return (
    <SolutionPage
      hero={{
        title: 'RegTech',
        subtitle: 'Tenha suporte completo às exigências do Banco Central e da Receita Federal, conferindo segurança e credibilidade para sua operação.',
        image: '/assets/regtech_7b8efd5a0c.png',
      }}
      stats={[
        { value: '1.000+', label: 'APIs disponíveis' },
        { value: '~11%', label: 'market share no Pix' },
        { value: '7,2 BI+', label: 'transações processadas' },
      ]}
      sections={[
        {
          eyebrow: 'REGTECH',
          heading: 'O que é RegTech?',
          body: 'RegTech (Regulatory Technology) é o termo utilizado para definir um conjunto de soluções que simplificam o cumprimento das exigências regulatórias por meio da tecnologia.',
        },
        {
          heading: 'Regulação para SPSAVs',
          body: 'Solução para operar ativos virtuais com rigor de governança, simplificando conformidade do Sistema Financeiro Nacional.',
        },
        {
          heading: 'Ferramentas disponíveis',
          items: [
            'Sistema contábil completo (períodos, fechamentos, lançamentos, balancetes, demonstrações)',
            'Regulatórios fiscais para instituições financeiras',
            'Regulatórios do Banco Central para múltiplas atividades',
          ],
        },
        {
          heading: 'Cobertura regulatória',
          items: [
            'COSIF e Reportes contábeis',
            'Bacen Jud e CCS',
            'E-Financeira',
            'FGC',
            'Central de Riscos (SCR)',
            'Cadastro Positivo',
            'SIMBA',
            'SPED (ECD, ECF, EFD-Reinf)',
          ],
        },
        {
          heading: 'Por que escolher a solução RegTech?',
          features: [
            { title: 'Atualizações constantes', description: 'Acompanhamento contínuo das mudanças regulatórias.' },
            { title: 'Integração nativa', description: 'Conexão direta com outras soluções Matera.' },
            { title: 'Consolidação de dados legados', description: 'Migração e unificação de dados de sistemas anteriores.' },
            { title: 'Diversos tipos e portes', description: 'Atendimento a instituições de todos os tamanhos.' },
            { title: 'Expertise regulatória', description: 'Décadas de experiência com regulação do mercado financeiro brasileiro.' },
          ],
        },
      ]}
    />
  );
}
