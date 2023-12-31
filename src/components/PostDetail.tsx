import { FullPost, SimplePost } from "@/model/post";
import React from "react";
import useSWR from "swr";

type Props = {
  post: SimplePost;
};

export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image, createdAt, likes } = post;
  const { data } = useSWR<FullPost>(`/api/posts/${id}`);
  const commets = data?.comments;
  return <>PostDetail</>;
}
