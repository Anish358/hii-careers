import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import MDEditor from "@uiw/react-md-editor";
import { useParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { Briefcase, DoorClosed, DoorOpen, MapPinIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ApplyJobDrawer } from "@/components/ApplyJobDrawer";
import ApplicationCard from "@/components/ApplicationCard";

import useFetch from "@/hooks/useFetch";
import { getSingleJob, updateHiringStatus } from "@/api/Jobs";

const JobPage = () => {
  const { id } = useParams();
  const { isLoaded, user } = useUser();

  const {
    loading: loadingJob,
    data: job,
    fn: fnJob,
  } = useFetch(getSingleJob, {
    job_id: id,
  });

  useEffect(() => {
    if (isLoaded) fnJob();
  }, [isLoaded]);

  const { loading: loadingHiringStatus, fn: fnHiringStatus } = useFetch(
    updateHiringStatus,
    {
      job_id: id,
    }
  );

  const handleStatusChange = (value) => {
    const isOpen = value === "open";
    fnHiringStatus(isOpen).then(() => fnJob());
  };

  if (!isLoaded || loadingJob) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div className="flex flex-col gap-10 mt-8 p-6  shadow-lg rounded-lg">
      <div className="flex flex-col-reverse gap-6 md:flex-row justify-between items-center">
        <h1 className="gradient-title font-extrabold pb-3 text-4xl sm:text-6xl">
          {job?.title}
        </h1>
        <img
          src={job?.company?.logo_url}
          className="h-16 w-16 object-contain"
          alt={job?.title}
        />
      </div>

      <div className="flex justify-between items-center border-b pb-4">
        <div className="flex items-center gap-2 text-lg">
          <MapPinIcon className="text-gray-500" /> {job?.location}
        </div>
        <div className="flex items-center gap-2 text-lg">
          <Briefcase className="text-gray-500" /> {job?.applications?.length}{" "}
          Applicants
        </div>
        <div className="flex items-center gap-2 text-lg">
          {job?.isOpen ? (
            <>
              <DoorOpen className="text-green-500" />{" "}
              <span className="text-green-500">Open</span>
            </>
          ) : (
            <>
              <DoorClosed className="text-red-500" />{" "}
              <span className="text-red-500">Closed</span>
            </>
          )}
        </div>
      </div>

      {job?.recruiter_id === user?.id && (
        <Select onValueChange={handleStatusChange}>
          <SelectTrigger
            className={`w-full mt-4 ${
              job?.isOpen ? "bg-green-100" : "bg-red-100"
            } rounded-lg`}
          >
            <SelectValue
              placeholder={
                "Hiring Status " + (job?.isOpen ? "( Open )" : "( Closed )")
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
      )}

      <div className="mt-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">About the job</h2>
        <p className="sm:text-lg text-gray-700">{job?.description}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          What we are looking for
        </h2>
        <MDEditor.Markdown
          source={job?.requirements}
          className="bg-transparent sm:text-lg text-gray-700"
        />
      </div>

      {job?.recruiter_id !== user?.id && (
        <ApplyJobDrawer
          job={job}
          user={user}
          fetchJob={fnJob}
          applied={job?.applications?.find((ap) => ap.candidate_id === user.id)}
        />
      )}
      {loadingHiringStatus && <BarLoader width={"100%"} color="#36d7b7" />}
      {job?.applications?.length > 0 && job?.recruiter_id === user?.id && (
        <div className="flex flex-col gap-4 mt-6">
          <h2 className="font-bold mb-4 text-xl ml-1">Applications</h2>
          {job?.applications.map((application) => {
            return (
              <ApplicationCard key={application.id} application={application} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default JobPage;
