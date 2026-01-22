import { useOutletContext } from "react-router-dom";
import SectionHeader from "../../components/ui/SectionHeader";
import no_poster from "../../assets/images/no-poster.png";
import MovieGrid from "../../components/ui/MovieGrid";
import ListSection from "../../components/ui/ListSection";
import ReviewSection from "../../components/ui/ReviewSection";

const ProfileOverview = () => {
  const { user } = useOutletContext();
  const recentMovies = [1, 2, 3, 4, 5];
  const recentLists = [1, 2];
  const recentReviews = [1, 2];

  return (
    <div>
      <section className="mb-3">
        <SectionHeader
          title="Recently Watched"
          link={{ to: "/profile/movies", text: "All movies" }}
        />
        <MovieGrid recentMovies={recentMovies} no_poster={no_poster} />
      </section>

      <section className="mb-3">
        <SectionHeader
          title="Recent Lists"
          link={{ to: "/profile/lists", text: "All lists" }}
        />
        <ListSection
          recentLists={recentLists}
          recentMovies={recentMovies}
          no_poster={no_poster}
        />
      </section>

      <section>
        <SectionHeader
          title="Recent Reviews"
          link={{ to: "/profile/reviews", text: "All reviews" }}
        />
        <ReviewSection recentReviews={recentReviews} no_poster={no_poster} />
      </section>
    </div>
  );
};

export default ProfileOverview;
