import SectionHeader from "../SectionHeader/SectionHeader";
import TeamCard from "../TeamCard/TeamCard";

const Team = () => {
  return (
    <div>
      <SectionHeader header="AMAZING TEAM" title="Meet Our Chef" />
      <div className="w-11/12 lg:w-[77%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-10 lg:mt-16">
        <TeamCard
          image="https://i.postimg.cc/cCpDdzYn/team-1.png"
          name="Anthony Bourdain"
          description="French Cuisine Specialist"
        />
        <TeamCard
          image="https://i.postimg.cc/DwPKYQkg/team-2.png"
          name="Julia Child"
          description="Chinese Cuisine Specialist"
        />
        <TeamCard
          image="https://i.postimg.cc/Jh7WwyRW/team-3.png"
          name="Bobby Flay"
          description="Italian Cuisine Specialist"
        />
      </div>
    </div>
  );
};

export default Team;
