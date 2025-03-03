import ApplicationCard from "@/components/ApplicationCard";
import CreatedApplications from "@/components/CreatedApplications";
import CreatedJobs from "@/components/CreatedJobs";
import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";

const MyJobs = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div>
      <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8">
        {user?.unsafeMetadata?.role === "candidate"
          ? "My Applications"
          : "My Jobs"}
      </h1>
      {user?.unsafeMetadata?.role === "candidate" ? (
        <CreatedApplications />
      ) : (
        <CreatedJobs />
      )}

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <>
          <ApplicationCard
            application={{
              id: 1,
              job: {
                title: "Software Engineer",
                company: { name: "Tech Solutions" },
              },
              status: "Pending",
            }}
            isCandidate={true}
          />
          <ApplicationCard
            application={{
              id: 2,
              job: {
                title: "Product Manager",
                company: { name: "Innovative Products" },
              },
              status: "Interview",
            }}
            isCandidate={true}
          />
          <ApplicationCard
            application={{
              id: 3,
              job: {
                title: "Data Analyst",
                company: { name: "Data Insights" },
              },
              status: "Rejected",
            }}
            isCandidate={true}
          />
        </>
      </div>
    </div>
  );
};

export default MyJobs;
