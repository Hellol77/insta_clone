import { User } from "@/model/user";
import React from "react";
import Avartar from "./Avartar";

type Props = {
  user: User;
};

export default function SideBar({ user: { name, username, image } }: Props) {
  return (
    <>
      <div className="flex items-center">
        {image && <Avartar image={image} />}
        <div className="ml-4">
          <p className="font-bold">{username}</p>
          <p className="text-lg text-neutral-500 leading-4"> {name}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-500 mt-8">About, Help</p>
      <p className="font-bold text-sm mt-8 text-neutral-500">@Hellol</p>
    </>
  );
}
