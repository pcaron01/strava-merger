'use client';

import { useState } from 'react';
import FileList from './FileList';

interface UploadedFile {
  name: string;
  size: number;
  id: string;
}

export default function DropZone() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = droppedFiles.filter(
      (file) => file.name.endsWith('.gpx') || file.name.endsWith('.fit')
    );

    const newFiles = validFiles.map((file) => ({
      name: file.name,
      size: file.size,
      id: `${file.name}-${Date.now()}`,
    }));

    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleRemoveFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-12 text-center transition ${
          isDragging
            ? 'border-accent bg-bg-secondary'
            : 'border-border hover:border-accent'
        }`}
      >
        <div className="text-4xl mb-4">📁</div>
        <p className="text-text font-medium mb-2">Drop your activity files here</p>
        <p className="text-gray-600 text-sm">Supports .gpx and .fit files</p>
      </div>

      {files.length > 0 && (
        <div className="mt-8">
          <FileList files={files} onRemove={handleRemoveFile} />
        </div>
      )}
    </div>
  );
}
