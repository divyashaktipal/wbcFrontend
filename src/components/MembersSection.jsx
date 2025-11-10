import { useState } from "react";

const MembersSection = () => {
  const [members, setMembers] = useState([
    {
      name: "Shally Srivastava",
      age: 50,
      jobTitle: "Virasat ensemble Gurukul of Performing Arts",
      avatarUrl: "./shally-srivastava.jpg",
    },
    {
      name: "Acharya Dhankunwer Nagar ",
      age: 48,
      jobTitle: "Tarot readar Dhan",
      avatarUrl: "./Acharya-Dhankunwer-Nagar.jpg",
    },
    {
      name: "Mansi Tak",
      age: 26,
      jobTitle: "Chocominis Chocolates & Mini’s Wardrobe",
      avatarUrl: "./Mansi-Tak.jpeg",
    },
    {
      name: "Rukhsana Sabunwala",
      age: 38,
      jobTitle: "A.A.Sabunwala Traders",
      avatarUrl: "./Rukhsana-Sabunwala.jpg",
    },
    {
      name: "Pratima S. Ratnani",
      age: 44,
      jobTitle: "Coach",
      avatarUrl: "./Pratima-S-Ratnani.jpeg",
    },
    {
      name: "Antawnia Jamison",
      age: 42,
      jobTitle: "Business Analyst",
      avatarUrl: "./Mansi-Tak.jpeg",
    },
    {
      name: "Pratima S. Ratnani",
      age: 44,
      jobTitle: "Coach",
      avatarUrl: "./Pratima-S-Ratnani.jpeg",
    },
    {
      name: "Antawnia Jamison",
      age: 42,
      jobTitle: "Business Analyst",
      avatarUrl: "./Mansi-Tak.jpeg",
    },
  ]);

  return (
    <section className="py-10 px-6 bg-gray-50">
      {/* Header with Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Our Active Members</h2>
        <button className="text-white sm:px-2 px-4 py-2 rounded font-medium bg-gradient-to-r from-[#6A0DAD] to-[#9B59B6] hover:from-[#B24592] hover:to-[#F15F79] hover:shadow-lg transition-all duration-300 md:h-11 items-center justify-center flex">
          View All Members
        </button>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border hover:border-[#B24592]"
          >
            <div className="flex justify-center">
              <img
                src={member.avatarUrl || "/default-avatar.png"}
                alt={member.name}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-center">{member.name}</h3>
            <p className="text-sm text-gray-600 text-center">
              {member.age} - {member.jobTitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembersSection;
