import PageHero from '../../shared/components/PageHero';

export default function PoliticaDePrivacidade() {
  return (
    <>
      <PageHero title="Política de Privacidade" />
      <section style={{ padding: '80px 0' }}>
        <div className="container blog-content" style={{ maxWidth: '800px' }}>

          <p>A Matera Systems Informática S.A. desenvolve tecnologia para o mercado financeiro, operando sob a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018). A empresa compromete-se com transparência no tratamento de dados pessoais de clientes, colaboradores, fornecedores e parceiros.</p>
          <p>Para dúvidas sobre privacidade, contatar: <a href="mailto:lgpd@matera.com" style={{ color: 'var(--matera-purple)', fontWeight: 600 }}>lgpd@matera.com</a></p>

          <h2>Informações Coletadas</h2>

          <h3>1. Informações Fornecidas Pelo Usuário</h3>
          <ul>
            <li><strong>Dados de contato:</strong> nome, telefone, e-mail, empresa, cargo, faturamento</li>
            <li><strong>Redes sociais:</strong> dados coletados de plataformas de marketing terceirizadas</li>
            <li><strong>Processo seletivo:</strong> CPF, data de nascimento, histórico profissional e acadêmico, dados de diversidade (opcional)</li>
            <li><strong>Bootcamp Instituto Matera:</strong> nome completo, LinkedIn, experiência profissional</li>
            <li><strong>Relatório de Sustentabilidade:</strong> nome e imagem mediante autorização</li>
          </ul>

          <h3>2. Informações Geradas em Comunicação</h3>
          <ul>
            <li>Registros de acesso (IP, data, hora) conforme Lei 12.965/2014</li>
            <li>Metadados de comunicações (data, IP, hora, conteúdo)</li>
            <li>Dados de download de e-books</li>
          </ul>

          <h2>Como os Dados São Utilizados</h2>
          <ul>
            <li>Oferecer soluções comerciais apropriadas</li>
            <li>Enviar notificações e alertas</li>
            <li>Comunicações sobre produtos, serviços e eventos</li>
            <li>Publicidade direcionada</li>
            <li>Análise de processos seletivos</li>
            <li>Detecção de fraudes</li>
            <li>Cumprimento de obrigações legais</li>
          </ul>

          <h2>Retenção de Dados</h2>
          <p>Os dados permanecem enquanto necessários para atingir as finalidades descritas. Após encerramento da relação, podem ser mantidos conforme exigências legais e prazos de defesa.</p>

          <h2>Compartilhamento de Informações</h2>
          <p>A Matera pode transferir dados entre países onde opera, respeitando mecanismos da LGPD. Autoridades regulatórias podem receber dados mediante obrigação legal.</p>

          <h2>Uso de Cookies</h2>
          <p>O site utiliza Google Analytics para avaliar interações. Usuários podem gerenciar cookies via navegador, embora isso possa limitar funcionalidades. A plataforma não coleta dados sensíveis (biometria, saúde, religião).</p>

          <h2>Segurança</h2>
          <p>A Matera adota medidas de mercado para proteger dados contra perda, alteração ou vazamento. Acesso restrito a pessoal autorizado. Usuários são responsáveis por manter senhas seguras e notificar acessos não autorizados.</p>

          <h2>Direitos do Titular</h2>
          <ul>
            <li>Consulta gratuita sobre tratamento de dados</li>
            <li>Validação de identidade obrigatória</li>
            <li>Requisições via <a href="mailto:lgpd@matera.com" style={{ color: 'var(--matera-purple)', fontWeight: 600 }}>lgpd@matera.com</a></li>
          </ul>
          <p>Requisições podem ser rejeitadas por motivos formais ou legais, com justificativas apresentadas.</p>

          <h2>Transferência Internacional de Dados</h2>
          <p>A Matera trabalha com fornecedores em diferentes países. Todas as transferências seguem a LGPD e resoluções ANPD, priorizando jurisdições com proteção equivalente.</p>

          <h2>Atualizações</h2>
          <p>A política pode ser alterada conforme necessário. <strong>Última atualização: Julho de 2025.</strong></p>

        </div>
      </section>
    </>
  );
}
