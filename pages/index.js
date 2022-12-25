import Head from "next/head";
import Header from "../components/Header";
import { useSession, getSession } from "next-auth/react";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { db } from "../firebase";
import Widgets from "../components/Widgets";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-black overflow-hidden">
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />

        <Feed />

        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      session,
      posts: docs,
    },
  };
}
