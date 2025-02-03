
import type React from "react"
import { useState, type KeyboardEvent } from "react"
import { X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface TagInputProps {
  initialTags?: string[]
  onChange?: (tags: string[]) => void
}

export function TagInput({ initialTags = [], onChange }: TagInputProps) {
  const [tags, setTags] = useState<string[]>(initialTags)
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault()
      addTag()
    }
  }

  const addTag = () => {
    const trimmedInput = inputValue.trim()
    if (trimmedInput && !tags.includes(trimmedInput)) {
      const newTags = [...tags, trimmedInput]
      setTags(newTags)
      setInputValue("")
      onChange?.(newTags)
    }
  }

  const removeTag = (tagToRemove: string) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove)
    setTags(newTags)
    onChange?.(newTags)
  }

  return (
    <div className="flex flex-wrap gap-2 p-2 border rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
      {tags.map((tag) => (
        <Badge key={tag} variant="secondary" className="gap-1 pr-1">
          {tag}
          <button
            type="button"
            onClick={() => removeTag(tag)}
            className="rounded-full hover:bg-muted"
            aria-label={`Remove ${tag} tag`}
          >
            <X size={14} />
          </button>
        </Badge>
      ))}
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        onBlur={addTag}
        className="flex-grow border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Enter tags..."
        aria-label="Enter tags"
      />
    </div>
  )
}

