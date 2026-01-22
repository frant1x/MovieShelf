import { useOutletContext } from "react-router-dom";
import SectionHeader from "../../components/ui/SectionHeader";
import no_poster from "../../assets/images/no-poster.png";
import ListSection from "../../components/ui/ListSection";

const ProfileLists = () => {
  const recentLists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const recentMovies = [1, 2, 3, 4, 5];
  return (
    <div>
      <section className="mb-3">
        <SectionHeader
          title="My Lists"
          link={{
            to: "/profile/lists/new",
            text: "Create list",
            variant: "button",
          }}
        />
        <ListSection
          recentLists={recentLists}
          recentMovies={recentMovies}
          no_poster={no_poster}
        />
      </section>
    </div>
  );
};

export default ProfileLists;
