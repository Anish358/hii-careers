import React, { useState } from "react";
import {
  Search,
  Briefcase,
  Users,
  BookOpen,
  ArrowRight,
  Building2,
  Rocket,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CareersLanding = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">HiiCareers</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Find Jobs
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Companies
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              For Employers
            </a>
            <Button variant="ghost" className="text-blue-600 hover:bg-blue-50">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Create Account
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t py-2">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <a href="#" className="text-gray-700 py-2 hover:text-blue-600">
                Find Jobs
              </a>
              <a href="#" className="text-gray-700 py-2 hover:text-blue-600">
                Companies
              </a>
              <a href="#" className="text-gray-700 py-2 hover:text-blue-600">
                Resources
              </a>
              <a href="#" className="text-gray-700 py-2 hover:text-blue-600">
                For Employers
              </a>
              <Button
                variant="ghost"
                className="justify-start text-blue-600 hover:bg-blue-50"
              >
                Sign In
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Create Account
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Find Your Dream Career Path
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Connect with top employers and discover opportunities aligned
                with your skills and ambitions.
              </p>

              <div className="bg-white rounded-lg p-3 shadow-lg flex flex-col md:flex-row items-center gap-3">
                <div className="flex-grow w-full">
                  <div className="relative">
                    <Search
                      className="absolute left-3 top-3 text-gray-400"
                      size={20}
                    />
                    <Input
                      type="text"
                      placeholder="Job title, skills, or company"
                      className="pl-10 w-full"
                    />
                  </div>
                </div>
                <div className="flex-grow w-full">
                  <div className="relative">
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
                </div>
                <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                  Search Jobs
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <p className="text-blue-100 mr-2">Popular searches:</p>
                <a href="#" className="text-white hover:underline">
                  Software Engineer
                </a>
                <span className="text-blue-300">•</span>
                <a href="#" className="text-white hover:underline">
                  Data Scientist
                </a>
                <span className="text-blue-300">•</span>
                <a href="#" className="text-white hover:underline">
                  Product Manager
                </a>
                <span className="text-blue-300">•</span>
                <a href="#" className="text-white hover:underline">
                  Remote
                </a>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center md:justify-end">
              <img
                src="/api/placeholder/500/400"
                alt="Career growth illustration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 bg-gray-50">
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
                <TabsTrigger value="tech">Tech</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="finance">Finance</TabsTrigger>
                <TabsTrigger value="remote">Remote</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-0">
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
                      <div className="border-t p-4 bg-gray-50 flex justify-between items-center">
                        <span className="text-gray-500 text-sm">
                          Posted 2 days ago
                        </span>
                        <Button
                          variant="ghost"
                          className="text-blue-600 hover:text-blue-800 p-0 font-medium flex items-center"
                        >
                          View Details
                          <ArrowRight size={16} className="ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  View All Jobs
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="tech" className="space-y-0">
              <div className="text-center py-12">
                <p className="text-gray-600">Showing tech industry jobs</p>
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="space-y-0">
              <div className="text-center py-12">
                <p className="text-gray-600">Showing marketing industry jobs</p>
              </div>
            </TabsContent>

            <TabsContent value="finance" className="space-y-0">
              <div className="text-center py-12">
                <p className="text-gray-600">Showing finance industry jobs</p>
              </div>
            </TabsContent>

            <TabsContent value="remote" className="space-y-0">
              <div className="text-center py-12">
                <p className="text-gray-600">Showing remote jobs</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose HiiCareers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to connecting talent with opportunity through our
              innovative platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-blue-50 border-0">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Briefcase size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Curated Opportunities
                </h3>
                <p className="text-gray-600">
                  Access exclusive job listings from top employers across
                  industries, matched to your unique skills and preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-0">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Career Coaching</h3>
                <p className="text-gray-600">
                  Get personalized guidance from industry experts who can help
                  you navigate your career path and professional development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-0">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Skills Development</h3>
                <p className="text-gray-600">
                  Access resources and courses to enhance your skills and stay
                  competitive in today's evolving job market.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Career Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our library of guides, tips, and tools to help you excel
              in your career journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Resume Building Guide",
                desc: "Learn how to craft a standout resume that gets noticed by hiring managers.",
                icon: <GraduationCap size={24} />,
              },
              {
                title: "Interview Preparation",
                desc: "Tips and strategies to help you ace your next job interview.",
                icon: <Users size={24} />,
              },
              {
                title: "Salary Negotiation",
                desc: "Expert advice on how to negotiate the compensation package you deserve.",
                icon: <Rocket size={24} />,
              },
            ].map((resource, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 text-blue-600">
                    {resource.icon}
                    <h3 className="font-bold text-lg ml-2">{resource.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{resource.desc}</p>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-800 p-0 font-medium flex items-center"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              View All Resources
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Take the Next Step in Your Career?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of professionals who have found their dream jobs
              through HiiCareers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Find Jobs
              </Button>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-blue-700"
              >
                For Employers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from professionals who found their perfect career match
              through HiiCareers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "HiiCareers helped me find exactly the right opportunity in half the time. Their personalized approach made all the difference.",
                name: "Sarah Johnson",
                role: "Product Manager at TechCorp",
              },
              {
                quote:
                  "The career coaching service was invaluable. I completely revamped my resume and approach to interviews, which led to multiple offers.",
                name: "David Chen",
                role: "Software Engineer at Innovative AI",
              },
              {
                quote:
                  "As someone changing careers, I was worried about the transition. HiiCareers connected me with mentors who guided me through the process.",
                name: "Michelle Taylor",
                role: "Data Analyst at FinTech Solutions",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-grow">
                    <div className="text-yellow-400 flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersLanding;
