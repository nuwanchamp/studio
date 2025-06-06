'use client';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ResumeDownloadButton() {
  const { toast } = useToast();

  const handleDownload = () => {
    // In a real app, ensure 'resume_placeholder.pdf' exists in the /public directory
    const link = document.createElement('a');
    link.href = '/resume_placeholder.pdf'; // User should replace this with their actual resume file
    link.download = 'YourName_Resume.pdf'; // User should customize the downloaded file name
    
    // Check if file exists (rudimentary check, server-side check is more reliable)
    // For this example, we assume it exists or will be added by the user.
    // You might want to add error handling if the file doesn't exist.
    
    try {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast({
        title: "Resume Download Started",
        description: "Your resume should begin downloading shortly.",
      });
    } catch (error) {
      console.error("Download failed:", error);
      toast({
        title: "Download Failed",
        description: "Could not start resume download. Please ensure 'resume_placeholder.pdf' is in the public folder.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button 
      onClick={handleDownload} 
      variant="default" 
      size="lg"
      className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 group"
    >
      <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
      Download Resume
    </Button>
  );
}
