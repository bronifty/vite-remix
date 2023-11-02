import { json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import MyFunction, { MY_MESSAGE } from "~/stuff";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  return json({ message: MY_MESSAGE });
}

export default function Index() {
  const { message } = useLoaderData<typeof loader>();
  return (
    <>
      <div>{message}</div>
      <MyFunction />
      <Link to="blah">Go to blah</Link>
    </>
  );
}