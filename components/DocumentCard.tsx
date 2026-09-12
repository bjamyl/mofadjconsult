import { Download, FileText } from "lucide-react";

interface DocumentCardProps {
  fileName: string;
  fileSize: string;
  fileType: string;
  filePath: string;
  description?: string;
}

export default function DocumentCard({ fileName, fileSize, fileType, filePath, description }: DocumentCardProps) {
  return (
    <a
      href={filePath}
      download={fileName}
      className="group flex items-start gap-4 rounded-brand-md border border-line bg-white p-6 text-left transition-colors hover:border-navy"
    >
      <div className="rounded-brand-sm bg-paper p-3 text-navy">
        <FileText className="h-8 w-8" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-semibold text-ink group-hover:text-navy">{fileName}</h3>
        <p className="mt-1 text-step--1 text-muted-ink">
          {fileType.toUpperCase()} &middot; {fileSize}
        </p>
        {description && <p className="mt-2 text-step--1 text-slate">{description}</p>}
        <span className="mt-3 flex items-center gap-1.5 text-step--1 font-semibold text-navy">
          Download <Download className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}
