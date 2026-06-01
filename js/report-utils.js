(function () {
    function escapeHtml(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function buildSummaryCards(cards = []) {
        return cards
            .filter(card => card && card.value !== undefined && card.value !== null)
            .map(card => `
                <div class="summary-card">
                    <strong>${escapeHtml(card.value)}</strong>
                    <span>${escapeHtml(card.label || '')}</span>
                </div>
            `)
            .join('');
    }

    function buildSections(sections = []) {
        return sections
            .filter(section => section && (section.html || section.image || section.text))
            .map(section => {
                const body = section.html
                    ? section.html
                    : section.image
                        ? `<img src="${section.image}" alt="${escapeHtml(section.alt || section.title || 'Imagen')}">`
                        : `<p>${escapeHtml(section.text || '')}</p>`;
                return `
                    <section class="report-section">
                        ${section.title ? `<h2>${escapeHtml(section.title)}</h2>` : ''}
                        ${body}
                    </section>
                `;
            })
            .join('');
    }

    function printHtmlReport({ title, subtitle = '', summaryCards = [], sections = [] }) {
        const iframe = document.createElement('iframe');
        iframe.style.position = 'fixed';
        iframe.style.right = '0';
        iframe.style.bottom = '0';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = '0';
        iframe.setAttribute('aria-hidden', 'true');
        document.body.appendChild(iframe);

        const doc = iframe.contentWindow.document;
        const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>${escapeHtml(title || 'Encaja.app')}</title>
<style>
    :root { color-scheme: light; }
    * { box-sizing: border-box; }
    body {
        margin: 0;
        padding: 20px;
        font-family: Inter, Arial, sans-serif;
        color: #1f2937;
        background: #fff;
    }
    h1 {
        margin: 0 0 8px;
        font-size: 24px;
        line-height: 1.2;
    }
    .subtitle {
        margin: 0 0 20px;
        color: #6b7280;
        font-size: 13px;
    }
    .summary {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-bottom: 20px;
    }
    .summary-card {
        min-width: 150px;
        padding: 12px 14px;
        border: 1px solid #d1d5db;
        border-radius: 12px;
        background: #f9fafb;
    }
    .summary-card strong {
        display: block;
        font-size: 22px;
        line-height: 1.1;
        color: #065f46;
    }
    .summary-card span {
        display: block;
        margin-top: 4px;
        font-size: 12px;
        color: #6b7280;
        text-transform: uppercase;
        letter-spacing: .04em;
    }
    .report-section {
        margin-bottom: 18px;
        break-inside: avoid;
        page-break-inside: avoid;
    }
    .report-section h2 {
        margin: 0 0 10px;
        font-size: 16px;
    }
    .report-section img {
        display: block;
        width: 100%;
        max-width: 100%;
        height: auto;
        border: 1px solid #d1d5db;
        border-radius: 12px;
    }
    .report-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }
    .report-table th,
    .report-table td {
        border: 1px solid #e5e7eb;
        padding: 8px 10px;
        text-align: left;
        vertical-align: top;
    }
    .report-table th {
        background: #f3f4f6;
    }
    .muted {
        color: #6b7280;
    }
    @page { size: A4 portrait; margin: 12mm; }
</style>
</head>
<body>
    <h1>${escapeHtml(title || 'Encaja.app')}</h1>
    ${subtitle ? `<p class="subtitle">${escapeHtml(subtitle)}</p>` : ''}
    ${summaryCards.length ? `<div class="summary">${buildSummaryCards(summaryCards)}</div>` : ''}
    ${buildSections(sections)}
</body>
</html>`;

        doc.open();
        doc.write(html);
        doc.close();

        const finalize = () => {
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
            setTimeout(() => iframe.remove(), 1000);
        };

        if (doc.readyState === 'complete') {
            setTimeout(finalize, 150);
        } else {
            iframe.onload = () => setTimeout(finalize, 150);
        }
    }

    window.EncajaReport = { printHtmlReport, escapeHtml };
})();
