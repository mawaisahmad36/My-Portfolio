import Marquee from "react-fast-marquee";

export const MainMarquee = () => {
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

  return (
    <>
    <div
      style={{
        width: "100%",
        // overflow: "hidden",
      }}
      className="mt-4"
    >
      {/* Rotated Wrapper */}
      <div
        style={{
          transform: "rotate(-4deg)",
          width: "120%",
          marginLeft: "-10%",
          backgroundColor: "#E5E5E5",
          padding: "20px 0",
        }}
      >
        <Marquee pauseOnHover={false} speed={50} gradient={false}>
          {skills.concat(skills).map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "60px",
              }}
            >
              {/* Skill Text */}
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

              {/* White Dot */}
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#14213D",
                  borderRadius: "50%",
                  marginLeft: "40px",
                }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
    </>
  );
};
