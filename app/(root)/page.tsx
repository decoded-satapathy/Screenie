import { dummyCards } from "@/constants";
import Header from "../components/Header";
import VideoCard from "../components/VideoCard";
import { getAllVideos } from "@/lib/actions/video";
import EmptyState from "../components/EmptyState";

async function Page({ searchParams }: SearchParams) {

  const { query, filter, page } = await searchParams;

  const { videos, pagination } = await getAllVideos(query, filter, Number(page) || 1);
  return (
    <main className="wrapper page">
      <Header
        title="All Videos"
        subHeader="Public Library"
      />

      {videos?.length > 0 ?
        (
          <section className="video-grid">
            {videos.map(({ video, user }) => (
              <VideoCard
                key={video.id}
                {...video}
                thumbnail={video.thumbnailUrl || ""}
                userImg={user?.image || ""}
                username={user?.name || "Unknown"}
              />
            ))}
          </section>
        ) :
        (
          <div>
            <EmptyState
              title="No video found"
              description="Try adjusting you're search"
              icon="/assets/icons/video.svg"
            />
          </div>
        )
      }

    </main>
  )
}

export default Page; 
