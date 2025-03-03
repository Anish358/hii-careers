import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import {
  Search,
  Briefcase,
  Users,
  BookOpen,
  ArrowRight,
  Building2,
  MapPinIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center ">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          BUILD YOUR CAREER AT HII
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Connect with top employers and discover opportunities aligned with
          your skills and ambitions.
        </p>
      </section>
      <div className="rounded-lg p-3 shadow-lg flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="md:w-1/4">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="Job title, skills, or company"
            className="pl-10 w-full"
          />
        </div>
        <div className="md:w-1/4">
          <Building2
            className="absolute left-3 top-3 text-gray-400"
            size={20}
          />
          <Input
            type="text"
            placeholder="City, state, or remote"
            className="pl-10 w-full"
          />
        </div>
        <Link to="/jobs">
          <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white">
            Search Jobs
          </Button>
        </Link>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Featured Jobs */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover top positions from companies looking for talent like
              yours
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Jobs</TabsTrigger>
                <TabsTrigger value="tech">Ingalls</TabsTrigger>
                <TabsTrigger value="marketing">Mission</TabsTrigger>
                <TabsTrigger value="finance">Newport </TabsTrigger>
                <TabsTrigger value="remote">Corporate</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Senior Product Designer",
                    company: "Acme Inc.",
                    location: "San Francisco, CA",
                    salary: "$120k - $150k",
                    tags: ["Design", "UI/UX", "Full-time"],
                  },
                  {
                    title: "Frontend Developer",
                    company: "TechCorp",
                    location: "Remote",
                    salary: "$90k - $120k",
                    tags: ["React", "JavaScript", "Contract"],
                  },
                  {
                    title: "Data Scientist",
                    company: "Innovative AI",
                    location: "Boston, MA",
                    salary: "$110k - $140k",
                    tags: ["Python", "ML", "Full-time"],
                  },
                  {
                    title: "Marketing Manager",
                    company: "GrowthCo",
                    location: "New York, NY",
                    salary: "$85k - $110k",
                    tags: ["SEM", "Content", "Full-time"],
                  },
                  {
                    title: "DevOps Engineer",
                    company: "CloudSolutions",
                    location: "Remote",
                    salary: "$130k - $160k",
                    tags: ["AWS", "Kubernetes", "Full-time"],
                  },
                  {
                    title: "Account Executive",
                    company: "SalesPro",
                    location: "Chicago, IL",
                    salary: "$75k - $100k + Commission",
                    tags: ["Sales", "B2B", "Full-time"],
                  },
                ].map((job, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden transition-shadow hover:shadow-md"
                  >
                    <CardContent className="p-0">
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-bold text-lg">{job.title}</h3>
                            <p className="text-gray-600">{job.company}</p>
                          </div>
                          <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                            {job.company.charAt(0)}
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="flex items-center text-gray-600 mb-2">
                            <Building2 size={16} className="mr-2" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Briefcase size={16} className="mr-2" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="border-t p-4 flex justify-between items-center">
                        <span className="text-gray-500 text-sm">
                          Posted 2 days ago
                        </span>
                        <Link to={`/jobs`}>
                          <Button
                            variant="ghost"
                            className="text-blue-600 hover:text-blue-800 p-0 font-medium flex items-center"
                          >
                            View Details
                            <ArrowRight size={16} className="ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Link to="/jobs">
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600"
                  >
                    View All Jobs
                  </Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="tech" className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    id: 1,
                    title: "Software Engineer",
                    company: { name: "Tech Innovations" },
                    location: "New York, NY",
                    salary: "$100k - $130k",
                    tags: ["JavaScript", "Full-time", "Remote"],
                  },
                  {
                    id: 2,
                    title: "Data Scientist",
                    company: { name: "AI Labs" },
                    location: "San Francisco, CA",
                    salary: "$120k - $150k",
                    tags: ["Python", "Machine Learning", "Full-time"],
                  },
                  {
                    id: 3,
                    title: "Frontend Developer",
                    company: { name: "Web Solutions" },
                    location: "Remote",
                    salary: "$90k - $110k",
                    tags: ["React", "JavaScript", "Contract"],
                  },
                ].map((job) => (
                  <Card key={job.id} className="flex flex-col">
                    <CardContent className="flex flex-col gap-4 flex-1">
                      <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                          <MapPinIcon size={15} /> {job.location}
                        </div>
                      </div>
                      <hr />
                      <div className="flex items-center text-gray-600">
                        <Briefcase size={16} className="mr-2" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <Link to={`/jobs`}>
                        <Button
                          variant="ghost"
                          className="text-blue-600 hover:text-blue-800 p-0 font-medium flex items-center"
                        >
                          View Details
                          <ArrowRight size={16} className="ml-1" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    id: 1,
                    title: "Marketing Specialist",
                    company: { name: "Brand Builders" },
                    location: "Los Angeles, CA",
                    salary: "$70k - $90k",
                    tags: ["SEO", "Full-time", "Remote"],
                  },
                  {
                    id: 2,
                    title: "SEO Analyst",
                    company: { name: "Search Experts" },
                    location: "Chicago, IL",
                    salary: "$60k - $80k",
                    tags: ["SEO", "Analytics", "Full-time"],
                  },
                  {
                    id: 3,
                    title: "Content Strategist",
                    company: { name: "Creative Minds" },
                    location: "Remote",
                    salary: "$80k - $100k",
                    tags: ["Content", "Strategy", "Contract"],
                  },
                ].map((job) => (
                  <Card key={job.id} className="flex flex-col">
                    <CardContent className="flex flex-col gap-4 flex-1">
                      <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                          <MapPinIcon size={15} /> {job.location}
                        </div>
                      </div>
                      <hr />
                      <div className="flex items-center text-gray-600">
                        <Briefcase size={16} className="mr-2" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <Button
                        variant="ghost"
                        className="text-blue-600 hover:text-blue-800 p-0 font-medium flex items-center"
                      >
                        View Details
                        <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="finance" className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    id: 1,
                    title: "Financial Analyst",
                    company: { name: "Money Matters" },
                    location: "New York, NY",
                    salary: "$80k - $100k",
                    tags: ["Finance", "Full-time", "Remote"],
                  },
                  {
                    id: 2,
                    title: "Accountant",
                    company: { name: "Ledger Keepers" },
                    location: "San Francisco, CA",
                    salary: "$70k - $90k",
                    tags: ["Accounting", "Full-time", "Remote"],
                  },
                  {
                    id: 3,
                    title: "Investment Banker",
                    company: { name: "Wealth Advisors" },
                    location: "Chicago, IL",
                    salary: "$120k - $150k",
                    tags: ["Banking", "Full-time", "Remote"],
                  },
                ].map((job) => (
                  <Card key={job.id} className="flex flex-col">
                    <CardContent className="flex flex-col gap-4 flex-1">
                      <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                          <MapPinIcon size={15} /> {job.location}
                        </div>
                      </div>
                      <hr />
                      <div className="flex items-center text-gray-600">
                        <Briefcase size={16} className="mr-2" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <Button
                        variant="ghost"
                        className="text-blue-600 hover:text-blue-800 p-0 font-medium flex items-center"
                      >
                        View Details
                        <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="remote" className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    id: 1,
                    title: "Remote Customer Support",
                    company: { name: "Help Desk" },
                    location: "Remote",
                    salary: "$50k - $70k",
                    tags: ["Support", "Remote", "Full-time"],
                  },
                  {
                    id: 2,
                    title: "Remote Project Manager",
                    company: { name: "Global Projects" },
                    location: "Remote",
                    salary: "$90k - $120k",
                    tags: ["Management", "Remote", "Full-time"],
                  },
                  {
                    id: 3,
                    title: "Remote UX Designer",
                    company: { name: "Design Hub" },
                    location: "Remote",
                    salary: "$80k - $100k",
                    tags: ["Design", "Remote", "Contract"],
                  },
                ].map((job) => (
                  <Card key={job.id} className="flex flex-col">
                    <CardContent className="flex flex-col gap-4 flex-1">
                      <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                          <MapPinIcon size={15} /> {job.location}
                        </div>
                      </div>
                      <hr />
                      <div className="flex items-center text-gray-600">
                        <Briefcase size={16} className="mr-2" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <Button
                        variant="ghost"
                        className="text-blue-600 hover:text-blue-800 p-0 font-medium flex items-center"
                      >
                        View Details
                        <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits at HII</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We like our employees to feel confident and protected. In HII, we
              care about our team and their families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Briefcase size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Wellness</h3>
                <p className="text-gray-600">
                  Best-in-class medical, dental and vision plan choices onsite
                  health, vision and dental at some locations coaching, advocacy
                  and other wellness resources.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Future</h3>
                <p className="text-gray-600">
                  Savings Plan Options (401k) Financial planning tools,
                  education and expert guidance life insurance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Everyday</h3>
                <p className="text-gray-600">
                  Competitive pay employee discounts paid holidays and paid time
                  off tuition reimbursement early childhood and post-secondary
                  education scholarships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPage;
