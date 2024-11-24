import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface VacancyDialogProps {
  isOpen: boolean;
  onClose: () => void;
  vacancy: {
    title: string;
    description: string;
    detailedDescription?: string[];
    requirements?: string[];
    benefits?: string[];
    tags: string[];
    location: string;
    type: string;
  };
  onApply: () => void;
}

export default function VacancyDialog({
  isOpen,
  onClose,
  vacancy,
  onApply,
}: VacancyDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium">
            {vacancy.title}
          </DialogTitle>
        </DialogHeader>

        {/* Main content */}
        <div className="space-y-8 py-4">
          {/* Overview */}
          <div>
            <h4 className="text-lg font-medium mb-3">Overview</h4>
            <div className="flex gap-4 mb-4 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="font-medium mr-2">Location:</span>
                {vacancy.location}
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Type:</span>
                {vacancy.type}
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {vacancy.description}
            </p>
          </div>

          {/* Detailed Description */}
          {vacancy.detailedDescription && (
            <div>
              <h4 className="text-lg font-medium mb-3">{"What you'll do"}</h4>
              <ul className="list-disc pl-4 space-y-2 text-gray-600">
                {vacancy.detailedDescription.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Requirements */}
          {vacancy.requirements && (
            <div>
              <h4 className="text-lg font-medium mb-3">Requirements</h4>
              <ul className="list-disc pl-4 space-y-2 text-gray-600">
                {vacancy.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Benefits */}
          {vacancy.benefits && (
            <div>
              <h4 className="text-lg font-medium mb-3">Benefits</h4>
              <ul className="list-disc pl-4 space-y-2 text-gray-600">
                {vacancy.benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div>
            <h4 className="text-lg font-medium mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {vacancy.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="rounded-sm bg-transparent"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Apply button */}
          <Button
            onClick={onApply}
            className="w-full bg-black hover:bg-black/90"
          >
            Apply for this position
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
