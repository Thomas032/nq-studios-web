import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

function ApplyCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");
  const { toast } = useToast();
  const jobID = 0;

  // Fetch CSRF token only once on component mount
  useEffect(() => {
    const fetchCsrfToken = async () => {
      const response = await fetch("/api/csrf");
      const data = await response.json();
      setCsrfToken(data.csrfToken);
    };

    fetchCsrfToken();

    const handleOpenApply = () => {
      setIsOpen(true);
    };

    // Listen for the 'openContact' custom event
    window.addEventListener("openApply", handleOpenApply);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("openApply", handleOpenApply);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("motivation"),
    };

    const response = await fetch("/api/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-csrf-token": csrfToken,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      console.log("Form submitted successfully", result);

      // Display a success toast message
      toast({
        title: "Application Sent ✅",
        description:
          "We have received your application and will get back to you shortly.",
      });
      // Clear the form inputs and display a success message
      (e.target as HTMLFormElement).reset();
      // Close the dialog after form submission
      setIsOpen(false);
    } else {
      console.log("Form submission failed", result);
      // Display an error toast message
      toast({
        title: "Something went wrong ❌",
        description:
          "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Apply</DialogTitle>
          <DialogDescription>
            Please fill out the form below to apply for the desired position.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="number" hidden value={jobID} />
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="message" className="text-sm font-medium">
              What is your motivation to apply for this job?
            </label>
            <Textarea
              id="Motivation"
              name="motivation"
              placeholder="I want to apply to this position because ..."
              rows={5}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#01A7E1] hover:bg-[#018DBF]"
          >
            Send Application
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ApplyCard;
