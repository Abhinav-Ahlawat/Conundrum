import { useState } from "react";

import ankit from "../assets/members/ANKIT KUMAR HAZRA.PNG";
import adityaVashishta from "../assets/members/ADITYA VASHISHTA.PNG";
import rishabh from "../assets/members/RISABH TIWARI.PNG";

import tanish from "../assets/members/TANISH TYAGI.PNG";
import abhinav from "../assets/members/ABHINAV AHLAWAT.PNG";
import ayush from "../assets/members/AYUSH KAUSHIK.jpeg";
import adityaSaini from "../assets/members/ADITYA SAINI.PNG";
import adityaMohan from "../assets/members/ADITYA MOHAN.PNG";
import vedatma from "../assets/members/VEDATMA KRITI.PNG";
import om from "../assets/members/OM JOSHI.PNG";
import arnab from "../assets/members/ARNAB BANDYOPADHYAY.PNG";
import shiva from "../assets/members/SHIVANAND SINGH.PNG";
import navneet from "../assets/members/NAVNEET PATEL.PNG";
import yuvraj from "../assets/members/YUVRAJ.PNG";
import rohit from "../assets/members/ROHIT MENON.PNG";
import abhinavSrivastava from "../assets/members/ABHINAV SRIVASTAVA.PNG";
import rehan from "../assets/members/MOHAMMED REHAN IBRAHIM SHAIKH.PNG";
import shwetank from "../assets/members/SHWETANK.PNG";


const seniorMembers = [
  {
    name: "Ankit Kumar Hazra",
    role: "Senior Member",
    image: ankit,
    linkedin: "https://www.linkedin.com/in/ankit-hazra/",
  },
  {
    name: "Aditya Vashistha",
    role: "Senior Member",
    image: adityaVashishta,
    linkedin: "https://www.linkedin.com/in/aditya-vashishta4946/",
  },
  {
    name: "Rishabh Tiwari",
    role: "Senior Member",
    image: rishabh,
    linkedin: "https://www.linkedin.com/in/rishabh-tiwari-84388115a/",
  },
];


const juniorMembers = [
  {
    name: "Tanish Tyagi",
    role: "Junior Member",
    image: tanish,
    linkedin: "https://www.linkedin.com/in/tanish-tyagi-127ba9288/",
  },
  {
    name: "Abhinav Ahlawat",
    role: "Junior Member",
    image: abhinav,
    linkedin: "https://www.linkedin.com/in/abhinavahlawat/",
  },
  {
    name: "Ayush Kaushik",
    role: "Junior Member",
    image: ayush,
    linkedin: "https://www.linkedin.com/in/ayush-kaushik-bhapusa-bb-uphr/",
  },
  {
    name: "Aditya Saini",
    role: "Junior Member",
    image: adityaSaini,
    linkedin: "https://www.linkedin.com/in/aditya-saini-252567213/",
  },
  {
    name: "Aditya Mohan",
    role: "Junior Member",
    image: adityaMohan,
    linkedin: "https://www.linkedin.com/in/aditya-mohan-600b92268/",
  },
  {
    name: "Vedatma Kriti",
    role: "Junior Member",
    image: vedatma,
    linkedin: "https://www.linkedin.com/in/vedatma-kriti-b8547616b/",
  },
  {
    name: "Om Joshi",
    role: "Junior Member",
    image: om,
    linkedin: "https://www.linkedin.com/in/omjoshi15/",
  },
  {
    name: "Arnab Bandyopadhyay",
    role: "Junior Member",
    image: arnab,
    linkedin: "https://www.linkedin.com/in/arnab-bandyopadhyay-mba/",
  },
  {
    name: "Shiva Nand Singh",
    role: "Junior Member",
    image: shiva,
    linkedin: "https://www.linkedin.com/in/shiva-nand-singh-84a403200/",
  },
  {
    name: "Navneet Patel Verma",
    role: "Junior Member",
    image: navneet,
    linkedin: "https://www.linkedin.com/in/navneet-patel-verma-7039a91ab/",
  },
  {
    name: "Yuvraj Kampani",
    role: "Junior Member",
    image: yuvraj,
    linkedin: "https://www.linkedin.com/in/yuvraj-kampani-79847b295/",
  },
  {
    name: "Rohit Menon",
    role: "Junior Member",
    image: rohit,
    linkedin: "https://www.linkedin.com/in/rohit-menon-7b2779185/",
  },
  {
    name: "Abhinav Srivastava",
    role: "Junior Member",
    image: abhinavSrivastava,
    linkedin: "https://www.linkedin.com/in/abhinav-srivastava02/",
  },
  {
    name: "Mohammed Rehan Ibrahim Shaikh",
    role: "Junior Member",
    image: rehan,
    linkedin: "https://www.linkedin.com/in/mohammed-rehan-shaikh/",
  },
  {
    name: "Shwetank",
    role: "Junior Member",
    image: shwetank,
    linkedin: "https://www.linkedin.com/in/shwetank-0a6aa71b2/",
  },
];


function MemberCard({ member }) {
  return (
    <div className="member-card">

      <div className="member-image-wrapper">
        <img
          src={member.image}
          alt={member.name}
        />
      </div>

      <div className="member-info">
        <h3>{member.name}</h3>

        <p>{member.role}</p>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "18px",
              height: "18px",
              background: "#1748a5",
              color: "#ffffff",
              borderRadius: "3px",
              fontSize: "12px",
              fontWeight: "700",
              lineHeight: "1",
            }}
          >
            in
          </span>

          LinkedIn
        </a>
      </div>

    </div>
  );
}


function Members() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="members section" id="members">

      <div className="section-heading">
        <span className="section-label">OUR PEOPLE</span>

        <h2>
          Meet the Conundrum Collective
        </h2>

        <p>
          A diverse team of student consultants driven by structured
          problem-solving and business strategy.
        </p>
      </div>


      <div className="member-group">

        <h3 className="member-group-title">
          Senior Members
        </h3>

        <div className="members-grid senior-grid">
          {seniorMembers.map((member) => (
            <MemberCard
              key={member.name}
              member={member}
            />
          ))}
        </div>

      </div>


      <div className="member-group">

        <h3 className="member-group-title">
          Junior Members
        </h3>

        <div className="members-grid">

          {(showAll
            ? juniorMembers
            : juniorMembers.slice(0, 6)
          ).map((member) => (
            <MemberCard
              key={member.name}
              member={member}
            />
          ))}

        </div>


        <button
          className="view-members-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All Members"}

          <span>
            {showAll ? "↑" : "↓"}
          </span>
        </button>

      </div>

    </section>
  );
}

export default Members;