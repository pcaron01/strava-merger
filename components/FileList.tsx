'use client';

interface UploadedFile {
  name: string;
  size: number;
  id: string;
}

interface FileListProps {
  files: UploadedFile[];
  onRemove: (id: string) => void;
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

export default function FileList({ files, onRemove }: FileListProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-text mb-4">Uploaded Files</h3>
      <ul className="space-y-2">
        {files.map((file) => (
          <li
            key={file.id}
            className="flex items-center justify-between p-3 bg-bg-secondary border border-border rounded-lg"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">📄</span>
              <div>
                <p className="text-sm font-medium text-text">{file.name}</p>
                <p className="text-xs text-gray-600">{formatFileSize(file.size)}</p>
              </div>
            </div>
            <button
              onClick={() => onRemove(file.id)}
              className="text-gray-400 hover:text-text transition text-lg"
              title="Remove file"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
