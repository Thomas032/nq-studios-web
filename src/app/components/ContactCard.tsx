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

function ContactCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");
  const { toast } = useToast();

  // Fetch CSRF token only once on component mount
  useEffect(() => {
    const fetchCsrfToken = async () => {
      const response = await fetch("/api/csrf");
      const data = await response.json();
      setCsrfToken(data.csrfToken);
    };

    fetchCsrfToken();

    const handleOpenContact = () => {
      setIsOpen(true); // Open the dialog when the custom event is triggered
    };

    // Listen for the 'openContact' custom event
    window.addEventListener("openContact", handleOpenContact);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("openContact", handleOpenContact);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const response = await fetch("/api/contact", {
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
        title: "Message Sent ✅",
        description:
          "We have received your message and will get back to you shortly.",
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
          "There was an error submitting your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Please fill out the form below to get in touch with us.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
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
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#01A7E1] hover:bg-[#018DBF]"
          >
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ContactCard;
