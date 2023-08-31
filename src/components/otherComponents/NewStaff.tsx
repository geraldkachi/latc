import * as yup from "yup";
import { Select } from "antd";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "react-query";
import { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";

import Input from "../input/Input";
import Button from "../button/Button";
import { strip } from "../../utils/helper";
import { createStaff } from "../../server/base";
import { CreateStaffType } from "../../../types";

export const rolesOption = [
  { label: "Admin", value: "admin" },
  { label: "Super Admin", value: "super-admin" },
];

interface Props {
  setStateNewStaff: Dispatch<SetStateAction<boolean>>;
}
let schema = yup.object().shape({
  email: yup.string().required("Enter a valid Email"),
  role: yup.string().required("Enter a valid Role"),
  lastName: yup.string().required("Enter a valid Last Name"),
  firstName: yup.string().required("Enter a valid First Name"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least 1 lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least 1 uppercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least 1 symbol"
    )
    .required("Password is required"),
});
const NewStaff = ({ setStateNewStaff }: Props) => {
  const queryClient = useQueryClient();
  const formInput = useRef<HTMLInputElement>(null);
  const [role, setRole] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const mutation = useMutation(createStaff);

  const onFinish = (e: FormEvent) => {
    e.preventDefault();

    const values: CreateStaffType = {
      //@ts-ignore
      firstName: e.target["firstName"].value,
      //@ts-ignore
      lastName: e.target["lastName"].value,
      //@ts-ignore
      password: e.target["password"].value,
      //@ts-ignore
      email: e.target["email"].value,
      role,
      phoneNumber,
    };

    schema
      .validate(values)
      .then((_val) => {
        mutation.mutate(values, {
          onSuccess: (_data) => {
            queryClient.invalidateQueries("getStaffs");
            setStateNewStaff((prev) => !prev);
            toast.success("Staff Created Successfully");
          },
          onError: (e: unknown) => {
            if (e instanceof Error) {
              toast.error(e.message);
            }
          },
        });
      })
      .catch((e) => {
        toast.error(e?.message);
      });
  };
  return (
    <div className="my-5 sm:my-0">
      <div className="flex items-center justify-between mb-10">
        <span className="font-bold text-xl sm:text-4xl">New Staff</span>
      </div>
      <form onSubmit={onFinish}>
        <Input
          label="First Name"
          name="firstName"
          ref={formInput}
          type="text"
          placeholder="First Name"
        />
        <Input
          label="Last Name"
          name="lastName"
          ref={formInput}
          type="text"
          placeholder="Last Name"
        />
        <Input
          label="Email Address"
          ref={formInput}
          name="email"
          placeholder="Email Address"
          type="email"
          // className="w-full border border-[#C2D0D6] p-3 rounded-lg focus:outline-[#2B8572]" divStyle="mt-5"
        />
        {/* <Input label='Position' ref={formInput} name='role' type="text" placeholder="Position" /> */}
        <div className="mt-5">
          <div className="">
            <label className="my-1 text-black flex items-center text-left text-sm font-semibold mt-1">
              Role
            </label>
          </div>
          <Select
            placeholder="Select Role"
            style={{ width: "100%" }}
            size="large"
            onSelect={(e) => setRole(e)}
            options={rolesOption}
            className="mb-3"
          />
        </div>
        <Input
          label="Phone"
          name="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(strip(e.target.value))}
          placeholder="Phone Number"
        />
        <Input
          label="Password"
          ref={formInput}
          name="password"
          type="password"
          placeholder="Password"
        />

        <div className="flex items-center justify-center">
          <Button
            className="text-center rounded-lg mt-5 w-full"
            loading={mutation.isLoading}
            type="submit"
            title="Add New Staff"
          />
        </div>
      </form>
    </div>
  );
};

export default NewStaff;
