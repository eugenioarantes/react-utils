export function transformListInCsv(header: string[], list: any[]): string {
  const headerText = header.join(';');

  const rows = list.reduce((acc, item) => {
    const items = header.map((col) => {
      return !item[col] ? '' : item[col];
    });

    const values = Object.values(items);

    return `${acc}${values.join(';').replace(',', ' -')}\n`;
  }, '');

  const csv = `${headerText}\n${rows}`;

  return csv;
}

export function downloadCsv(file: string, filename: string): void {
  const link = document.createElement('a');

  link.href = `data:text/plain;charset=utf-8, ${encodeURIComponent(file)}`;
  link.setAttribute('download', `${filename}.csv`);

  document.body.appendChild(link);

  link.click();

  link.remove();
}
