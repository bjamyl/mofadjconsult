"use client"

import { Download, FileText, ImageIcon, FileVideo, Music, Archive, File } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface DocumentCardProps {
  fileName: string
  fileSize: string
  fileType: string
  filePath: string
  description?: string
}

const getFileIcon = (fileType: string) => {
  const type = fileType.toLowerCase()

  if (type.includes("pdf") || type.includes("doc") || type.includes("txt")) {
    return FileText
  } else if (type.includes("image") || type.includes("png") || type.includes("jpg") || type.includes("jpeg")) {
    return ImageIcon
  } else if (type.includes("video") || type.includes("mp4") || type.includes("avi")) {
    return FileVideo
  } else if (type.includes("audio") || type.includes("mp3") || type.includes("wav")) {
    return Music
  } else if (type.includes("zip") || type.includes("rar") || type.includes("tar")) {
    return Archive
  } else {
    return File
  }
}

const getFileTypeColor = (fileType: string) => {
  const type = fileType.toLowerCase()

  if (type.includes("pdf")) return "text-red-600"
  if (type.includes("doc")) return "text-blue-600"
  if (type.includes("image")) return "text-green-600"
  if (type.includes("video")) return "text-purple-600"
  if (type.includes("audio")) return "text-orange-600"
  if (type.includes("zip") || type.includes("rar")) return "text-yellow-600"
  return "text-gray-600"
}

export default function DocumentCard({ fileName, fileSize, fileType, filePath, description }: DocumentCardProps) {
  const FileIcon = getFileIcon(fileType)
  const fileTypeColor = getFileTypeColor(fileType)

  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a")
    link.href = filePath
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Card
      className="w-full max-w-sm hover:shadow-lg transition-shadow duration-200 cursor-pointer group"
      onClick={handleDownload}
    >
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className={`p-3 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors ${fileTypeColor}`}>
            <FileIcon className="h-8 w-8" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 truncate group-hover:text-gray-700">{fileName}</h3>
                <p className="text-xs text-gray-500 mt-1">
                  {fileType.toUpperCase()} • {fileSize}
                </p>
                {description && <p className="text-xs text-gray-600 mt-2 line-clamp-2">{description}</p>}
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation()
                  handleDownload()
                }}
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Click to download</span>
            <Download className="h-3 w-3" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
