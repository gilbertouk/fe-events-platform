import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <main className="bg-gray-100 h-screen flex items-center">
      <div className="container flex flex-col max-w-3xl min-h-fill place-items-center px-4 py-12 gap-8 bg-white rounded-t">
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="font-roboto text-lg sm:text-2xl lg:text-4xl font-bold">
              Contact Us
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[100px]"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <Button>Send message</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
