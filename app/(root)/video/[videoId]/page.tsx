import { redirect } from "next/navigation";

import VideoPlayer from "@/app/components/VideoPlayer";
import VideoInfo from "@/app/components/VideoInfo";
import VideoDetailHeader from "@/app/components/VideoDetailHeader";
import { getTranscript, getVideoById } from "@/lib/actions/video";

const page = async ({ params }: Params) => {
  const { videoId } = await params;

  const { user, video } = await getVideoById(videoId);

  console.log("Video id by bunny :");
  console.log(video.videoId);


  if (!video) redirect("/404");

  const transcript = await getTranscript(videoId);

  return (
    <main className="wrapper page">
      <VideoDetailHeader
        title={video.title}
        createdAt={video.createdAt}
        userImg={user?.image}
        username={user?.name}
        videoId={video.videoId}
        ownerId={video.userId}
        visibility={video.visibility}
        thumbnailUrl={video.thumbnailUrl}
        id={video.id}
      />

      <section className="video-details">
        <div className="content">
          {/* <VideoPlayer videoId={video.videoId} /> */}
          <VideoPlayer videoId={video.videoId} />
        </div>

        <VideoInfo
          transcript={transcript}
          title={video.title}
          createdAt={video.createdAt}
          description={video.description}
          videoId={videoId}
          videoUrl={video.videoUrl}
        />
      </section>
    </main>
  );
};

export default page;
