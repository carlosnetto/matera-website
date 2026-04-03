import SolutionPage from './SolutionPage';
import PageMeta from '../../../shared/components/PageMeta';

export default function Credito() {
  return (
    <>
    <PageMeta title="Plataforma de Crédito" description="Tecnologia para concessão de crédito com eficiência e agilidade. Consignado, crédito pessoal, CDC e capital de giro." url="/br/solucoes/credito" />
    <SolutionPage
      hero={{
        title: 'Plataforma de Crédito',
        subtitle: 'Tecnologia para conceder crédito com eficiência e agilidade para as jornadas de pessoas físicas e jurídicas.',
        image: '/assets/plataforma_de_credito_matera_solucao_de_credito_dbe273c5a3.webp',
      }}
      sections={[
        {
          eyebrow: 'PESSOA FÍSICA',
          heading: 'Plataforma de Crédito para Pessoa Física',
          features: [
            { icon: '/assets/icon_icon6_a2b3d8c63e.svg', title: 'Consignado Público e Privado', description: 'Crédito com desconto em folha para servidores públicos e funcionários do setor privado.' },
            { icon: '/assets/icon_icon6_1_ea392c431a.svg', title: 'Crédito Pessoal', description: 'Com e sem garantia FGTS para pessoas físicas.' },
            { icon: '/assets/icon_icon6_2_cacd25a7a5.svg', title: 'CDC Digital', description: 'Crédito direto ao consumidor em formato totalmente digital.' },
            { icon: '/assets/icon_icon6_3_af61005cc4.svg', title: 'CDC Veículos', description: 'Financiamento de veículos com agilidade e segurança.' },
            { icon: '/assets/icon_icon6_4_39c8910494.svg', title: 'Previdências', description: 'Soluções de crédito para beneficiários de previdência.' },
          ],
        },
        {
          eyebrow: 'PESSOA JURÍDICA',
          heading: 'Plataforma de Crédito para Pessoa Jurídica',
          features: [
            { icon: '/assets/icon_icon6_5_5a7f754ed9.svg', title: 'Capital de Giro', description: 'Linha de crédito para manter e expandir operações empresariais.' },
            { icon: '/assets/icon_icon6_6_bc7d879f85.svg', title: 'Desconto de Recebíveis', description: 'Antecipação de recebíveis para melhorar o fluxo de caixa.' },
          ],
        },
        {
          heading: 'Solução de Crédito',
          body: 'Amplie a concessão sem aumentar o risco e tenha visibilidade na avaliação de clientes sem histórico a partir de modelos de IA.',
        },
        {
          heading: 'O que oferecemos',
          features: [
            { title: 'Suíte completa de recursos', description: 'Todas as modalidades de crédito em uma única plataforma.' },
            { title: 'Conversão ágil', description: 'Processos otimizados para converter leads em clientes rapidamente.' },
            { title: 'Crédito com risco reduzido', description: 'Análise de risco baseada em IA para redução de inadimplência.' },
            { title: 'Modelo SaaS', description: 'Operação contínua e escalável na nuvem.' },
            { title: 'Integração com Caixa Econômica', description: 'Conexão nativa para operações de crédito consignado.' },
          ],
        },
      ]}
    />
    </>
  );
}
