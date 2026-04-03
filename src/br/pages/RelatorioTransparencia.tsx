import PageHero from '../../shared/components/PageHero';

const reports = [
  {
    year: '2025',
    files: [
      { label: 'Relatório 1º Semestre 2025', url: 'https://d2lq74zxbg4jiz.cloudfront.net/Relatorio_Igualdade_Salarial_Lote_2026_1_57040040000184_1_1_f566f1424e.pdf' },
      { label: 'Relatório Outubro 2025', url: 'https://d2lq74zxbg4jiz.cloudfront.net/Relatorio_de_Transparencia_outubro2025_a6fb38203e.pdf' },
    ],
  },
  {
    year: '2024',
    files: [
      { label: 'Relatório Matriz', url: 'https://d2lq74zxbg4jiz.cloudfront.net/Matriz_CNPJ_57_040_040_0001_84_24_03_2025_69bf790b81.pdf' },
      { label: 'Relatório Filial', url: 'https://d2lq74zxbg4jiz.cloudfront.net/Filial_CNPJ_57_040_040_0003_46_24_03_2025_3420d7d2bc.pdf' },
    ],
  },
];

export default function RelatorioTransparencia() {
  return (
    <>
      <PageHero title="Relatório de Transparência e Igualdade Salarial" />
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ color: '#444', lineHeight: 1.8, marginBottom: '24px' }}>
            A Matera, em cumprimento com as obrigações legais, publica o Relatório de Transparência e Igualdade Salarial de Mulheres e Homens, conforme a Lei da Igualdade Salarial nº 14.611/2023.
          </p>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: '48px', fontSize: '0.9rem' }}>
            Os relatórios foram elaborados pelo Ministério do Trabalho e Emprego e consideram apenas a classificação CBO, não refletindo critérios como senioridade previstos no art. 461 da CLT.
          </p>

          {reports.map((r) => (
            <div key={r.year} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '16px' }}>
                {r.year}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {r.files.map((f) => (
                  <a
                    key={f.url}
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '16px 24px',
                      backgroundColor: 'var(--matera-gray)',
                      borderRadius: '8px',
                      color: 'var(--matera-purple)',
                      fontWeight: 600,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    {f.label}
                    <span>↓ PDF</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
