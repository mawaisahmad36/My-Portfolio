import Marquee from "react-fast-marquee";

export const MainMarquee2 = () => {
  const skills = [
    "WordPress",
    "ReactJS",
    "Laravel",
    "HTML",
    "CSS",
    "Bootstrap",
    "MySQL",
    "TailWind",
  ];

  const duplicatedSkills = skills.concat(skills);

  return (
    <div style={{ width: "100%", overflow: "hidden" }} className="mt-5">

      {/* BACK DARK STRIP */}
      <div
        style={{
          transform: "rotate(4deg)",
          width: "120%",
          marginLeft: "-10%",
          backgroundColor: "#14213D",
          padding: "25px 0",
          position: "relative",
          top: "40px",
          zIndex: 1,
        }}
      >
        <Marquee speed={40} gradient={false}>
          {duplicatedSkills.map((item, index) => (
            <div
              key={`back-${index}`}
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "60px",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(18px, 4vw, 36px)",
                  fontWeight: 600,
                  color: "#fff",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
              </span>

              <span
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#ffffff",
                  borderRadius: "50%",
                  marginLeft: "25px",
                }}
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* FRONT LIGHT STRIP */}
      <div
        style={{
          transform: "rotate(-4deg)",
          width: "120%",
          marginLeft: "-10%",
          backgroundColor: "#E5E5E5",
          padding: "25px 0",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Marquee speed={50} gradient={false} direction="right">
          {duplicatedSkills.map((item, index) => (
            <div
              key={`front-${index}`}
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "60px",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(18px, 4vw, 36px)",
                  fontWeight: 600,
                  color: "#000",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
              </span>

              <span
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#14213D",
                  borderRadius: "50%",
                  marginLeft: "25px",
                }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};