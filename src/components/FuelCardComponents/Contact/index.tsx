import RateStar from "@/components/RateStar";
import Layout from "../Layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AvatarAlexTremblot from "@/assets/images/avatar_alex_tremblot.png";

const Contact = () => {
  return (
    <Layout className="rounded-bl-[150px] rounded-br-[150px] grid grid-cols-1 lg:grid-cols-2 pb-[120px]">
      <div className="gap-6 flex flex-col justify-center items-start">
        <h1 className="font-bold text-2xl lg:text-5xl leading-[120%]">
          Join Our Fuel Network Today
        </h1>
        <p className="font-medium text-18 leading-[150%]">
          Unlock savings and support with our trusted fuel card services.
          Contact us to get started!
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <img src={AvatarAlexTremblot} alt="Alex Tremblot" className="w-auto h-auto object-contain"/>
            <div>
              <p className="font-bold">Alex Tremblot</p>
              <p>CFO at Tremblot Services</p>
              <RateStar numberOfStars={5} rateStar={5} />
            </div>
          </div>
          <p className="font-semibold text-14 leading-[150%]">
            Excellent service. Lorem ipsum dolor vit vet m ipsum dolor vit vetm
            ipsum dolor vit vetm ipsum dolor vit vetm ipsum dolor vit vetm ipsum
            dolor vit vetm ipsum dolor vit vet
          </p>
        </div>
      </div>
      <div className="grid grid-col-1 gap-6 bg-white border rounded-[24px] px-[50px] py-8">
        <h2 className="flex justify-center text-primary font-bold text-30 leading-[150%]">
          Contact Us
        </h2>
        <div className="grid grid-cols-2 gap-5 text-black_202937">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name" className="font-bold">
              Name*
            </Label>
            <Input type="name" id="name" placeholder="Enter your name" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name" className="font-bold">
              Email*
            </Label>
            <Input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="phone-number" className="font-bold">
              Phone number
            </Label>
            <Input type="number" id="number" placeholder="+1 (555) 000-0000" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="city" className="font-bold">
              City*
            </Label>
            <Input type="city" id="name" placeholder="Enter your city" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Message</Label>
            <Input
              type="name"
              id="name"
              placeholder="Message"
              className="h-[96px]"
            />
          </div>
        </div>
        <Button variant="default" className="font-bold">
          Send us a message
        </Button>
        <p className="flex justify-center text-black_202937">
          Or, <span className="font-bold underline">Call Us 888-888-8888</span>
        </p>
      </div>
    </Layout>
  );
};

export default Contact;
