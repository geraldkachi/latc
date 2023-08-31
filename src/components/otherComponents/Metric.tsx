import * as yup from "yup";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { Select, Spin, Tag, Switch } from "antd";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  Dispatch,
  useState,
  FormEvent,
  useEffect,
  SetStateAction,
} from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import {
  getMetric,
  createMetrics,
  updateMetrics,
} from "../../server/base/metrix";
interface Props {
  staffName: string;
  participantId: string;
  setStateMetric: Dispatch<SetStateAction<boolean>>;
}

const SelectCompletedMeeting = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];
const SelectJoinedEarly = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];
const SelectAttendedMeeting = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];

const SelectCompletedTask = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
  { label: "Half Done", value: "half-done" },
  { label: "Now Completed", value: "now-completed" },
];
const SelectPart = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
  { label: "Bad Network", value: "bad-network" },
  { label: "No Power", value: "no-power" },
  { label: "Permitted", value: "permitted" },
];

const SelectReview = [
  { label: "Good", value: "good" },
  { label: "Excellent", value: "excellent" },
  { label: "Fair", value: "fair" },
  { label: "Bad", value: "bad" },
];

const Metric = ({ setStateMetric, participantId, staffName }: Props) => {
  const queryClient = useQueryClient();
  const { id: standupId } = useParams();
  const {
    data,
    isLoading: metricLoading,
    isFetching,
  } = useQuery(["getMetric", participantId], () =>
    getMetric(standupId as string, participantId)
  );

  const [bugs, setBugs] = useState<number>();
  const [review, setReview] = useState<string>();
  const [comment, setComment] = useState<string>();
  const [ghostMode, setGhostMode] = useState<number>();
  const [exempt, setExempt] = useState<boolean>(true);
  const [participation, setParticipation] = useState<string>();
  const [completedTask, setCompletedTask] = useState<string>();
  const [joinedEarly, setJoinedEarly] = useState<boolean | null>();
  const [attendedMeeting, setAttendedMeeting] = useState<boolean | null>();
  const [completedMeeting, setCompletedMeeting] = useState<boolean | null>();

  const { mutate, isLoading } = useMutation(
    data?.data ? updateMetrics : createMetrics,
    {
      onSuccess: (res) => {
        toast.success(res?.message);
        queryClient.invalidateQueries(`metric-${participantId}`);
        queryClient.invalidateQueries("getMetrics");
        setStateMetric((prev) => !prev);
      },
      onError: (e: Error) => {
        toast?.error(e?.message);
      },
    }
  );

  useEffect(() => {
    setBugs(data?.data ? data?.data?.bugs : null);
    setExempt(data?.data ? data?.data?.exempt : false);
    setReview(data?.data ? data?.data?.review : null);
    setComment(data?.data ? data?.data?.comment : null);
    setGhostMode(data?.data ? data?.data?.ghostMode : null);
    setJoinedEarly(data?.data ? data?.data?.joinedEarly : null);
    setParticipation(data?.data ? data?.data?.participation : null);
    setCompletedTask(data?.data ? data?.data?.completedTask : null);
    setAttendedMeeting(data?.data ? data?.data?.attendedMeeting : null);
    setCompletedMeeting(data?.data ? data?.data?.completedMeeting : null);
  }, [data?.data]);

  const schema = yup.object().shape({
    standupId: yup.string().required("Enter standup id"),
    staffId: yup.string().required("Enter staff id"),
    exempt: yup.boolean().required("Enter exempt status"),
    ...(exempt
      ? {
          comment: yup.string().nullable(),
          joinedEarly: yup.boolean().nullable(),
          attendedMeeting: yup.boolean().nullable(),
          review: yup.string().nullable(),
          bugs: yup.number().nullable(),
          ghostMode: yup.number().nullable(),
          completedMeeting: yup.boolean().nullable(),
          participation: yup.string().nullable(),
          completedTask: yup.string().nullable(),
        }
      : {
          comment: yup.string().optional().nullable(),
          joinedEarly: yup.boolean().required(),
          attendedMeeting: yup.boolean().required(),
          review: yup.string().required(),
          bugs: yup.number().required(),
          ghostMode: yup.number().required(),
          completedMeeting: yup.boolean().required(),
          participation: yup.string().required(),
          completedTask: yup.string().required(),
        }),
  });

  const onFinish = (e: FormEvent) => {
    e.preventDefault();

    let values = {
      bugs,
      exempt,
      review,
      comment,
      standupId,
      ghostMode,
      joinedEarly,
      participation,
      completedTask,
      attendedMeeting,
      completedMeeting,
      staffId: participantId,
    };

    schema
      .validate(values)
      .then(() => {
        mutate({
          ...values,
          ...(data?.data && { id: data.data.id }),
        });
      })
      .catch((e) => toast.error(e?.message));
  };

  return (
    <div className="my-5 sm:my-0">
      {(metricLoading || isFetching) && (
        <div className="grid place-items-center">
          <Spin />
        </div>
      )}
      <div className="flex items-center justify-between mb-5">
        <span className="font-bold text-xl sm:text-4xl">Metric</span>
      </div>
      <div className="text-right mb-5">
        <Tag className="capitalize">{staffName}</Tag>
      </div>
      <form onSubmit={onFinish}>
        <div className="mb-3">
          <div className="">
            <label className="text-black flex items-center text-left text-sm font-semibold">
              Exempt
            </label>
          </div>
          <Switch
            disabled={isLoading || isFetching}
            onChange={(e) => setExempt(e)}
            checked={exempt}
            className="mt-2"
          />
        </div>
        <div>
          <div className="">
            <label className="text-black flex items-center text-left text-sm font-semibold">
              Completed Meeting
            </label>
          </div>
          <Select
            placeholder="Select Completed Meeting"
            style={{ width: "100%" }}
            size="large"
            allowClear
            disabled={isLoading || isFetching || exempt}
            onChange={(e) => setCompletedMeeting(e)}
            value={completedMeeting}
            options={SelectCompletedMeeting}
            className="mb-2 py-3"
          />
        </div>
        <div>
          <div className="">
            <label className="text-black flex items-center text-left text-sm font-semibold">
              Attended Meeting
            </label>
          </div>
          <Select
            placeholder="Select attended Meeting"
            style={{ width: "100%" }}
            size="large"
            disabled={isLoading || isFetching || exempt}
            allowClear
            onChange={(e) => setAttendedMeeting(e)}
            value={attendedMeeting}
            options={SelectAttendedMeeting}
            className="mb-2 py-3"
          />
        </div>
        <div>
          <div className="">
            <label className="text-black flex items-center text-left text-sm font-semibold">
              Joined Early
            </label>
          </div>
          <Select
            placeholder="Select joined Early"
            style={{ width: "100%" }}
            size="large"
            disabled={isLoading || isFetching || exempt}
            allowClear
            onChange={(e) => setJoinedEarly(e)}
            value={joinedEarly}
            options={SelectJoinedEarly}
            className="mb-2 py-3"
          />
        </div>

        <div>
          <div className="">
            <label className="text-black flex items-center text-left text-sm font-semibold">
              Participation
            </label>
          </div>
          <Select
            placeholder="Select Participation"
            style={{ width: "100%" }}
            size="large"
            allowClear
            disabled={isLoading || isFetching || exempt}
            onChange={(e) => setParticipation(e)}
            value={participation}
            options={SelectPart}
            className="mb-2 py-3"
          />
        </div>

        <div>
          <div className="">
            <label className="text-black flex items-center text-left text-sm font-semibold">
              Review
            </label>
          </div>
          <Select
            placeholder="Select Review"
            style={{ width: "100%" }}
            size="large"
            disabled={isLoading || isFetching || exempt}
            allowClear
            onChange={(e) => setReview(e)}
            value={review}
            options={SelectReview}
            className="mb-2 py-3"
          />
        </div>
        <div>
          <div className="">
            <label className="text-black flex items-center text-left text-sm font-semibold">
              Completed Task
            </label>
          </div>
          <Select
            placeholder="Select Completed Task"
            style={{ width: "100%" }}
            size="large"
            allowClear
            disabled={isLoading || isFetching || exempt}
            onChange={(e) => setCompletedTask(e)}
            value={completedTask}
            options={SelectCompletedTask}
          />
        </div>
        <Input
          label="Bugs/Defects"
          value={bugs}
          onChange={(e) => setBugs(Number(e.target.value))}
          placeholder="Bugs"
          disabled={isLoading || isFetching || exempt}
          min={0}
          type="number"
        />
        <Input
          label="Ghost Mode"
          value={ghostMode}
          onChange={(e) => setGhostMode(Number(e.target.value))}
          placeholder="Ghost Mode"
          min={0}
          type="number"
          disabled={isLoading || isFetching || exempt}
        />
        <Input
          label="Comments"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment"
          disabled={isLoading || isFetching}
          type="text"
        />

        <div className="flex items-center justify-center">
          <Button
            loading={isLoading || metricLoading || isFetching}
            className="text-center rounded-lg mt-5"
            type="submit"
            title={`${data?.data === null ? "Create Metric" : "Update Metric"}`}
          />
        </div>
      </form>
    </div>
  );
};

export default Metric;
