import { getSavedJobs } from "@/api/Jobs";
import JobCard from "@/components/JobCard";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";

const SavedJobs = () => {
  const { isLoaded } = useUser();

  const {
    loading: loadingSavedJobs,
    data: savedJobs,
    fn: fnSavedJobs,
  } = useFetch(getSavedJobs);

  useEffect(() => {
    if (isLoaded) {
      fnSavedJobs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  if (!isLoaded || loadingSavedJobs) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  const defaultJobs = [
    {
      id: 1,
      title: "Senior Product Designer",
      company: "Acme Inc.",
      location: "San Francisco, CA",
      salary: "$120k - $150k",
      tags: ["Design", "UI/UX", "Full-time"],
      description:
        "We are looking for a senior product designer with a strong background in user experience design and product development. You will be responsible for designing and implementing user-friendly and efficient product interfaces to optimize user experience and improve website performance.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      salary: "$90k - $120k",
      tags: ["React", "JavaScript", "Contract"],
      description:
        "We are looking for a frontend developer with a strong background in React and JavaScript. You will be responsible for developing and implementing frontend components to optimize user experience and improve website performance.",
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Innovative AI",
      location: "Boston, MA",
      salary: "$110k - $140k",
      tags: ["Python", "ML", "Full-time"],
      description:
        "We are looking for a data scientist with a strong background in machine learning and data analysis. You will be responsible for developing and implementing machine learning models to predict customer behavior and optimize marketing strategies.",
    },
  ];

  return (
    <div>
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
        Saved Jobs
      </h1>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {defaultJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onJobAction={fnSavedJobs}
            savedInit={true}
          />
        ))}
      </div>

      {/* {loadingSavedJobs === false && (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedJobs?.length ? (
            savedJobs.map((saved) => {
              const jobData = saved?.job || {};
              return (
                <JobCard
                  key={saved.id}
                  job={jobData}
                  onJobAction={fnSavedJobs}
                  savedInit={true}
                />
              );
            })
          ) : (
            <div>No Saved Jobs 👀</div>
          )}
        </div>
      )} */}
    </div>
  );
};

export default SavedJobs;
