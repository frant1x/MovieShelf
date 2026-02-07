import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/api";
import SectionHeader from "../../components/ui/SectionHeader";
import no_poster from "../../assets/images/no-poster.png";
import ListSection from "../../components/ui/ListSection";

const ProfileLists = () => {
  const movies = [];
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchMyLists = async () => {
      try {
        const response = await api.get("lists/?mine=true");
        setLists(response.data);
        console.log("Fetched lists:", response.data);
      } catch (err) {
        console.error("Fetch lists error:", err);
      }
    };
    fetchMyLists();
  }, []);

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
        <ListSection lists={lists} movies={movies} no_poster={no_poster} />
      </section>
    </div>
  );
};

export default ProfileLists;
