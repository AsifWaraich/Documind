declare module "pdf-parse" {
  interface PDFInfo {
	Title?: string;
	Author?: string;
	Subject?: string;
	Creator?: string;
	Producer?: string;
	CreationDate?: string;
	ModDate?: string;
	PDFFormatVersion?: string;
	[key: string]: unknown;
  }

  interface PDFData {
	numpages: number;
	numrender: number;
	info: PDFInfo;
	metadata: unknown;
	text: string;
	version: string;
  }

  interface PDFOptions {
	pagerender?: (pageData: {
	  getTextContent: () => Promise<{ items: { str: string }[] }>;
	}) => Promise<string>;
	max?: number;
  }

  function pdf(dataBuffer: Buffer, options?: PDFOptions): Promise<PDFData>;

  export default pdf;
}
